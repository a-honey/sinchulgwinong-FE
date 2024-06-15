const Writing = () => {
  return (
    <main className="mt-[72px] px-[130px]">
      <h1 className="text-[36px] mb-[40px]">게시글 작성</h1>
      <form className="flex flex-col items-end gap-[30px]">
        <input
          className="w-full p-[20px] border"
          placeholder="제목을 입력해주세요."
        />
        <textarea
          className="w-full p-[20px] border"
          rows={15}
          placeholder="글을 입력해주세요."
        />
        <div className="flex gap-[10px]">
          <button>취소</button>
          <button>등록</button>
        </div>
      </form>
    </main>
  );
};

export default Writing;
