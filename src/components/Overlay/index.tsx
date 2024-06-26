import ReactDOM from "react-dom";

const Overlay = ({ children }: { children: React.ReactElement }) => {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center p-[300px] w-full h-full z-[99999998] fixed top-0 left-0 bg-[#00000070]">
      {children}
    </div>,
    document.getElementById("portal")!
  );
};

export default Overlay;
