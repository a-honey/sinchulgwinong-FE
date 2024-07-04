import Image, { StaticImageData } from "next/image";

const AdBanner = ({ src }: { src: StaticImageData }) => {
  return (
    <Image src={src} alt="배너 광고 이미지" width={1200} height={186.08} />
  );
};
export default AdBanner;
