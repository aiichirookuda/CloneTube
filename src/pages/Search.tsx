import React, { memo, useContext, useEffect, VFC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { fetchSearchData } from '../apis/api';
import { Store } from '../store/index';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Search: VFC = memo(() => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSearchResult = async () => {
    const searchPrams = new URLSearchParams(location.search);
    const query = searchPrams.get('query');
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({
          type: 'SET_SEARCHED',
          payload: { searched: res.data.items },
        });
      });
    }
  };
  useEffect(
    () => {
      setSearchResult();
    },
    // eslint-disable-next-line
    [location.search]
  );
  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((searched) => {
            return (
              <VideoGridItem
                key={searched.id.videoId}
                id={searched.id.videoId}
                src={searched.snippet.thumbnails.medium.url}
                title={searched.snippet.title}
              />
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </VideoGrid>
    </Layout>
  );
});
