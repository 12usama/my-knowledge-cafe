import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddtoBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} 
                    blog={blog}
                    handleAddtoBookmark={handleAddtoBookmark}
                    handleReadingTime ={handleReadingTime}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;