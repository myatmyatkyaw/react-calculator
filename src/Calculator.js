
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [result, setResult] = useState("");
    const [error, setError] = useState({
        first : false,
        second : false
    })

    //add
    const addHandler = () => {
        if(!firstNum){
            setError(err =>({...err, first : true}));
            setResult("");
        } 
        if(!secondNum) {
            setError(err =>({...err, second : true}));
            setResult("");
        }
        if(firstNum && secondNum ) {
            setResult((+firstNum) + (+secondNum));
        }
    }

    //sub
    const substractHandler = () => {
        if(!firstNum){
            setError(err =>({...err, first : true}));
            setResult("");
        } 
        if(!secondNum) {
            setError(err =>({...err, second : true}));
            setResult("");
        }
        if(firstNum && secondNum ) {
            if((+firstNum) >= (+secondNum)) {
                setResult(firstNum - secondNum);
            } else {
                toast.success("Number 1 must be larger than Number 2");
                setResult("First Number must be greater than second number");  
            }
        }
    }

    //multiple
    const multipleHandler = () => {
        if(!firstNum){
            setError(err =>({...err, first : true}));
            setResult("");
        } 
        if(!secondNum) {
            setError(err =>({...err, second : true}));
            setResult("");
        }
        if(firstNum && secondNum ) {
            setResult(firstNum * secondNum);
        }
    }

    //div
    const divideHandler = () => {
            if(!firstNum){
                setError(err =>({...err, first : true}));
                setResult("");
            } 
            if(!secondNum) {
                setError(err =>({...err, second : true}));
                setResult("");
            }
            if(firstNum && secondNum ) {
                if(+secondNum !== 0)
                {
                    setResult(firstNum/secondNum);
                } else {
                    toast.success("Divider cannot be 0");
                    setResult("Divider cannot be 0");
                }
            }
        
    }
  return (
    <div className='col-4 mx-auto card p-5 shadow-sm'>
        <h3 className='text-center'>My Virtual Calculator</h3>
        <div className="">
            <div className="mb-3">
              <label className="form-label">First Number</label>
              <input type="text" 
              placeholder='Enter first number'
                     className="form-control" 
                     id="numberone" 
                     value={firstNum}
                     onChange={(e)=> {
                        setFirstNum(e.target.value)
                        setError({...error, first : false})
                    }}
                     />
                <small className="text-danger">{error.first ?"First Number is required" : ""}</small>
            </div>
            <div className="mb-3">
              <label className="form-label">Second Number</label>
              <input type="text" 
              placeholder='Enter second number'
                     className="form-control" 
                     id="numbertwo"
                     value={secondNum}
                     onChange={(e)=> {
                        setSecondNum(e.target.value);
                        setError({...error, second : false})
                     }}
                     />
                <small className="text-danger">{error.second ?"Second Number is required" : ""}</small>
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={addHandler}

                    > + </button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={substractHandler}
                    > - </button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={multipleHandler}
                    > x </button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={divideHandler}
                    > / </button>
            </div>
        </div>
        <h5 className='mt-4 text-center'>
            {typeof(result) === "number" ? ` Result -  ${result} `: <div className='text-danger'>{result}</div>}
        </h5>
    </div>
  )
}