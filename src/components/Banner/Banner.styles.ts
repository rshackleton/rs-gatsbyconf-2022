import styled from '@emotion/styled';

const Container = styled.section`
  position: relative;
  display: block;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  display: inline-block;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.5em;
  margin: 0;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  margin-left: auto;
`;

const BannerStyles = {
  Container,
  ImageWrapper,
  Title,
};

export default BannerStyles;
