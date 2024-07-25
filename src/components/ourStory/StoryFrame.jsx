import { useEffect, useRef, useState } from 'react';
import imageOutstory from '../../assets/Image-ourstory.svg';
import ourStoryStyle from './ourstory.module.css';
function StoryFrame({obj}){
    const content = useRef();
    const [expanded, setExpanded] = useState(false);
    useEffect(()=>{
        content.current.style.display = expanded ? 'block' : '-webkit-box';
    },[expanded]);
    return(
        <div className={ourStoryStyle.storyFrame}>
            <h2>OurStory</h2>
            <img src={imageOutstory} alt="image_outstory" />
            <p ref={content}>{obj.content}</p>
            <button onClick={()=>setExpanded(!expanded)} type='button' className={ourStoryStyle.moreButton}>{expanded ? 'Less' : 'More'}</button>
        </div>
    );
}
export default StoryFrame;