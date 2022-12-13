import React, { useState } from "react";
import { evaluate } from "mathjs";
import Fab from '@mui/material/Fab';

function Calculator() {
    const [expression,setExpression] = useState('');

    const input = value => {
        let newExpression = expression + value;
        setExpression(newExpression);
    }
    const blank = () => {
        setExpression('');
    }

    const calculate = () => {
        let result = evaluate(expression);
        let newExpression = expression + '\n' + result;
        setExpression(newExpression);
    }

    return (
      <div className="calculator">
      <div className="input">
        <div className="row">
          <textarea name="" id="inputArea" value={expression} cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className="button">
        <div className="row">
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('1')}>1</Fab> {/*converting action into string*/}
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('4')}>4</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('7')}>7</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={blank}>AC</Fab>
        </div>
        <div className="row">
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('2')}>2</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('5')}>5</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('8')}>8</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('0')}>0</Fab>
        </div>
        <div className="row">
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('3')}>3</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('6')}>6</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('9')}>9</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={calculate}>=</Fab>
        </div>
        <div className="row">
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('+')}>+</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('-')}>-</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('*')}>*</Fab>
          <Fab  aria-label={'Add'} color={'primary'}  className="col" onClick={()=>input('/')}>/</Fab>
        </div>
      </div>
    </div>
    )
}

export default Calculator