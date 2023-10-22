import { MapStyle } from "@/lib/mapStyle";
import {
  GoogleMap,
  GoogleMapsMarkerClusterer,
  Marker,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Map() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [data, setData] = useState(driverData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      setData(driverData);
    });
  }, []);
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: location.lat, lng: location.lng }}
      mapContainerClassName="w-100 h-screen z-0 fixed"
      options={{ disableDefaultUI: true, styles: MapStyle }}
    >
      {/* <Marker position={{ lat: location.lat, lng: location.lng }}>
        <Image
          src={driverData.Test.profile_picture}
          width={80}
          height={80}
          alt="profile of test driver"
        />
      </Marker> */}

      {Object.entries(data).map(([key, driver]) => (
        <Marker
          key={key}
          position={{ lat: driver.position.lat, lng: driver.position.lng }}
        />
      ))}
    </GoogleMap>
  );
}

const driverData = {
  Test: {
    name: "Amogh",
    position: { lat: 30.289204, lng: -97.74148 },
    rate: "$25",
    profile_picture:
      "https://www.landfood.ubc.ca/files/2018/04/will-valley-square-crop-300x300.jpg",
  },
};

function Driver({ map }: { map: GoogleMap }) {
  const [data, setData] = useState(driverData);

  return <></>;
}
