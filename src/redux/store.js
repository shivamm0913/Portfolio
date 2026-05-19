import { configureStore, createSlice } from '@reduxjs/toolkit'

const persistedMode = (() => {
  try {
    const v = localStorage.getItem('theme:mode')
    return v === 'dark' || v === 'light' ? v : null
  } catch {
    return null
  }
})()

const initialThemeState = {
  mode: persistedMode ?? 'dark',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setTheme(state, action) {
      state.mode = action.payload === 'dark' ? 'dark' : 'light'
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
})

// Persist on changes
try {
  store.subscribe(() => {
    const mode = store.getState().theme.mode
    localStorage.setItem('theme:mode', mode)
  })
} catch {}


