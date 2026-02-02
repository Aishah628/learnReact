 function  Button() {
  const handelClick= (e)=> e.target.textContent="Hello";
    return(
        <button onClick={(e)=>handelClick(e)}>Click Me</button>
    )
 }
 
 export default Button