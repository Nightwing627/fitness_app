import React from 'react'
import styled from 'styled-components';

const StyledInputDiv = styled.div`
    max-width:  240px;
    display: flex;
    align-items: center;
    background: ${(props) => props.grey ? 'rgba(245, 246, 250, 0.52)' : '#FFFFFF'} ;
    border: ${(props) => props.border ? '1px solid #E1E2E4' : "none"};
    border-radius: 8px;
    margin: 13px;
    padding: 17px 72px 17px 33px;
`

const StyledInput = styled.input`
    border: none;
    background: ${(props) => props.grey ? 'rgba(245, 246, 250, 0.52)' : '#FFFFFF'} ;
`

function Input(props) {
    return (
        <>
            <StyledInputDiv grey={props.grey} border={props.border} >
                <StyledInput grey={props.grey} border={props.border} type="text" placeholder={props.placeholder} />
            </StyledInputDiv>
        </>
    )
}

export default Input;
