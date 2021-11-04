import PropTypes from 'prop-types';

const FooterContent = ({ children }) => (
  <div className="footer__container container grid">
    {children}
  </div>
);

FooterContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterContent;
