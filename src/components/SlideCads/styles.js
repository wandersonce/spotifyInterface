import styled from 'styled-components';

export const Container = styled.View`
padding: 5px 20px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 23px;
    font-weight: bold;
`;

export const SlideScroll = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
})`

`;