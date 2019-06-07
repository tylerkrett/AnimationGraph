import React, { Fragment } from 'react';
import styled from 'styled-components';
import Layer from '@leviathan/atoms/react-spring/layer';

const Image = styled.img`
    opacity: 0.8;
    width: 200px;
    position: absolute;
    left: calc(50% - 100px);
    top: calc(110% - 113px);
    @media screen and (max-width: 1000px) {
        width: 100px;
        left: calc(50% - 50px);
        top: calc(${({ portraite }) => portraite || '140%'} - 57px);
    }
    @media screen and (max-height: 450px) {
        width: 50px;
        left: calc(50% - 25px);
        top: calc(${({ top }) => top || '100%'} - 28px);
    }
`;

const Logo = () => (
    <Fragment>
        <Layer offset={1.99} factor={0.4} speed={1} index={12}>
            <Image src="/images/leviathan-icon.png" />
        </Layer>
        <Layer offset={2.99} factor={0.4} speed={1} index={12}>
            <Image portraite="80%" top="125%" src="/images/leviathan-icon.png" />
        </Layer>
    </Fragment>
);

export default Logo;
