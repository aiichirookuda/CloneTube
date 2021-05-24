import React, { useContext, useEffect, VFC } from 'react';
import { Layout } from '../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { fetchSearchData } from '../apis';
import { Store } from '../store/index';
import { VideoGrid } from '../components/VideoGrid/VideoGrid';
import { VideoGridItem } from '../components/VideoGridItem/VideoGridItem';

export const Search: VFC = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSearchResult = async () => {
    const searchPrams = new URLSearchParams(location.search);
    const query = searchPrams.get('query');
    console.log(query);
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({
          type: 'SET_SEARCHED',
          payload: { searched: res.data.items },
        });
      });
    }
  };
  useEffect(() => {
    setSearchResult();
  }, [location.search]);
  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? (
          globalState.searched.map((searched) => {
            return (
              <VideoGridItem
                key={searched.id}
                id={searched.id}
                src={searched.snippet.thumbnails.high.url}
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
};
