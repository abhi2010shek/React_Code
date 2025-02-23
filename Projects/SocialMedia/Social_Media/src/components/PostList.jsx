import { useContext } from 'react'
import React from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post_list_store';
  const PostList =()=>{
    const {postList}=useContext(PostListData);
  return (
    <>
    {postList.map((post)=><Post key={post.id} post={post}/>)}
    </>
  )
}

export default PostList
