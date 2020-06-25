import React, { useState, useEffect } from 'react';

import {
    Container,
    ContainerScrollView
} from './styles';

import SlideCards from '../../components/SlideCads';
import Mock from '../../services/mockin';

const Main = () => {
    const [slides, setSlides] = useState([]);

    const onFetchSlides = async () => {
        let response = await Mock.fetchSlides();

        setSlides(response);
    }

    useEffect(() => {
        onFetchSlides();
    }, []);

    return (
        <Container>
            <ContainerScrollView>
                {slides && slides.map((slide, index) => (
                    <SlideCards key={index} slide={slide} />
                )
                )}
            </ContainerScrollView>
        </Container>
    );
};

export default Main;