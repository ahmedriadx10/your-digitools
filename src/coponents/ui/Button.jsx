
const Button = ({text,fontWeight,extraStyle}) => {
  return (
    <button className={`btn bg-linear-(--primaryGradient) ${extraStyle} text-white  rounded-full font-${fontWeight}`} >
      {text}
    </button>
  );
};

export default Button;