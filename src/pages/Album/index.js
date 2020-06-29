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
                <Photo source={{ uri: 'https://16uild1ojo8k3e9zl42x69dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/20234314_web1_170418-SNW-M-Nickelback-Colour-Jan_2017.jpg' }} />
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