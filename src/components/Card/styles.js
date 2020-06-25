import styled from 'styled-components';

export const Container = styled.View`
    width: 160px;
    padding: 15px 0px;
`;

export const Photo = styled.Image`
    flex:1;
    width: 150px;
    height: 150px;
    background-color: #888;
    border-radius: 6px;
`;

export const ContainerSubtitle = styled.View`
    flex-direction: column;
    padding: 10px 0px;
`;

export const SubtitleTitle = styled.Text`
    color: #f4f4f4;
    font-weight: bold;
    font-size: 14px;
    padding: 2px 0px;
`;

export const SubtitleDescription = styled.Text`
    color: #aaa;
    font-size: 12px;
`;