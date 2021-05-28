import React, { memo, useContext, VFC } from 'react';
import { Store } from '../../store/index';
import { SideListItem } from '../SideListItem/SideListItem';
import Style from './SideList.module.scss';

export const SideList: VFC = memo(() => {
  const { globalState } = useContext(Store);

  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          return (
            video.snippet && (
              <SideListItem
                key={video.id.videoId}
                id={video.id.videoId}
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
            )
          );
        })
      ) : (
        <span>No Data</span>
      )}
    </div>
  );
});
