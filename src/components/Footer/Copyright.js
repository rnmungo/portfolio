import PropTypes from 'prop-types';

const Copyright = ({ enterprice }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <p className="footer__copy">
      &#169; {enterprice} 2020 - {year}. Todos los derechos reservados
    </p>
  );
};

Copyright.propTypes = {
  enterprice: PropTypes.string.isRequired,
};

export default Copyright;
