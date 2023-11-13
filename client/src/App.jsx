// import '../public/bootstrap.css';
// import '../public/grid.css'
// import '../public/ie.css'
// import '../public/jquery.fancybox.css';
// import '../public/preview.css';
// import '../public/style.css';
import './App.css'
import Error404NotFound from './components/404/Error404NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Pike from './components/Species/Pike';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile/MyProfile';
import Blog from './components/Blog/Blog';
import Logout from './components/Logout/Logout';


function App() {
 

  return (
    <>
      <Nav />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/myProfile' element={<MyProfile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/pike' element={<Pike />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/species'/>
        <Route path='*' element={<Error404NotFound />} />
      </Routes>
      {/* <Posts /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <AboutUs /> */}
      {/* <Pike /> */}
      {/* <Error404NotFound /> */}
      <Footer />
    </>
  )
}

export default App
