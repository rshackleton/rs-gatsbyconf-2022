import { ImageElement, RichTextElement } from '@kentico/gatsby-kontent-components';
import type { ImageItem } from '@kentico/gatsby-kontent-components/dist/image-element';
import { graphql, Link } from 'gatsby';
import type { DomElement } from 'htmlparser2';
import * as React from 'react';

export type RichTextElement = {
  images?: ImageItem[];
  links?: any[];
  modular_content?: any[];
  value?: string;
};

export type RichTextProps = {
  element: RichTextElement;
};

const RichText: React.FC<RichTextProps> = ({ element }) => {
  if (!element.value) {
    return null;
  }

  return (
    <RichTextElement
      value={element.value}
      images={element.images}
      links={element.links}
      linkedItems={element.modular_content}
      resolveImage={(image) => {
        if (!image) {
          return <></>;
        }

        return (
          <ImageElement image={image} alt={image.description ? image.description : image.name} layout='fullWidth' />
        );
      }}
      resolveLink={(link: any, domNode: DomElement) => {
        return <Link to={`/`}>{domNode.children?.[0]?.data}</Link>;
      }}
      resolveLinkedItem={(linkedItem: any) => {
        return <pre>{JSON.stringify(linkedItem, undefined, 2)}</pre>;
      }}
      resolveDomNode={(domNode: DomElement, domToReact: Function) => {
        if (domNode.name === 'table') {
          // For options - check https://www.npmjs.com/package/html-react-parser#options
          return <div className='table-responsive'>{domToReact([domNode])}</div>;
        }
      }}
    />
  );
};

export default RichText;

export const RichTextFragment = graphql`
  fragment RichTextFragment on kontent_item_rich_text_element_value {
    images {
      description
      height
      image_id
      url
      width
    }
    links {
      codename
      link_id
      type
      url_slug
    }
    modular_content {
      system {
        codename
        type
      }
    }
    value
  }
`;
