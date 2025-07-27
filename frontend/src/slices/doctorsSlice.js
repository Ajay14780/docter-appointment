import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  doctors: [],
  loading: false,
  error: null,
}

export const fetchDoctors = createAsyncThunk(
  'doctors/fetchDoctors',
  async (backendUrl, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/list')
      if (data.success) {
        return data.doctors
      } else {
        return rejectWithValue(data.message)
      }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false
        state.doctors = action.payload
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default doctorsSlice.reducer 