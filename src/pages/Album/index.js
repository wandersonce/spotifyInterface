import React, { useState } from 'react';

import {
    Container,
    ContainerHeader,
    ContainerNavBar,
    GroupItemNavBar,
    ButtonFollow,
    ContainerInfoBand,
    BandName,
    BandFooter,
    Photo,
    Content,
    ButtonRadomOrder,
    ButtonRadomOrderText,
    InfoCategory,
    Music,
    Number,
    MusicName,
    MusicListening,
    ContainerItens,
    MusicGroupItem,
    MusicGroupAll
} from './styles';

import musics from './musics.json';

const Musics = () => {
    return musics && musics.map((musics, index) => (
        <Music key={index++}>
            <MusicGroupAll>
                <Number>{index++}</Number>
                <MusicGroupItem>
                    <MusicName>{musics.name}</MusicName>
                    <MusicListening>{musics.listening}</MusicListening>
                </MusicGroupItem>
            </MusicGroupAll>
            <Icon name="ellipsis-v" color="#aaa" size={16} style={{ padding: 20 }} />
        </Music>
    ))
};

import Icon from 'react-native-vector-icons/FontAwesome5';

const Album = () => {
    const [iconConfigure] = useState({
        size: 16,
        color: '#fff'
    });

    return (
        <Container>
            <Photo source={{ uri: 'https://cdn.ontourmedia.io/nickelback//non_secure/images/20200519/large1589916819/large.jpg' }} />
            <ContainerHeader>
                <ContainerNavBar>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <GroupItemNavBar>
                        <ButtonFollow>Following</ButtonFollow>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </GroupItemNavBar>
                </ContainerNavBar>
                <ContainerInfoBand>
                    <BandName>NickelBack</BandName>
                    <BandFooter>8.500.752 followers</BandFooter>
                </ContainerInfoBand>
            </ContainerHeader>
            <Content>
                <ButtonRadomOrder>
                    <ButtonRadomOrderText>Radom Order</ButtonRadomOrderText>
                </ButtonRadomOrder>
                <InfoCategory>Popularity</InfoCategory>
                <ContainerItens>
                    <Musics />
                </ContainerItens>
            </Content>
        </Container>
    );
}

export default Album;


