import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${color}`}
    >
      {text}
    </button>
  );
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
