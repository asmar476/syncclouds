const MainSubHeading = ({ my, ml, text, gradientText }) => {
  return (
    <h2 className={`font-[550] text-[20px] md:text-[25.89px] ${my}`}>
      {text}
      <span className={`gradient-text ${ml}`}>{gradientText}</span>
    </h2>
  );
};

export default MainSubHeading;
