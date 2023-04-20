import { useState } from 'react'
import { Box, Typography, useMediaQuery, createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import RoutesView from './routes/RoutesView'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box id="app">
      <RoutesView />
    </Box>
  )
}

export default App
