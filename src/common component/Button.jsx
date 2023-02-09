
const Button = ({text}) => {
  return (
    <button className=' text-white py-1 px-1 font-semibold text-sm md:px-3 md:py-2 md:text-base bg-gradient-to-r from-secondryColor to-primaryColor'>
        {text}
    </button>
  )
}

export default Button