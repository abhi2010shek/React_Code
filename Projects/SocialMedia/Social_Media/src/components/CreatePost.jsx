import React, { useContext, useRef } from 'react'
import {PostList} from '../store/post_list_store';
const CreatePost = () => {
  const {addPost}= useContext(PostList)

  const userId_1=useRef();
  const postTitle_1 = useRef();
  const postBody_1 = useRef();
  const reaction_1 = useRef();
  const tags_1 = useRef();
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId= userId_1.current.value;
    const postTitle = postTitle_1.current.value;
    const postBody = postBody_1.current.value;
    const reaction = reaction_1.current.value;
    const tags = tags_1.current.value.split(" ");
    
    userId_1.current.value="";
    postTitle_1.current.value="";
    postBody_1.current.value="";
    reaction_1.current.value="";
    tags_1.current.value="";

    addPost(userId,postTitle,postBody,reaction,tags);
  };

  return (
    <form className='create-post' onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here</label>
        <input type="text" ref={userId_1} className="form-control" id="userId" placeholder='Your user Id' />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={postTitle_1} className="form-control" id="title" placeholder='How are you feeling Today...' />
      </div>
      
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post content</label>
        <textarea type="text" ref={postBody_1} rows='4' className="form-control" id="text" placeholder='Tell us more about it' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" ref={reaction_1} className="form-control" id="reactions" placeholder='How many people reacted to this post' />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input type="text" ref={tags_1} className="form-control" id="tags" placeholder='Please Enter tags using space' />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default CreatePost
