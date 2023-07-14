const MainSubHeading = ({ my, ml, text, gradientText }) => {
  return (
    <h2
      className={`text-[#171923] font-[700] text-[20px] md:text-[41.89px] leading-[62.83px]${my}`}
    >
      {text}
      <span className="text-primary">{gradientText}</span>
    </h2>
  );
};

export default MainSubHeading;
