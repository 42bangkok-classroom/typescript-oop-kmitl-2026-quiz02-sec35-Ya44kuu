import axios from "axios";
type api = {
  id:number;
  body:string;
}
type commentPost ={
  id:number;
  body:string;
}

export async function safeFetchComment(commentId:number | null):Promise<commentPost | null>{
  try{
    if (typeof commentId !== "number" || commentId <= 0) {
      return null;
    }
    const res= await axios.get<api>(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const output = res.data
    // console.log({
    //   id: output.id,body: output.body
    // })
    return {
      id: output.id,body: output.body
    };
  }catch(error){
    // console.log("d");
    return null;
  }
}
safeFetchComment(0);


