import React, { memo, ReactNode, VFC } from 'react';
import { CategoryButtons } from '../CategoryButtons/CategoryButtons';
import { Header } from '../Header/Header';
import Style from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div className={Style.wrapper}>
      <Header />
      <CategoryButtons />
      <div className={Style.main}>{children}</div>
    </div>
  );
});
