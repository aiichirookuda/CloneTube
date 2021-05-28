import React, { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import Style from './SideListItem.module.scss';

type Props = {
  id: string;
  src: string;
  title: string;
};

export const SideListItem: VFC<Props> = memo(({ id, src, title }) => {
  return (
    <Link className={Style.item} to={{ pathname: 'watch', search: `?v=${id}` }}>
      <img src={src} alt={title} />
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </Link>
  );
});
