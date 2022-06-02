
import PropTypes from 'prop-types';
export const ArrowButton = ({ size = 'md', arrowDirection = 'right', onClick, shape = 'square', backgroundColor = '#F26521', label = 'Enter text' }) => {
  let scale = 5
  if (size === "sm") scale = 3
  if (size === "lg") scale = 8
  let borderRadius
  if (shape === 'square') borderRadius = 4
  if (shape === 'round') borderRadius = 10
  const style = {
    backgroundColor,
    // padding: `${scale * 0.5}rem ${scale * 1}rem`,
    width: `${scale * 5}rem`,
    height: `${scale}rem`,
    borderRadius: `${scale * borderRadius}px`,
    border: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
    alignItems: 'center'
  }
  const textStyle = {
    fontSize: `${scale * 0.5}rem`,
    color: 'white',
    fontWeight: '100'
  }
  return (
    <button
      onClick={onClick}
      style={style}
    >
      <p style={textStyle}>{label}</p>
      {arrowDirection === 'right' ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={`${scale * 0.75}rem`} height={`${scale * 0.75}rem`} style={{ fill: 'white' }}  >
        <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={`${scale * 0.75}rem`} height={`${scale * 0.75}rem`} style={{ fill: 'white' }} >
        <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
      </svg>)}
    </button>
  );
};
ArrowButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['square', 'round']),
  arrowDirection: PropTypes.oneOf(['right', 'left']),
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};
