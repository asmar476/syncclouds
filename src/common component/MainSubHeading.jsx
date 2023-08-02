const MainSubHeading = ({ my, text, gradientText, className }) => {
  return (
    <h2
      className={`${className} text-[#171923] font-[700] text-[28px] xl:text-[41.89px] leading-[40px] xl:leading-[62.83px] ${my}`}
    >
      {text}
      <span className="text-primary">{gradientText}</span>
    </h2>
  );
};
export default MainSubHeading;
