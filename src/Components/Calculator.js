import { useState } from 'react'

import React from 'react'

function Calculator() {

    const [value1, setValue1]= useState("HELLO")

function Handlechange(e) {
    setValue1(value1.concat(e.target.name))
}
const Back = ()=>{
     setValue1("")
}
 const Result = ()=>{
     setValue1(eval(value1).toString());
 
    }

return (
    <>
        <div className='container'>
            <form>
                <input type='text' value={value1}/>
            </form>
          
            <div className='button_inp'>
                 <button  className="highlight" name='clear' onClick={Back} id='clear'>A/C</button>
                <button name='1' onClick={Handlechange}>1</button>
                <button name='2' onClick={Handlechange}>2</button>
                <button name='3' onClick={Handlechange}>3</button>
                 <button name='4' onClick={Handlechange}>4</button>
                <button name='5' onClick={Handlechange}>5</button>
                <button name='6' onClick={Handlechange}>6</button>
                <button name='7' onClick={Handlechange}>7</button>
                <button name='8' onClick={Handlechange}>8</button>
                <button name='9' onClick={Handlechange}>9</button>
                <button name='0' onClick={Handlechange}>0</button>
                <button name='00' onClick={Handlechange}>00</button>
                <button name='/' onClick={Handlechange}>/</button>
                <button name='+' onClick={Handlechange}>+</button>
                <button  name='-' onClick={Handlechange}>-</button>
                <button name='*' onClick={Handlechange}>*</button>
                <button className="highlight"  name='=' onClick={Result} id='result'>=</button>

            </div>

        </div>
        
    </>
  )
}

export default Calculator
