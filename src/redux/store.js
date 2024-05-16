import { configureStore } from '@reduxjs/toolkit'
import firstSlice from './slice'

const configStore = configureStore({
    reducer: {
        userInfo: firstSlice,
    }
})

export default configStore;