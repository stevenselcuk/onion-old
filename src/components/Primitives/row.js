import styled from 'styled-components';
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.center === true ? 'space-between' : 'flex-start'};
  flex-direction: row;
`;

export default Row;
