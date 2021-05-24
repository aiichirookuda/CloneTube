import React, { ReactNode, VFC } from 'react';
import { Header } from '../Header/Header';
import Style from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className={Style.wrapper}>
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  );
};
