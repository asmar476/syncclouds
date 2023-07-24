const InnerPageHeading = ({ my, text, gradientText, textColor }) => {
  return (
    <h3 className={`${textColor} font-[600] text-[14px] md:text-[16px] ${my} `}>
      {text}
    </h3>
  );
};

export default InnerPageHeading;
