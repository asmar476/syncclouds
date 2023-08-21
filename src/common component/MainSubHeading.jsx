const MainSubHeading = ({ my, text, gradientText, className }) => {
  return (
    <h2
      className={`${className} text-[#171923] font-[700] text-center text-[25px] md:text-[35px] xl:text-[41px] md:leading-[55px] xl:leading-[62.83px] `}
    >
      {text}
      <span className="text-primary">{gradientText}</span>
    </h2>
  );
};
export default MainSubHeading;
