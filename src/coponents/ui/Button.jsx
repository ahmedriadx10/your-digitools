
const Button = ({text,fontWeight}) => {
  return (
    <button className={`btn bg-linear-(--primaryGradient) text-white  rounded-full font-${fontWeight}`}>
      {text}
    </button>
  );
};

export default Button;