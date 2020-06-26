import React, { useState } from 'react';

import {
    Container,
    SubContainer,
    GroupAction,
    ActionName
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = () => {
    const [iconConfigure] = useState({
        color: '#fff',
        size: 25
    });

    return (
        <Container>
            <SubContainer>
                <GroupAction>
                    <Icon name="home" {...iconConfigure} />
                    <ActionName>Home</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="search" {...iconConfigure} />
                    <ActionName>Search</ActionName>
                </GroupAction>
                <GroupAction>
                    <Icon name="book" {...iconConfigure} />
                    <ActionName>Library</ActionName>
                </GroupAction>
            </SubContainer>
        </Container>
    );
}

export default TabBar;