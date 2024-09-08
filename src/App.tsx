import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts, { loader } from './pages/Posts';
import Post from './pages/Post';
import FavoritePost from './pages/FavoritePost';
import Error from './pages/Error';
import MainLayout from './layouts/MainLayout';
import PostsLayout from './layouts/PostsLayout';
import FormPage, { action } from './pages/FormPage';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route path="posts" element={<PostsLayout />}>
        <Route index element={<Posts />} loader={loader} />
        <Route path=":id" element={<Post />} />
        <Route path="favorite" element={<FavoritePost />} />
      </Route>

      <Route path="/form-page" element={<FormPage />} action={action} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;