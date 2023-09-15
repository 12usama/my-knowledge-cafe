import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks,read}) => {
    return (
        <div className="w-1/3 text-center bg-gray-300">
            <div>
                <h3 className="text-3xl bg-slate-100 rounded-xl text-blue-500 p-3">Reading Time : {read}</h3>
            </div>
            <h2 className="text-2xl">BookMarked Blogs: {bookmarks.length}</h2>

            {
                bookmarks.map (bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>) 
            }
        </div>
    );
};

export default Bookmarks;