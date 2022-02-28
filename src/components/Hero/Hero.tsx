import { ImageItem } from '@kentico/gatsby-kontent-components/dist/image-element';
import type { Elements } from '@kentico/kontent-delivery';
import { graphql } from 'gatsby';
import * as React from 'react';
import S from './Hero.styles';

export type HeroProps = {
  elements: {
    image: {
      value: ImageItem[];
    };
    subtitle: Elements.TextElement;
    title: Elements.TextElement;
  };
};

const Hero: React.FC<HeroProps> = ({ elements }) => {
  return (
    <S.Container>
      <S.Title>{elements.title.value}</S.Title>
      <S.Subtitle>{elements.subtitle.value}</S.Subtitle>
    </S.Container>
  );
};

export default Hero;

export const HeroFragment = graphql`
  fragment HeroFragment on kontent_item_section___hero {
    elements {
      title {
        value
      }
      subtitle {
        value
      }
    }
  }
`;
