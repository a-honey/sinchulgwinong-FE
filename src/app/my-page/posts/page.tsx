import CommentBox from "./CommentBox";
import PostBox from "./PostBox";

const Posts = () => {
  return (
    <>
      <h2 className="title1 mb-[50px]">작성 목록</h2>
      <div className="flex flex-col gap-[70px]">
        <PostBox />
        <CommentBox />
      </div>
    </>
  );
};

export default Posts;
