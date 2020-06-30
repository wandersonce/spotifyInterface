import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #111;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ['#111', 'transparent', 'transparent', '#111']
})`
height: 50%;
justify-content: space-between;
`;

export const Photo = styled.Image`
  display: none;
  position: absolute;
  left: 0;
  top: 10px;
  right: 0;
  bottom: 50%;
  `;

export const ContainerNavBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const GroupItemNavBar = styled.View`
 flex-direction: row;
 align-items: center;
`;

export const ButtonFollow = styled.Text`
margin-right: 20px;
color: #fff;
border-color: #fff;
border-width: 1px;
padding: 6px 10px;
border-radius: 6px;
`;

export const ContainerInfoBand = styled.View`
justify-content: center;
align-items: center;
padding: 20px;
`;

export const BandName = styled.Text`
color: #fff;
font-size: 50px;
font-weight: bold;
padding: 10px;
`;

export const BandFooter = styled.Text`
color: #e6e6e6;
font-size: 12px;
text-transform: uppercase;
`;

export const Content = styled.View``;
export const ButtonRadomOrder = styled.Text``;
export const InfoCategory = styled.Text``;