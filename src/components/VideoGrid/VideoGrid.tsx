import React, { memo, ReactNode, VFC } from 'react';
import Style from './VideoGrid.module.scss';

type Props = {
  children: ReactNode;
};

export const VideoGrid: VFC<Props> = memo(({ children }) => {
  return <div className={Style.container}>{children}</div>;
});
