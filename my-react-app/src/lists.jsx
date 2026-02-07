import  React,{useState} from "react";

function Component() {
    const [car,setCar]=useState({year:2023,
        make:"Ford",
        model:"Mustang"
    });
    const [count,setCount]=useState({
        type:"football",
        quantity:0,

    });
    function handelYearChange(event) {
        setCar(c => ({...c,year:event.target.value}));
        
    }
     function handelMakeChange(event) {
        setCar(c => ({...c,make:event.target.value}));
        
    }
     function handelModelChange(event) {
        setCar(c => ({...c,model:event.target.value}));
        
    }
    function handelTypeChange(event) {
        setCount(c => ({...c,type:event.target.value}));
    }
        function handelQuantityChange(event) {
        setCount(c => ({...c,quantity:event.target.value}));
    }
    return(
        <>
        <div>
            <p>
               Your favorite car is :{car.year} {car.make} {car.model}
            </p>
            <input type="number" value={car.year}onChange={handelYearChange}></input>
             <input type="text" value={car.make}onChange={handelMakeChange}></input>
              <input type="text" value={car.model}onChange={handelModelChange}></input>
        </div>
        <div>
            <p>
               Your favorite sport is :{count.type} and you play it {count.quantity} times a week
            </p>
            <input type="text" value={count.type}onChange={handelTypeChange}></input>
             <input type="number" value={count.quantity}onChange={handelQuantityChange}></input>
        </div>
        </>
    )
}
export default Component