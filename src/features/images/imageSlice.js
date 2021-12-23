import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { initialImages } from '../../app/initialImages'
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
  images: [...initialImages],
  lastResult: [...initialImages],
  status: null
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

export const { setInput, setImages, setLastResult } = imageSlice.actions;
export const getStatus = (state) => state.image.status;
export const getImages = (state) => state.image.images;
export const getLastResult = (state) => state.image.lastResult;
export default imageSlice.reducer;
