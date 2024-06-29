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
        center: new window.kakao.maps.LatLng(37.5662952, 126.9779451),
        level: 11,
      };

      if (mapRef.current) {
        const map = new window.kakao.maps.Map(mapRef.current, options);

        const seoulCityHallPosition = new window.kakao.maps.LatLng(
          37.5662952,
          126.9779451
        );
        const gangnamTerminalPosition = new window.kakao.maps.LatLng(
          37.5040675,
          127.0252931
        );

        const seoulCityHallMarker = new window.kakao.maps.Marker({
          position: seoulCityHallPosition,
        });

        const gangnamTerminalMarker = new window.kakao.maps.Marker({
          position: gangnamTerminalPosition,
        });

        seoulCityHallMarker.setMap(map);
        gangnamTerminalMarker.setMap(map);
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
