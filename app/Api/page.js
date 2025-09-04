// AxiosApi.js
import axios from "axios";
import Page from '../page'
import React from 'react'

export async function explore() {
  try {
    const res = await axios.get('https://backend.lixir-interiors.com/api/explore', {
      cache: "force-cache"
    })
    const response = await res.data
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const axiosApi = async () => {
  const posts = await explore();
  console.log(posts);
  return null;
}

export default axiosApi;
