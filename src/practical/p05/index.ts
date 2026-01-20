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
    if(!commentId || typeof commentId !== 'number' || commentId <= 0) {
      console.log("f");
      return null;
    }
    const res= await axios.get<api[]>("https://jsonplaceholder.typicode.com/comments");
    const output = res.data.find((post:api) => post.id === commentId);
    if(!output){
      console.log("a");
      return null;
    }
    console.log({
      id: output.id,
      body: output.body
    })
    return {
      id: output.id,
      body: output.body
    };
  }catch(error){
    console.log("d");
    return null;
  }
}
safeFetchComment(3);


