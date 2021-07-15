import React, { useEffect, useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const CustomMarker = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Marker
      onClick={() => setOpen(!open)}
      key={props.i}
      position={props.location}
    >
      {open && (
        <InfoWindow>
          <h3>{props.address}</h3>
        </InfoWindow>
      )}
    </Marker>
  );
};

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={props.locations[0].location}>
      {props.locations.map((a, i) => {
        return (
          <>
            <CustomMarker i={i} location={a.location} address={a.address} />
          </>
        );
      })}
    </GoogleMap>
  ))
);

const Contact = (props) => {
  const [location, setLocation] = useState({ lat: 47.38085, lng: -122.23742 });
  const [addressInfo, setAddressInfo] = useState([
    {
      address: "1161 32nd PL NE Auburn WA 98002",
      location: { lat: 47.38085, lng: -122.23742 },
    },
    {
      address: "31747 32nd PL NE Auburn WA 98002",
      location: { lat: 47.58085, lng: -122.02742 },
    },
  ]);

  // const [locationMarker, setLocationMarker] = useState(marks);

  // const locationMarkers = map ((locationMarker,) => {
  //  const keys = [...locationMarker]

  // } )

  // };

  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         console.log(positionaddress);
  //         setLocation({address
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude,
  //         });
  //       });
  //     }
  //   }, []);

  // const onInfoWindowClose = (event) => {

  //   setAdress {!isOpen:true }
  // };

  return (
    <>
      <MapWithAMarker
        locations={addressInfo}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuylbpt5GIXAwjdXB1Ku_Hx7LAz7kOPTY&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `400px` }} />}
        mapElement={<div style={{ height: `70%` }} />}
      ></MapWithAMarker>
    </>
  );
};

export default Contact;
