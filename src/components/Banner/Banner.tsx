import { ImageElement } from '@kentico/gatsby-kontent-components';
import { ImageItem } from '@kentico/gatsby-kontent-components/dist/image-element';
import type { Elements } from '@kentico/kontent-delivery';
import { graphql } from 'gatsby';
import * as React from 'react';
import S from './Banner.styles';

export type BannerProps = {
  elements: {
    image: {
      value: ImageItem[];
    };
    title: Elements.TextElement;
  };
};

const Banner: React.FC<BannerProps> = ({ elements }) => {
  const bannerImage = elements.image.value[0];

  return (
    <S.Container>
      <S.ImageWrapper>
        <ImageElement
          alt={bannerImage.description ?? ''}
          aspectRatio={16 / 7}
          image={bannerImage}
          layout='fullWidth'
          loading='eager'
        />
      </S.ImageWrapper>
      <S.Title>{elements.title.value}</S.Title>
    </S.Container>
  );
};

export default Banner;

export const BannerFragment = graphql`
  fragment BannerFragment on kontent_item_section___banner {
    elements {
      image {
        value {
          description
          height
          name
          size
          type
          url
          width
        }
      }
      title {
        value
      }
    }
  }
`;
