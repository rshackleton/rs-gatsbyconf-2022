import { ImageElement, ImageItem } from '@kentico/gatsby-kontent-components/dist/image-element';
import { Elements } from '@kentico/kontent-delivery';
import { graphql } from 'gatsby';
import * as React from 'react';
import S from './SplitContent.styles';

export type SplitContentProps = {
  elements: {
    content: Elements.RichTextElement;
    image: {
      value: ImageItem[];
    };
    title: Elements.TextElement;
  };
};

const SplitContent: React.FC<SplitContentProps> = ({ elements }) => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>{elements.title.value}</S.Title>
        <S.Content dangerouslySetInnerHTML={{ __html: elements.content.value }} />
      </S.ContentWrapper>
      <S.ImageWrapper>
        <ImageElement image={elements.image.value[0]} layout='constrained' width={800} />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default SplitContent;

export const SplitContentFragment = graphql`
  fragment SplitContentFragment on kontent_item_section___split_content {
    elements {
      title {
        value
      }
      content {
        value
      }
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
    }
  }
`;
