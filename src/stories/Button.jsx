
import PropTypes from 'prop-types';
export const Button = ({ size = 'md', logo = 'plus', onClick, shape = 'square', backgroundColor = '#F26521' }) => {
  let scale = 5
  if (size === "sm") scale = 3
  if (size === "lg") scale = 8
  let borderRadius
  if (shape === 'square') borderRadius = 4
  if (shape === 'round') borderRadius = 10
  const style = {
    backgroundColor,
    // padding: `${scale * 0.5}rem ${scale * 1}rem`,
    width: `${scale}rem`,
    height: `${scale}rem`,
    borderRadius: `${scale * borderRadius}px`,
    border: 'none',
    outline: 'none'
  }

  return (
    <button
      onClick={onClick}
      style={style}
    >
      {logo === 'plus' ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={`${scale * 0.75}rem`} height={`${scale * 0.75}rem`} style={{ fill: 'white' }} >
        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
      </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={`${scale * 0.75}rem`} height={`${scale * 0.75}rem`} style={{ fill: 'white' }} >
        <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
      </svg>)}
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['square', 'round']),
  logo: PropTypes.oneOf(['plus', 'minus']),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func
};
