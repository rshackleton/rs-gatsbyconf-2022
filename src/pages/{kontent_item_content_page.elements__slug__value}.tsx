import type { Elements } from '@kentico/kontent-delivery';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';
import RichText, { RichTextElement } from '../components/RichText/RichText';

type ContentPageProps = PageProps & {
  data: {
    kontentItemContentPage: {
      elements: {
        content: RichTextElement;
        page_title: Elements.TextElement;
      };
    };
  };
};

const ContentPage: React.FC<ContentPageProps> = ({ data }) => {
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
      <Helmet>
        <title>{data.kontentItemContentPage.elements.page_title.value}</title>
      </Helmet>
      <RichText element={data.kontentItemContentPage.elements.content} />
    </Layout>
  );
};

export default ContentPage;

export const query = graphql`
  query ContentPageQuery($id: String) {
    kontentItemContentPage(id: { eq: $id }) {
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
        slug {
          value
        }
      }
    }
  }
`;
