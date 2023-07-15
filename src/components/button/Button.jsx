/* eslint-disable react/prop-types */
const Button = ({ onClick, children, btnClass }) => {
  return (
    <>
      <button className={`btn ${btnClass}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
