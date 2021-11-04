import PropTypes from 'prop-types';

const TextField = ({ label, value, onChange, multiline, ...props }) => (
  <div className="contact__content">
    <label htmlFor="" className="contact__label">{label}</label>
    {multiline && (
      <textarea
        className="contact__textarea"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    )}
    {!multiline && (
      <input
        className="contact__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    )}
  </div>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
};

TextField.defaultProps = {
  value: '',
  onChange: () => {},
  multiline: false,
};

export default TextField;
