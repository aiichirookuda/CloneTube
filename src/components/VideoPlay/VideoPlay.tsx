import React, { memo, VFC } from 'react';
import Youtube from 'react-youtube';
import Style from './VideoPlay.module.scss';

type Props = {
  id: string;
};

export const VideoPlay: VFC<Props> = memo(({ id }) => {
  return (
    <div className={Style.wrap}>
      <Youtube className={Style.video} videoId={id} />
    </div>
  );
});
