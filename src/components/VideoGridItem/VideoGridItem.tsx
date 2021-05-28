import React, { memo, VFC } from 'react';
import Style from './VideoGridItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  src: string;
  title: string;
};

export const VideoGridItem: VFC<Props> = memo(({ id, src, title }) => {
  return (
    <Link to={{ pathname: 'watch', search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
});
