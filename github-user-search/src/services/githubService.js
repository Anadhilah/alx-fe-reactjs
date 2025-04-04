import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';


export const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;
    
    const response = await axios.get(`${API_URL}?q=${query}&per_page=5&page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('User search failed');
  }
};
