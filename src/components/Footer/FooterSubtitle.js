import PropTypes from 'prop-types';

const FooterSubtitle = ({ label }) => (
  <span className="footer__subtitle">{label}</span>
);

FooterSubtitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FooterSubtitle;