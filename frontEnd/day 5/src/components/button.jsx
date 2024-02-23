import PropTypes from 'prop-types';

const Button = ({ imageUrl }) => {
  return (
    <button className="button">
      <img src={imageUrl} alt="Button" />
    </button>
  );
};

Button.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Button;
