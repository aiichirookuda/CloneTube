import React, { VFC, useEffect, useContext } from 'react';
import { Layout } from '../components/Layout/Layout';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store/index';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Top: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      setGlobalState({
        type: 'SET_POPULAR',
        payload: { popular: res.data.items },
      });
    });
  }, [setGlobalState]);

  return (
    <Layout>
      <VideoGrid>
        {globalState.popular.map((popular) => {
          return (
            <VideoGridItem
              key={popular.id}
              id={popular.id}
              src={popular.snippet.thumbnails.high.url}
              title={popular.snippet.title}
            />
          );
        })}
      </VideoGrid>
    </Layout>
  );
};