
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookmaks/Bookmarks'
import Header from './components/header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const [read, setRead] = useState(0);

  const handleReadingTime = (id, time) =>{
    setRead(read+time);
    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remaining);
  }

  const handleAddtoBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     
      <Header></Header>
     <div className='lg: flex gap-4 justify-between max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark} handleReadingTime={handleReadingTime}>
          
           </Blogs>
        <Bookmarks bookmarks={bookmarks} read={read}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
