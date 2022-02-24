import type { Elements } from '@kentico/kontent-delivery';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout/Layout';
import RichText, { RichTextElement } from '../components/RichText/RichText';

type IndexPageProps = PageProps & {
  data: {
    kontentItemHomePage: {
      elements: {
        content: RichTextElement;
        page_title: Elements.TextElement;
      };
    };
  };
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout
      items={[
        {
          id: '1',
          target: '_self',
          text: 'Blog',
          url: '#',
        },
        {
          id: '2',
          target: '_self',
          text: 'Contact',
          url: '#',
        },
      ]}
    >
      <h1>{data.kontentItemHomePage.elements.page_title.value}</h1>
      <RichText element={data.kontentItemHomePage.elements.content} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    kontentItemHomePage {
      id
      system {
        codename
        id
        language
        type
      }
      elements {
        content {
          ...RichTextFragment
        }
        page_title {
          value
        }
      }
    }
  }
`;
