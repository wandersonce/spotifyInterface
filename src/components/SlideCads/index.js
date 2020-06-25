import React from 'react'

import {
    Container,
    Title,
    SlideScroll
} from './styles';

import Card from '../Card';

export default function SlideCard() {
    return (
        <Container>
            <Title>Test title</Title>
            <SlideScroll>
                <Card />
                <Card />
                <Card />
            </SlideScroll>
        </Container>
    )
}

