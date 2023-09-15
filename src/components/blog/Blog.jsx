import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddtoBookmark, handleReadingTime}) => {
    const {id, title, cover, author, author_img, posted_date, reading_times, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-4 mb-5">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className="text-2xl">{reading_times} min read</span>
                    <button onClick={()=> handleAddtoBookmark(blog)} className='ml-2 text-xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-3">{title} </h2>
            <p>
                {
                    hashtags.map(hash => <span className="font-semibold"><a href="">#{hashtags}</a>  </span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(id, reading_times)} className='underline text-violet-950'>Mark as read</button>
        </div>
    );
};

export default Blog;