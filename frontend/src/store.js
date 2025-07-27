import { configureStore } from '@reduxjs/toolkit'
import doctorsReducer from './slices/doctorsSlice'
import userReducer from './slices/userSlice'
import tokenReducer from './slices/tokenSlice'

const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    user: userReducer,
    token: tokenReducer,
  },
})

export default store 