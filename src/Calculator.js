import { useState } from 'react';

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
                    setResult("Divider cannot be Zero");
                }
            }
        
    }
  return (
    <div className='col-4 mx-auto card  p-5 shadow-sm'>
        <h3 className='text-center'>My Virtual Calculator</h3>
        <div className="">
            <div className="mb-3">
              <label className="form-label">First Number</label>
              <input type="text" 
              placeholder='Enter first number'
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
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
                     id="exampleInputPassword1"
                     value={secondNum}
                     onChange={(e)=> {
                        setSecondNum(e.target.value);
                        setError({...error, second : false})
                     }}
                     />
                <small className="text-danger">{error.second ?"Second Number is required" : ""}</small>
            </div>
            <div className="d-flex justify-content-center m-2">
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={addHandler}

                    >Add</button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={substractHandler}
                    >Substract</button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={multipleHandler}
                    >Multiply</button>
            <button type="button" 
                    className="btn btn-outline-dark px-3"
                    onClick={divideHandler}
                    >Divide</button>
            </div>
        </div>
        <h5 className='mt-4 text-center'>
            {typeof(result) === "number" ? ` Result -  ${result} `: <div className='text-danger'>{result}</div>}
        </h5>
    </div>
  )
}