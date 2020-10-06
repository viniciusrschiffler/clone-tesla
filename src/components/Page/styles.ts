import styled from 'styled-components';
import Accessories from './images/Desktop-Accessories.jpg'
import solarRoof from './images/Desktop-SolarRoof.jpg'
import solarPanels from './images/Desktop-SolarPanels.jpg'
import modely from './images/Desktop-ModelY.jpg'
import modelx from './images/Desktop-ModelX.jpg'
import models from './images/Desktop-ModelS.jpg'
import model3 from './images/Desktop-Model3.jpg'

export const Container = styled.div`
.colored:nth-child(1) {
    background-image: url(${modely});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(2) {
    background-image: url(${modelx});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(3) {
    background-image: url(${model3});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(4) {
    background-image: url(${models});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(5) {
    background-image: url(${solarPanels});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(6) {
    background-image: url(${solarRoof});
    background-size: 100% 150%;
    background-position: center;
}
.colored:nth-child(7) {
    background-image: url(${Accessories});
    background-size: 100% 150%;
    background-position: center;
}
`;

export const Spacer = styled.div`
height: 15vh;
`