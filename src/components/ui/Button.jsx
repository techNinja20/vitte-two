const Button = ({ text, className,disabled,...props }) => {
  return (
      <button
          {...props}
          className={`flex items-center justify-center text-2xl w-full text-center py-[0.5rem] px-[1rem] rounded-md ${disabled  ? "bg-blue-200":"bg-blue-400"}  text-white text-medium ${className}`}
          disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
