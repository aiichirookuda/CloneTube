import axios from 'axios';

const KEY = 'AIzaSyDrJxYwjLKP8tz1jszIOYR4QVO3y1b466I';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
};

export const fetchCategoryVideos = async (id) => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular',
      videoCategoryId: id,
    },
  });
};

export const fetchCategories = async () => {
  return await youtube.get('/videoCategories', {
    params: {
      ...params,
    },
  });
};

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular',
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      id,
    },
  });
};

export const fetchRelatedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  });
};

export const fetchSearchData = async (query) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      q: query,
    },
  });
};
