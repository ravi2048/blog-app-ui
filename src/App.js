import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

const Layout = () => {
  return(
    <> 
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <SinglePost/>
      },
      {
        path: '/create-post',
        element: <CreatePost/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
