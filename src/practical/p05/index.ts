import axios from "axios";
type api = {
  postid:number;
  id:number;
  name:string;
  email:string;
  body:string;
}
type commentPost ={
  id:number;
  body:string;
}

export async function safeFetchComment(commentId:number | null):Promise<commentPost | null>{
  try{
    const res= await axios.get<api[]>("https://jsonplaceholder.typicode.com/comments/{id}");
if (!commentId || typeof commentId !== 'number' || commentId <= 0) {
      return null;
    }
    const output = res.data.find((post:api) => post.id === commentId);
    if(!output){
      return null;
    }
    return {
      id: output.id,
      body: output.body
    };
  }catch(error){
    return null;
  }
}
// safeFetchComment(2);


