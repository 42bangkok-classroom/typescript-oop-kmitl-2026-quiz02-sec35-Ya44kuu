import axios from "axios";
type api = {
  postid:number;
  id:number;
  name:string;
  email:string;
  title:string;
}
type commentPost ={
  id:number;
  body:string;
}

export async function safeFetchComment(commentId:number | null):Promise<commentPost | null>{
  try{
    const res= await axios.get<api[]>("https://jsonplaceholder.typicode.com/comments");
    if(!commentId || commentId <= 0) {
      return null;
    }
    const output = res.data.find((post:api) => post.id === commentId);
    // console.log(output[0]);
    if(!output){
      return null;
    }
    return {
      id: output.id,
      body: output.title
    };
  }catch(error){
    return null;
  }
}
// safeFetchComment(2);


