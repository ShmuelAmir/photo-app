import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl, generateRandomStringDate } from './imageApi'

export const fetchAsyncImages = createAsyncThunk(
  'image/fetchAsyncImages',
  async (input) => {
    const response = await axios.get(baseUrl + input);
    return response.data.items.map(item => ({
      title: item.title,
      link: item.link,
      date: generateRandomStringDate()
    }));
  }
);

const initialState = {
  images: [],
  lastResult: [],
  status: null,
  favorite: true,
  initTag: 'all'
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages(state, action) {
      state.images = action.payload;
    },
    setLastResult(state, action) {
      state.lastResult = action.payload;
    },
    setFavorite(state, action) {
      state.favorite = action.payload;
    },
    setInitTag(state, action) {
      state.initTag = action.payload;
    },
    clearAll(state) {
      state.images = [];
      state.lastResult = [];
      state.favorite = true;
      state.initTag = 'all';
    }
  },

  extraReducers: {
    [fetchAsyncImages.pending]: (state) => {
      return {
        ...state,
        status: 'loading'
      }
    },
    [fetchAsyncImages.fulfilled]: (state, action) => {
      return {
        ...state,
        images: action.payload, 
        lastResult: action.payload,
        status: null 
      };
    },
    [fetchAsyncImages.rejected]: (state) => {
      return {
        ...state,
        status: null 
      }
    },
  }
});

export const { setInput, setImages, setLastResult, setFavorite, setInitTag, clearAll } = imageSlice.actions;
export const getStatus = (state) => state.image.status;
export const getImages = (state) => state.image.images;
export const getLastResult = (state) => state.image.lastResult;
export const getFavorite = (state) => state.image.favorite;
export const getInitTag = (state) => state.image.initTag;
export default imageSlice.reducer;
