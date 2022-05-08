---
title: flex布局详解
date: 2020-02-27 16:02:35
tags: [教程,css,gatsby]
---
# flex
今天来复习一下flex布局

上一个章节的居中布局，最后一种方法就是使用弹性盒子。

弹性盒子的基本性质：

1.flex的属性适用于父子，父的孙元素不适应；

2.flex-basis的计算法则有两个分支；

3.善用margin-auto



属性和作用:flex 可以控制容器的顺序，大小，分布，对齐；

**顺序 **order

**大小 **flex-basis

**分布 **

主轴 justify-content \[通过控制主轴方向上元素之外的剩余空间，来控制元素布局\]

辅轴 align-content \[作用于辅轴，效果类似于justify-content，但是对应的是多行元素，需要配合flex-wrap使用\]

**对齐**

align-item\[作用于辅轴，通过控制元素对齐的方式来控制元素的布局，作用于对齐的”基线“\]

align-self 对用于单个弹性容器

### 一、 主轴和辅轴
主轴方向上的尺寸即 主尺寸；

1.通常情况下，如果设定大小，弹性容器内的项目 会自动收缩；即一行收缩到各个项目的最小值，恰好可以容纳自身内容为限。

### 二、 对齐和空间
沿主轴方向的叫做 justification 排布

沿辅轴方向的叫做 alignment 对齐

1. justify-content 主轴排布

```css
.container{
   justify-content:flex-start;//默认值
//center,flex-end,space-between,space-around
其实本质上就是通过划分父容器的剩余空间来实现排布
}
```
水平方向的margin:auto

---
在张鑫旭的css世界中，我们讨论过一个元素的width是怎么”体现出来的“

我对于margin：auto;的理解类似于昆虫的”外骨骼“或者大气压，可能大气压比较贴合；

[drawio](98vtkf0NEOKnJVN6Lc4D8-v_NgngA54PukTZPNhNraY.svg)

上图只是为了理解，当margin 为auto的时候，子元素的width 是怎么在父容器中体现的。

我们把外层容器看成大气圈，子元素【包含内部的content和padding】看成是内部的一个气球。

当margin为auto的时候，气球在容器内收到了均匀的压力，就体现他在大气压下的”大小“

---
所以我们可以使用margin在主轴上实现一些布局：

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item self">3</div>
</div>
```
```css
.container{
  display:flex;
}
.item{
  width:50px;
  border:1px solid red;
}
.self{
  marigin-left:auto;
}
```
![image](images/vbfJNkjn22gvPk3lX0_JjIZXKcvlm65QsSCsTFtO_qc.png)

设置为margin:auto可以吃掉所有剩余空间，把4号项目推到右侧；

2. 辅轴对齐

在上个实例中我们在调试模式下，调高父元素.container元素的高度，会发现不管父容器有多高，里面的子元素总是填满的。

align-items

这个属性默认是stretch，放在**父容器**上用来调节子元素的对齐位置

```css
.container{
  slign-items:stretch;
//flex-end,flex-start,center
我觉得基本上就是控制 margin-top/bottom的值来实现的
//这么说其实比较不合适，因为对齐应该还是受到baseline 的影响，即文字和容器的基线。
//我们常常可以通过设置最大font-size 来实现基线的对齐
}
```
---
![image](images/e8o_xrCIRIJQv839FU5bN78QBrhw3vF6tYorM18W5v8.png)

![image](images/gUutM0sbhU_4oZ-GAP-NT-E8H2BVnT0yDQd1lieWbjo.png)

"容器的基线由较大活动项的基线决定，其他项自动与之对齐"

---
所以再上一个文档中，怎么实现居中布局的方法：flex布局

```html
<div class="container">
   <div class="item">等待被居中的元素</div>
</div>
```
```css
.container{//方法1
  display:flex;
  justify-content:center;
  align-items:center;
}
```
```css
.container{//方法2
  display:flex;
  margin:auto auto;
}

```
3. 尺寸

flex的可伸缩体现在三个属性上

flex-basis,flex-shrink,flex-grow

flex-basis 控制项目在 主轴方向上的，经过修正之前的，首选大小；

关键字为auto 时，这个项目可以从对应的属性（width/height）哪里获取主尺寸。

如果没有设置对应尺寸，那么该项目就根据其内容确定大小：【类似浮动元素的包裹性】

flex-grow:弹性系数，在父容器通过flex-basis设置了 首选大小值之后，如果还有剩余空间，该系数用来决策怎么处理。默认值是0，表示不再进行扩展；

flex-shrink:弹性系数，空加不够应该如何收缩。默认值是1，表示空间不够的时候，所有项目都会以自己的首选尺寸为基准等比例收缩



计算过程

1.检查flex-basis，确定家乡的主尺寸

2.确定实际的主尺寸，如果按照假想的主尺寸把各项排布好还有剩余空间，则根据flex-grow伸展；

如果空间不够，则根据flex-shrink收缩

计算公式：当空间多余时，根据各个项目配置的flex-grow 系数总和 和项目系数所占的比重进行伸展；

当空间不够的时候，单个项目的收缩为

一个项目需要收缩的值 = \[总共需要收缩的数值\] \*(*（item 's width *flex-shrink）/(the sum of all (item's width \* flex-shrink)))