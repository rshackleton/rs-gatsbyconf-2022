import styled from '@emotion/styled';

const Container = styled.section`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  margin: 5rem 0;
  place-items: center;
`;

const ContentWrapper = styled.div``;

const ImageWrapper = styled.div``;

const Title = styled.h3`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5em;
  margin: 0 0 0.8em;
`;

const Content = styled.div``;

const SplitContentStyles = {
  Container,
  Content,
  ContentWrapper,
  ImageWrapper,
  Title,
};

export default SplitContentStyles;
