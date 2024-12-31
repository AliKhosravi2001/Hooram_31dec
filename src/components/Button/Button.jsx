const Button = (props) => {
  return (
    <button
      className="border border-transparent px-4 py-2 rounded-md text-white bg-[#4E4900] 
     hover:bg-transparent hover:border-black hover:text-black h-12"
      onClick={props.link}
    >
      {props.text}
    </button>
  );
};
export default Button;
