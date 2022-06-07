import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 240px;
    background: ${(props) => props.primary ? '#40A3F8' : 'white'};
    color: ${(props) => props.primary ? 'white' : '#40A3F8'};   
     display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14.997px;
    line-height: 22px;
    text-align: center;
    margin: 15px 12px;
    padding: 8px 28px 8px !important;
    border-radius: 5px;
    opacity: 1 !important;  
    transition: 0.3s;
    border: none;

    &:hover {
      background: #0f85ec;
      color: ${(props) => props.primary ? '#000' : 'white'};   
      transition: 0.3s;
      cursor: pointer;
    }
    `

function Button(props) {

    return (
        <>
            <StyledButton onClick={() => { alert("Uzr Sayt xozircha test rejimida!") }} primary={props.primary} >{props.text} <img src={props.image} alt={props.alt} /></StyledButton>
        </>
    )
}

export default Button;
