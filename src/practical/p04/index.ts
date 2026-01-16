import axios from "axios";

type ApiPost = {
  postId: number;
  id: number;
  name: string;
  email:string;
  body: string;
};

type UserPost = {
  id: number;
  body_counter: number = 0;
};

export async function countCommentsByPost(): Promise<UserPost[]> {
  try {
    const response = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  let score = 0;
    const posts: UserPost[] = response.data
      .filter((post: ApiPost) => {
      for(let i = 0;i < post.body.length;i++){
        if(post.body[i] === "/"){
          score += 1;
        }

      }
      score = 0;
  })
      .map((post: ApiPost): UserPost => ({
        id: post.id,
        body_counter: ,
      }));

    return posts;
  } catch (error) {
    throw error;
  }
}