'use client'
import {Marker} from "@react-google-maps/api";
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import React, {useEffect, useRef} from "react";

export const Map = () => {

  const center = {lat: 48.672712, lng: 29.74321};
  const zoom = 18;

  return (
    <Wrapper apiKey={"AIzaSyD5hwYSz363sVVRNjrDW1clhseIMzKPDIc"} render={render}>
      <MyMapComponent center={center} zoom={zoom}>
        <Marker position={center}/>
      </MyMapComponent>
    </Wrapper>
  )
}


const render = (status: Status): any => {
  if (status === Status.LOADING) return <h3 className='h-full w-full flex items-center justify-center'>{status}</h3>;
  if (status === Status.FAILURE) return <h3 className='h-full flex items-center justify-center'>{status}</h3>;
  return null;
};

function MyMapComponent({
                          children,
                          center,
                          zoom,
                        }: {
  children: React.ReactNode;
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, [center, zoom]);

  // @ts-ignore
  return <div ref={ref} id="map" className='flex-grow'>
    {children}
  </div>
}
