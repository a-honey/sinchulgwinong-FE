import Button from "../Button";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactElement;
}

const Modal = ({ closeModal, children }: ModalProps) => {
  return (
    <div className="relative  rounded-[20px] flex flex-col flex bg-white p-[40px] z-[99999999] gap-[40px]">
      {children}
      {closeModal && (
        <Button
          variants="yellow"
          onClick={() => {
            closeModal();
          }}
          text="닫기"
        />
      )}
    </div>
  );
};

export default Modal;
