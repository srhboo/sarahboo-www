import styled from '@emotion/styled';

const Block = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  justify-content: ${props => props.justifyContent || 'normal'};
  align-items: ${props => props.alignItems || 'normal'};
  flex-wrap: ${props => process.flexWrap || 'wrap'};
`;
export default Block;
