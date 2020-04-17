import React from 'react';
import Backdrop from './Backdrop';
import styled from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 90%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 5%;
    top: 10%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    max-height: 80%;
    overflow-y: auto;
    @media (min-width: 800px) {
        width: 800px;
        left: calc(50% - 400px);
    }
`;

const Modal = React.memo(({showModal, modalClosed, children}) => {

    return (
        <>
            <Backdrop show={showModal} clicked={modalClosed}/>
            <ModalDiv
                maxWidth="800"
                style = {{
                    transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: showModal ? '1' : '0'
                }}>
                {children}
            </ModalDiv>
        </>
    );
});

export default Modal;