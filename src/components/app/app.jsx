import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';


const App = (props) => {
  const {quantityOffers} = props;
  return (
    <Main
      quantityOffers = {quantityOffers}
    />
  );
};

App.propTypes = {
  quantityOffers: PropTypes.number.isRequired,
};

export default App;
