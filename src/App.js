import React, { useState } from 'react'
import { Main, Form, Keypad, Button, ButtonFun, ButtonOpe } from './app_styles'
function App() {

  
  const [result, setResult] = useState ("");
  const [operacion, setOperacion] = useState ("");
  
  const handleClick=(e)=> {
      setOperacion(operacion.concat(e.target.name))     
  }

  const clear = () => {
    setOperacion("");
    setResult("");
  }

  const backspace = () => {
    setOperacion(operacion.slice(0, operacion.length -1))
  }

  const calculate = () => {
    try {
        setResult(eval(operacion).toString());
    } catch(err) {
      setResult('error')
    }
  }
          return (
            <Main>
                  <Form>
                      <input
                          type="text"
                          value={String(result)}/> 
                        <input
                          type="text"
                          value={String(operacion)}/>   
                  </Form>
              <Keypad>
                  <ButtonOpe onClick={clear}>AC</ButtonOpe>
                  <ButtonOpe onClick={backspace}>BS</ButtonOpe>
                  <Button name=" "  onClick={handleClick}></Button>
                  <ButtonFun name="/"  onClick={handleClick}>/</ButtonFun>
                  <Button name="7"  onClick={handleClick}>7</Button>
                  <Button name="8"  onClick={handleClick}>8</Button>
                  <Button name="9"  onClick={handleClick}>9</Button>
                  <ButtonFun name="*"  onClick={handleClick}>&times;</ButtonFun>
                  <Button name="4"  onClick={handleClick}>4</Button>
                  <Button name="5"  onClick={handleClick}>5</Button>
                  <Button name="6"  onClick={handleClick}>6</Button>
                  <ButtonFun name="-"  onClick={handleClick}>-</ButtonFun>
                  <Button name="1"  onClick={handleClick}>1</Button>
                  <Button name="2"  onClick={handleClick}>2</Button>
                  <Button name="3"  onClick={handleClick}>3</Button>
                  <ButtonFun name="+"  onClick={handleClick}>+</ButtonFun>
                  <Button name="0"  onClick={handleClick}>0</Button>
                  <Button name="."  onClick={handleClick}>.</Button>
                  <Button name=" "  onClick={handleClick}> </Button>
                  <ButtonOpe onClick={calculate}>=</ButtonOpe>
              </Keypad>
            </Main>
            );
                
  }
export default App;
