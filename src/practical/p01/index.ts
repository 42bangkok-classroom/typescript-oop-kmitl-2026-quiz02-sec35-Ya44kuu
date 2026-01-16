import axios from "axios";

type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type EdgePost = {
  id: number;
  title: string;
};

export async function getEdgePosts(): Promise<EdgePost[]> {
  try {
    const response = await axios.get<ApiPost[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts: EdgePost[] = response.data.map(
      (post: ApiPost): EdgePost => ({
        id: post.id,
        title: post.title,
      })
    );

    if (posts.length === 1) {
      return [posts[0], posts[0]];
    }

    if (posts.length === 2) {
      return posts;
    }

    return [posts[0], posts[posts.length - 1]];
  } catch (error) {
    throw error;
  }
}

