
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
import CreatePostPage from './components/Create/CreatePostPage';
import PostDetails from './components/Posts/PostDetails';
import { AuthProvider } from './context/AuthProvider';
import BlogDetails from './components/Blog/BlogDetails';


function App() {
 

  return (
    <div className='content'>
      <AuthProvider>
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
          <Route path='/posts/create' element={<CreatePostPage />} />
          <Route path='/posts/:id/details' element={<PostDetails />} />
          <Route path='/blog/:id/details' element={<BlogDetails />} />
          <Route path='*' element={<Error404NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
      
    </div>
  )
}

export default App
