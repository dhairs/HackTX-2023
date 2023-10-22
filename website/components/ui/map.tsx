import { MapStyle } from "@/lib/mapStyle";
import {
  GoogleMap,
  GoogleMapsMarkerClusterer,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DataForDriver {
  [key: string]: {
    name: string;
    position: {
      lat: number;
      lng: number;
    };
    rate: string;
    profile_picture: string;
  };
}

export default function Map() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [data, setData] = useState({} as DataForDriver);

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
      options={{
        disableDefaultUI: true,
        styles: MapStyle,
        // scrollwheel: false,
        keyboardShortcuts: false,
      }}
    >
      {/* <Marker position={{ lat: location.lat, lng: location.lng }}>
        <Image
          src={driverData.Test.profile_picture}
          width={80}
          height={80}
          alt="profile of test driver"
        />
      </Marker> */}

      {/* {Object.entries(data).map(([key, driver]) => (
        <Marker
          key={key}
          icon={{ path: google.maps.SymbolPath.CIRCLE, scale: 7 }}
          position={{ lat: driver.position.lat, lng: driver.position.lng }}
        />
      ))} */}

      <Driver map={google.maps.Map} />
    </GoogleMap>
  );
}

const driverData: DataForDriver = {
  Test: {
    name: "Amogh",
    position: { lat: 30.289204, lng: -97.74148 },
    rate: "$25",
    profile_picture:
      "https://www.landfood.ubc.ca/files/2018/04/will-valley-square-crop-300x300.jpg",
  },
};

function Driver({ map }: { map: typeof google.maps.Map }) {
  const [data, setData] = useState({} as DataForDriver);

  useEffect(() => {
    setData(driverData);
  }, []);

  return Object.entries(data).map(
    ([key, driver]) => (
      <OverlayView
        key={key}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{ lat: driver.position.lat, lng: driver.position.lng }}
      >
        <>
          <div
            className={
              "w-12 flex h-8 font-bold bg-black rounded-sm items-center"
            }
          >
            <h2 className="text-white m-auto text-xs">{driver.rate}</h2>
          </div>
        </>
      </OverlayView>
    )
    // <OverlayView
    //   key={key}
    //   position={{ lat: driver.position.lat, lng: driver.position.lng }}
    // />
  );

  //       {Object.entries(data).map(([key, driver]) => (
  //         <Marker key={key} map={map}>
  //           <div>
  //             <h2>{weather.climate}</h2>
  //           </div>
  //         </Marker>

  //       )
  //   );
}

{
  /* function Marker({map,position}) {
  useEffect{() => {

  }, []);
} */
}
