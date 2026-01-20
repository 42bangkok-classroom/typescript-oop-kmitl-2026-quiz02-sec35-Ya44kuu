import axios from "axios";
type apipost = {
  userId:number;
  id:number;
  title:string;
  body:string;
}
type commentpost = {
  postId:number;
  id:number;
  name:string;
  email:string;
  body:string;
}
type comment_each_post = {
  postid:number;
  title:string;
  totalComments:number;

}
export async function mapPostWithCommentCount():Promise<comment_each_post[]> {
  try{
    const [post_res,comment_res] = await Promise.all([
      axios.get<apipost[]>("https://jsonplaceholder.typicode.com/posts"),
      axios.get<commentpost[]>("https://jsonplaceholder.typicode.com/comments")
    ]);

    const posts = post_res.data;
    const comments = comment_res.data;
    if (posts.length === 0){
      return [];
    }
    const output =  posts.map((post) =>{
      const totalComment = comments.filter((comment)=> comment.postId === post.id).length
      return{
        postid: post.id,
        title:post.title,
        totalComments:totalComment
      }
    });

    return output
  }catch(err){
    throw err;

  }
  
}

