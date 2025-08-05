import React, { useState } from 'react'; 
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function BloggerApp() {
  const [selectedComponent, setSelectedComponent] = useState('book');
  const isLoggedIn = true;

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <p>{isLoggedIn ? "Welcome Back!" : "Please log in"}</p>

      <div>
        <button onClick={() => setSelectedComponent('book')}>Show Book</button>
        <button onClick={() => setSelectedComponent('blog')}>Show Blog</button>
        <button onClick={() => setSelectedComponent('course')}>Show Course</button>
      </div>

      <div>
        {selectedComponent === 'book' ? <BookDetails /> :
         selectedComponent === 'blog' ? <BlogDetails /> :
         <CourseDetails />}
      </div>

      <div>
        {isLoggedIn && <p>You have access to premium content.</p>}
      </div>
    </div>
  );
}

export default BloggerApp;
