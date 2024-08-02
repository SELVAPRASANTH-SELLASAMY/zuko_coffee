import { useRef } from 'react';
import blogStyle from './blog.module.css';
function BlogTile({heading, content, image}){
    const blogContent = useRef();
    const blgTile = useRef();
    const viewFullContent = () => {
        blogContent.current.classList.toggle(blogStyle.viewMore);
        blgTile.current.classList.toggle(blogStyle.NowrapTile);
        blgTile.current.scrollIntoView({block:"center"});
    }
    return(
        <>
        <div ref={blgTile} className={blogStyle.blogTile}>
            <h3>{heading}</h3>
            <p ref={blogContent}>{content}</p>
            <img className={blogStyle.image} src={image} alt="image_group" />
            <button onClick={viewFullContent} className={blogStyle.moreButton}>More</button>
        </div>
        </>
    );
}
export default BlogTile;