import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    
        body: '#000000',
        fontColor: '#ffffff',
        
};   
export const darkTheme = {
    
        body: '#ffffff',
        fontColor: '#000000',
    
} 

export const GlobalStyles = createGlobalStyle `

    
fontColor {

        background-color: ${(props) => props.theme.fontColor};

} 
`
