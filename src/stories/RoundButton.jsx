
import PropTypes from 'prop-types';
export const RoundButton = ({ size = 'md', onClick, backgroundColor = '#F26521', label = 'or' }) => {
  let scale = 5
  if (size === "sm") scale = 3
  if (size === "lg") scale = 8
  const style = {
    backgroundColor,
    // padding: `${scale * 0.5}rem ${scale * 1}rem`,
    width: `${scale}rem`,
    height: `${scale}rem`,
    borderRadius: '50%',
    border: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem',
    alignItems: 'center'
  }
  const textStyle = {
    fontSize: `${scale * 0.40}rem`,
    color: 'white',
    fontWeight: '100',
    textTransform: 'upperCase',
  }
  return (
    <button
      onClick={onClick}
      style={style}
    >
      <p style={textStyle}>{label}</p>
    </button>
  );
};
RoundButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};
