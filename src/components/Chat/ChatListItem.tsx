const ChatListItem = () => {
  return (
    <div className="relative flex flex-col gap-[10px] pr-[20px] py-[30px] w-[255px]">
      <div className="flex justify-between">
        <div className="subTitle1">야옹이</div>
        <div className="detail2 text-gray3">오후 08:12</div>
      </div>
      <div className="detail1 text-gray3">구인 글 보고 연략드렸</div>
      <div className="absolute right-[30px] bottom-[20px]">1</div>
    </div>
  );
};

export default ChatListItem;
