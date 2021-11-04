import PropTypes from 'prop-types';

const FooterTitle = ({ label }) => (
  <h1 className="footer__title">{label}</h1>
);

FooterTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FooterTitle;
