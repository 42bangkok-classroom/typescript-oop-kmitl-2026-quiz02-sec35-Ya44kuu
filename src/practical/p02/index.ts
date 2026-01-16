import axios from "axios";

type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UserPost = {
  id: number;
  title: string;
};

export async function getPostsByUser(userId:number): Promise<UserPost[]> {
  try {
    const response = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts: UserPost[] = response.data.map(
      (post: ApiPost): UserPost => ({
        id: post.id,
        title: post.title,
      })
    );
  let val:UserPost[] =[];
  for(let i =0;i<userId;i++){
    val[i] = posts[i]
   }

  // console.log(val);
  return val;
  } catch (error) {
    throw error;
  }
}
// getPostsByUser(1)
