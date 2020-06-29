import React, { useState } from 'react';

import {
    Container,
    ContainerHeader,
    ContainerNavBar,
    GroupItemNavBar,
    ButtonFollow,
    ContainerInfoBand,
    BandName,
    BandFooter
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