import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      if (mapRef.current) {
        new window.kakao.maps.Map(mapRef.current, options);
      }
    });
  }, []);

  return (
    <div>
      <div className="w-full h-[500px]" ref={mapRef} />
    </div>
  );
};

export default Map;
