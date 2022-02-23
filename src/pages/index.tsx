import * as React from 'react';
import Layout from '../components/layout/Layout';

const IndexPage: React.FC = () => {
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
      <h1>Hello World</h1>
    </Layout>
  );
};

export default IndexPage;
