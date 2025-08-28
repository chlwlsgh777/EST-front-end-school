import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    </AuthContextProvider>
  );
}

export default App