import styled from 'styled-components'

export const Mudarb = styled.div

`
    --primary-color= #2f2a3a;
    --bg-color= #ffffff;
    --secundary-color= #2f2a3a;

[data-theme="dark"] {

    --primary-color= #ffffff;
    --bg-color= #ffffff;
    --secundary-color= #ffffff;
}
`

export const Main = styled.div
`
    top: 15%;
    left: 50%;
    position: absolute;
    height: 450px;
    width: 240px;
    text-align: center;
    border: none;
    background: #2f2a3a;
    
    

`
export const Form = styled.form
`
    input{
        height: 30px;
        width: 214px;
        background: #2f2a3a;
        border: 0px;
        color: #fff;
        text-align: right;
        font-size: 35px;
        font-weight: 500;
        letter-spacing: 1px;
        margin-top: 75px;
        margin-left: -10px;

        
    }
        input + input{
            font-size: 10px;
            color: #7d5dff;
            height: 15px;
            margin-bottom: 25px;
            margin-top: 0px;
            
        }
   
`
export const Keypad = styled.div
`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);
`

export const Button = styled.button
`
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: #2f2a3a;
    color: #f1f1f1;

`

export const ButtonCol = styled.button
`
    margin: 5px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: #2f2a3a;
    color: #f1f1f1;

`

export const ButtonBor = styled.button
`
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: #2f2a3a;
    color: #7d5dff;

`

export const ButtonFun = styled(Button)
`
    background: #bfbfc1;
    color: #000;
    width: 35px;
    height: 35px;


`
export const ButtonOpe = styled(Button)
`
    background: #7d5dff;
    color: #000;
    width: 35px;
    height: 35px;


`