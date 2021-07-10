import API from '../services/api';

const getPosts = async () => {
  try {
    const postList = await API.get('posts', {responseType: 'text'});
    if (postList.status !== 200) throw new Error('DEU RUIM');
    
    return postList.data;
  } catch (error) {
    console.log(error);
  }
};

export default getPosts;
