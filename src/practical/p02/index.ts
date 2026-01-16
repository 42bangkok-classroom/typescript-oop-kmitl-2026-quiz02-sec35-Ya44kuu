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

export async function getPostsByUser(
  userId: number
): Promise<UserPost[]> {
  try {
    const response = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts: UserPost[] = response.data
      .filter((post: ApiPost) => post.userId === userId)
      .map((post: ApiPost): UserPost => ({
        id: post.id,
        title: post.title,
      }));

    return posts;
  } catch (error) {
    throw error;
  }
}

