import type { Elements } from '@kentico/kontent-delivery';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import RichText, { RichTextElement } from '../../components/RichText/RichText';

type BlogPostProps = PageProps & {
  data: {
    kontentItemBlogPost: {
      elements: {
        content: RichTextElement;
        page_title: Elements.TextElement;
      };
    };
  };
};

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
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
      <h1>{data.kontentItemBlogPost.elements.page_title.value}</h1>
      <RichText element={data.kontentItemBlogPost.elements.content} />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String) {
    kontentItemBlogPost(id: { eq: $id }) {
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
