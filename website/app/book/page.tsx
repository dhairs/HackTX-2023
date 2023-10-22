"use client";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MapStyle } from "@/lib/mapStyle";

import { useEffect, useMemo, useState } from "react";
import Map from "@/components/ui/map";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { getGeocode, getLatLng } from "use-places-autocomplete";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [lat, setLat] = useState(30.13);
  const [lng, setLng] = useState(-79.8);

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="relative text-center">
      <div className="absolute z-10 bg-white rounded-sm m-12 h-3/4 w-72">
        <h1 className="text-2xl font-bold m-5">Book</h1>
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);
              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      {/* <div className="absolute z-10 bg-white rounded-sm self-end inset-x-0 ml-auto inset-y-0 mt-auto mb-36 mr-12 w-64 h-1/4">
        <h1 className="text-xl font-bold m-5">Driver</h1>
      </div> */}
      <Map />
    </div>
  );
}
