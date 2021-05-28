import React, { memo, useContext, useEffect, VFC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { fetchCategoryVideos } from '../apis/api';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { Store } from '../store';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Category: VFC = memo(() => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(
    () => {
      const id = globalState.selectedCategoryId;
      fetchCategoryVideos(id).then((res) => {
        setGlobalState({
          type: 'SET_CATEGORY_VIDEOS',
          payload: { categoryVideos: res.data.items },
        });
      });
    },
    // eslint-disable-next-line
    [globalState.selectedCategoryId]
  );
  return (
    <Layout>
      <VideoGrid>
        {globalState.categoryVideos.map((videos) => {
          return (
            <VideoGridItem
              key={videos.id}
              id={videos.id}
              src={videos.snippet.thumbnails.medium.url}
              title={videos.snippet.title}
            />
          );
        })}
      </VideoGrid>
    </Layout>
  );
});
