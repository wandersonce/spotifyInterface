import React from 'react';

import {
    Container,
    ContainerScrollView
} from './styles';

import SlideCards from '../../components/SlideCads';

const Main = () => {
    return (
        <Container>
            <ContainerScrollView>
                <SlideCards />
            </ContainerScrollView>
        </Container>
    );
};

export default Main;