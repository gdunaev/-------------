import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offersPropTypes, offerPropTypes} from "../../prop-types-site";
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';
import {Cities} from '../../const';


// ОПИСАНИЕ: активная иконка оффера отображается всегда, пока не переведут мышь на другой оффер
// _____________________________________________________________________________________________

  const {city, offers, main, activeOfferId} = props;
  // console.log('55', Cities)
  const cityLocation = Cities.find((currentCity) => currentCity.name === city).location;


  // console.log(`44`, activeOfferId);
  const mapRef = useRef();

  useEffect(() => {

    const {latitude, longitude, zoom} = cityLocation;
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
        iconUrl: offer.id !== activeOfferId ? `./img/pin.svg` : `./img/pin-active.svg`,
        iconSize: [30, 30]
      });
      // console.log(`55`, customIcon);
      leaflet.marker({
        lat: locationOffer.latitude,
        lng: locationOffer.longitude
      },
      {
        icon: customIcon
      })
        .addTo(mapRef.current)
        .bindPopup(offer.id);

    });


    return () => {
      // console.log('11', mapRef)
      mapRef.current.remove();
    };
  }, [city, offers, activeOfferId]); // перечень пропсов которые влияют на перерисовку карты

  const getStyleMap = () => {
    return main ? {width: `100%`} : {width: `1144px`, height: `579px`, margin: `auto`};
  };

  return (
    <div id="map" style={getStyleMap()} ref={mapRef}></div>
  );
}

Map.propTypes = {
  // cityMap: PropTypes.shape({
  //   location: PropTypes.shape({
  //     latitude: PropTypes.number.isRequired,
  //     longitude: PropTypes.number.isRequired,
  //     zoom: PropTypes.number.isRequired,
  //   }),
  //   name: PropTypes.string.isRequired
  // }),
  city: PropTypes.string,
  offers: offersPropTypes,
  main: PropTypes.bool,
  activeOfferId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  activeOfferId: state.activeOfferId,
});


export {Map};
export default connect(mapStateToProps, null)(Map);
