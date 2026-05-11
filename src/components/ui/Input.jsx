const Input = ({ label, className,...rest}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        {...rest}
        className={`w-full py-[0.5rem] px-[1rem] rounded-md border border-blue-400 outline-none  ${className}`}
      />
    </div>
  )
}

export default Input
