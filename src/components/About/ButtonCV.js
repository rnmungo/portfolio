import PropTypes from 'prop-types';
import UilDownloadAlt from '@iconscout/react-unicons/icons/uil-download-alt';
import pdf from '../../assets/docs/Rodrigo-CV.pdf';

const ButtonCV = ({ children }) => (
  <a download="" href={pdf} className="button button--flex">
    {children}<UilDownloadAlt className="button__icon" />
  </a>
);

ButtonCV.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonCV;
