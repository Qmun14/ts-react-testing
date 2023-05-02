import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux-test/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

// Menentukan tipe `RootState` dan `AppDispatch` dari store itu sendiri
export type RootState = ReturnType<typeof store.getState>
// Type yang disimpulkan: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch