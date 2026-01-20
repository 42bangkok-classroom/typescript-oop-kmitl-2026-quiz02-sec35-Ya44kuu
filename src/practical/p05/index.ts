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
  title:string;
}

export async function safeFetchComment(commentId:number):Promise<commentPost>{
  try{
    const res= await axios.get<api[]>("https://jsonplaceholder.typicode.com/comments");
    if(commentId <0 || commentId >res.data.length || commentId === null || commentId === undefined){
    }
    const output:commentPost[] = res.data.filter((post:api) => post.id === commentId);
    console.log(output[0]);
    return {
      id: output[0].id,
      title: output[0].title
    };
  }catch(error){
    throw error;
  }
}
safeFetchComment(2);


