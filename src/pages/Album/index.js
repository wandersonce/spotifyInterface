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
    InfoCategory
} from './styles';

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
                <ButtonRadomOrder>Radom Order</ButtonRadomOrder>
                <InfoCategory>Popularity</InfoCategory>
            </Content>
        </Container>
    );
}

export default Album;
