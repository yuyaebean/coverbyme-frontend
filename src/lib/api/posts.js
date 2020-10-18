import client from './client';

export const writePost = ({
  title,
  youtubeLink,
  description,
  originalTitle,
  originalSinger,
}) =>
  client.post('/api/posts', {
    title,
    youtubeLink,
    description,
    originalTitle,
    originalSinger,
  });