interface ButtonAuthentication {
  isDisable: boolean;
  onClick: () => void;
}

const ButtonAuthentication = ({ isDisable, onClick }: ButtonAuthentication) => {
  if (isDisable) {
    return (
      <button className="m-[15px] w-[114px] bg-[#f5f5f5]" onClick={onClick}>
        인증완료
      </button>
    );
  }
  return (
    <button className="m-[15px] w-[114px] bg-[#D9D9D9]" onClick={onClick}>
      인증
    </button>
  );
};

export default ButtonAuthentication;
