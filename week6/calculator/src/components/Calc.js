import React, { useState } from 'react';

export default function Calc(){

    const [input, setInput] = useState(0) //set values
    const [operand, setOperand] = useState() //operation symbols

    const handleClear = () => {
        console.log("Calculator was cleared.")
        setInput(0)
        setOperand('')
    }

    const handleDelete = () => {
        setInput(String(input).slice(0, -1))
    }

    const handleDisplay = (num) => {
        setInput(`${input + num}`)
    }

    const handleSum = () => {
        setInput(eval(input))
    }

    return (
        <>
            <div id="Cntnr">
                <div id="key">{input}</div>

                <div id="clear" class="box" onClick = {()=> handleClear("ac")}>ac</div>
                <div id="delete" class="box" onClick = {()=> handleDelete("del")}>del</div>
                <div class="op" onClick = {()=> handleDisplay("/")}>÷</div>

                <div class="box" onClick = {()=> handleDisplay(7)}>7</div>
                <div class="box" onClick = {()=> handleDisplay(8)}>8</div>
                <div class="box" onClick = {()=> handleDisplay(9)}>9</div>
                <div class="op" onClick = {()=> handleDisplay("*")}>x</div>

                <div class="box" onClick = {()=> handleDisplay(4)}>4</div>
                <div class="box" onClick = {()=> handleDisplay(5)}>5</div>
                <div class="box" onClick = {()=> handleDisplay(6)}>6</div>
                <div class="op" onClick = {()=> handleDisplay("-")}>–</div>

                <div class="box" onClick = {()=> handleDisplay(1)}>1</div>
                <div class="box" onClick = {()=> handleDisplay(2)}>2</div>
                <div class="box" onClick = {()=> handleDisplay(3)}>3</div>
                <div class="op"onClick = {()=> handleDisplay("+")}>+</div>

                <div id="zero" class="box" onClick = {()=> handleDisplay(0)}>0</div>
                <div class="box" onClick = {()=> handleDisplay(".")}>.</div>
                <div class="op" onClick = {()=> handleSum()}>=</div>
            </div>
        </>
    )
}