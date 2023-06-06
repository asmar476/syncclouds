const ButtonLight = ({ text, color }) => {
  return (
    <button
      className={`rounded-3xl border  py-1  text-gradientBlueLight text-[12px] sm:text-sm px-3 sm:px-6  md:text-base  border-gradientBlueLight`}
    >
      {text}
    </button>
  );
};

export default ButtonLight;
