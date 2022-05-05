import React from "react"
import { Link } from "gatsby"
import "../mystyles.scss"
const PostCard = (prop)=>{
    
    // title,date,desc,tags
    return (
        <div className="box">
            <article className="content" key={prop.title}>
                <header>
                    <h2 className="title">{prop.title}</h2>
                    <h6 className="subTitle">{prop.date}</h6>
                </header>
                <section>
                    <p
                         dangerouslySetInnerHTML={{
                          __html: prop.desc,
                         }}
                         >
                    </p>
                </section>

            </article>
            <div className="tags">
                {
                    prop.tags.map((tag) => {
                        const index = Math.random()*1000
                        return (
                            <Link key={index} to={"tag/"+tag} className="tag">{tag}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PostCard