import { Global } from '@emotion/react';
import * as React from 'react';
import Helmet from 'react-helmet';
import S from './Layout.styles';

export type LayoutProps = {
  items?: any[];
};

const Layout: React.FC<LayoutProps> = ({ children, items = [] }) => {
  return (
    <S.Container>
      <Helmet title='Hello Gatsby Conf 2022' />
      <Global styles={S.globalStyles} />
      <S.Header>
        <S.Tagline>
          Gatsby Conf <em>2022</em>
        </S.Tagline>

        {items.length > 0 && (
          <S.Nav>
            <S.NavList>
              {items.map((item) => (
                <S.NavItem key={item.id}>
                  <S.NavLink href={item.url} target={item.target}>
                    {item.text}
                  </S.NavLink>
                </S.NavItem>
              ))}
            </S.NavList>
          </S.Nav>
        )}
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>MIT License | &copy; 2022 Richard Shackleton</S.Footer>
    </S.Container>
  );
};

export default Layout;
