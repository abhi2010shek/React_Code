import { useReducer } from "react";
import { createContext } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostLlist = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostLlist = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type==="ADD_INITIAL_POSTS")
{
  newPostLlist = action.payload.posts;

} else if (action.type === "ADD_POST") {
    newPostLlist = [action.payload, ...currentPostList];
  }
  return newPostLlist;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost,addInitialPosts, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my Vacation. Hope to enjoy a lot. Peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gaye Bhai",
    body: "4 saal ke bad pass ho gye",
    reaction: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];
export default PostListProvider;
