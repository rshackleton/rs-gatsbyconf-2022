import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout/Layout';

type ContentPageProps = PageProps & {
  data: {
    kontentItemContentPage: {
      elements: {
        page_title: {
          value: string;
        };
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
      <h1>{data.kontentItemContentPage.elements.page_title.value}</h1>
    </Layout>
  );
};

export default ContentPage;

export const query = graphql`
  query MyQuery($id: String) {
    kontentItemContentPage(id: { eq: $id }) {
      id
      system {
        codename
        id
        language
        type
      }
      elements {
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
