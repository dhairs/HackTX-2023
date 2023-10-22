"use client";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MapStyle } from "@/lib/mapStyle";
import Link from "next/link";
import { routes } from "@/lib/constants";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="relative text-center">
      <div className="absolute z-10 bg-white rounded-sm m-12 h-3/4">
        <h1 className="text-3xl font-bold m-5">Book</h1>
      </div>
      <Map />
    </div>
  );
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="w-100 h-screen z-0 fixed"
      options={{ disableDefaultUI: true, styles: MapStyle }}
    />
  );
}
