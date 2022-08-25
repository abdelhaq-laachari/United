import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import NewPost from "../components/Posts/NewPost";

export default function() {
    return (
        <div>
            <Navbar/>
            {/* <News/> */}
            <NewPost/>
        </div>
    );
}