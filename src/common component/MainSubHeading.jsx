const MainSubHeading = ({ my, text, gradientText, className }) => {
  return (
    <h2
      className={`${className} text-[#171923] font-[700] text-[28px] md:text-[41.89px] leading-[40px] md:leading-[62.83px] ${my}`}
    >
      {text}
      <span className="text-primary">{gradientText}</span>
    </h2>
  );
};
export default MainSubHeading;
