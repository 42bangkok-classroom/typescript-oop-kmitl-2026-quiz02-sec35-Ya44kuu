import axios from "axios";

type ApiComment = {
  postId: number | null | undefined;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CommentCountByPost = {
  [postId: number]: number;
};

export async function countCommentsByPost(): Promise<CommentCountByPost> {
  try {
    const response = await axios.get<ApiComment[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const comments = response.data;

    if (comments.length === 0) {
      return {};
    }

    const result: CommentCountByPost = comments.reduce(
      (acc: CommentCountByPost, comment: ApiComment) => {
        if (typeof comment.postId !== "number") {
          return acc;
        }

        acc[comment.postId] = (acc[comment.postId] ?? 0) + 1;
        return acc;
      },
      {}
    );
    console.log(result); //ทำไมlogไม่ออก
    return result;
  } catch (error) {
    throw error;
  }
}
countCommentsByPost();

