import React, { ReactNode, VFC } from 'react';
import { Header } from '../Header/Header';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
