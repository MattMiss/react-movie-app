import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const backdrop = (props) => (
    props.show ? <Backdrop onClick={props.clicked}></Backdrop> : null
);

export default backdrop;