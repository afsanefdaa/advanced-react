import styled from 'styled-components';

export const FlexArticle = styled.div`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 #b2b5be;
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 20px;
  margin: 10px 0;
`;
export const Title = styled.span`
  font-weight: bold;
`;
export const Date = styled.span`
  color: gray;
  margin-bottom: 15px;
`;
export const Author = styled.div`
  color: pink;
`;
export const Description = styled.span`
  text-align: justify;
`;

