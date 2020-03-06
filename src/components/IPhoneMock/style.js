import styled from 'styled-components';
import device from '../../style/device';

export const Phone = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url(${props => props.phoneURI});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 99;
  transform: scale(1.05);
`;
export const AppWrapper = styled.div`
  height: calc(100vw - 125px);
  width: calc((100vw - 125px) / 2.01);
  max-height: calc(550px * 2.01);
  max-width: 550px;

  @media (min-width: 320px) and (max-width: 480px) {

    height: calc(100vw - 50px);
  width: calc((100vw - 50px) / 2.01);
  border-radius: 10px;
}


${device.lessThan("phone")`
    border-radius: 10px;
  `}


  background: linear-gradient(
    20deg,
    hsl(${props => props.hue}, 60%, 65%),
    hsl(${props => props.hue - 305}, 64%, 60%)
  );
  border-radius: 40px;
  box-shadow: 0px 20px 40px rgba(63, 59, 86, 0.9);
  will-change: transform;
`;

export const AppContent = styled.div`
  position: absolute;
  background: #000;
  padding: 10px;
  margin-top: 3px;
  margin-left: 13px;
`;
