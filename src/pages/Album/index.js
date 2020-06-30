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
    Photo
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Album = () => {
    const [iconConfigure] = useState({
        size: 16,
        color: '#fff'
    });

    return (
        <Container>
            <ContainerHeader>
                <Photo source={{ uri: 'https://townsquare.media/site/366/files/2017/06/Nickelback-2.jpg?w=980&q=75' }} />
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
        </Container>
    );
}

export default Album;
