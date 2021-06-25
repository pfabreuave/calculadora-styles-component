import styled from 'styled-components'

export const lightTheme = {
    background: '#f4f4f4',
    color: '#333',
}


export const darkTheme = {
    background: '#2f2a3a',
    color: '#f4f4f4',
}

export const Main = styled.div
`
    top: 15%;
    left: 50%;
    position: absolute;
    height: 450px;
    width: 240px;
    text-align: center;
    border: none;
    background: ${(props) => props.theme.background};
`
export const Form = styled.form
`
    input{
        height: 30px;
        width: 214px;
        background: ${(props) => props.theme.background};
        border: 0px;
        color: ${(props) => props.theme.color};
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
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

`

export const ButtonCol = styled.button
`
    margin: 5px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

`

export const ButtonBor = styled.button
`
    margin: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
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