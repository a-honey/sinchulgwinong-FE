import Image, { StaticImageData } from "next/image";

const AdBanner = ({ src }: { src: StaticImageData }) => {
  return (
    <Image
      src={src}
      alt="배너 광고 이미지"
      className="absolute top-0 right-0 left-0 bottom-0"
    />
  );
};
export default AdBanner;
