import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offersPropTypes} from "../../prop-types-site";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {cityMap, offers, main} = props;
  const {location} = cityMap;
  const {latitude, longitude, zoom} = location;
   console.log(cityMap, offers)

  const mapRef = useRef();

  useEffect(() => {

    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom
    });


    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const locationOffer = offer.location;
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: locationOffer.latitude,
        lng: locationOffer.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(offer.id);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  const getStyleMap = () => {
    return main ? {width: `100%`} : {width: `1144px`, height: `579px`, margin: `auto`};
  };

  return (
    <div id="map" style={getStyleMap()} ref={mapRef}></div>
  );
};

Map.propTypes = {
  cityMap: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired
  }),

  offers: offersPropTypes,
  main: PropTypes.bool
};

export default Map;
