import React from 'react';

import {
    Container,
    Photo,
    ContainerSubtitle,
    SubtitleTitle,
    SubtitleDescription
} from './styles';

const Card = () => {
    return (
        <Container>
            <Photo />
            <ContainerSubtitle>
                <SubtitleTitle>Your bests for today</SubtitleTitle>
                <SubtitleDescription>Subdescription</SubtitleDescription>
            </ContainerSubtitle>
        </Container>
    )
};

export default Card;