import './App.css'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { teal } from '@mui/material/colors'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import UserProfileScreen from './screens/UserProfileScreen'

const theme = createTheme(
  {
    palette: {
      primary: teal,
      secondary: teal,
    },
    typography: {
      fontFamily: "Montserra, sans-serif",
    },
  }
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />
  },
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "/register",
    element: <RegistrationScreen />
  },
  {
    path: "/profile",
    element: <UserProfileScreen userId={1} />
  }
]);

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </>
  )
}

export default App
