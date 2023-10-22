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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarDays, Star } from "lucide-react";
import { Button } from "./button";

interface DataForDriver {
  [key: string]: {
    name: string;
    position: {
      lat: number;
      lng: number;
    };
    rate: string;
    rating: number;
    ratings: number;
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
    rating: 4.5,
    ratings: 673,
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
          <HoverCard>
            <HoverCardTrigger asChild>
              <div
                className={
                  "w-12 flex h-8 font-bold bg-black rounded-sm items-center"
                }
              >
                <h2 className="text-white m-auto text-xs">{driver.rate}</h2>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={driver.profile_picture + "dfs"} />
                  <AvatarFallback>{driver.name.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{driver.name}</h4>
                  <p className="text-sm">
                    Rating: {driver.rating}{" "}
                    <span className="text-gray-600 italic">
                      ({driver.ratings})
                    </span>{" "}
                    | {driver.rate}
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
