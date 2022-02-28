import styled from '@emotion/styled';

const Container = styled.section`
  display: block;
  color: #fff;
  margin: 5rem 0;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5em;
  margin: 0 auto 0.8em;
`;

const Subtitle = styled.h2`
  display: block;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5em;
  margin: 0 auto;
  max-width: 80%;
`;

const BannerStyles = {
  Container,
  Subtitle,
  Title,
};

export default BannerStyles;
