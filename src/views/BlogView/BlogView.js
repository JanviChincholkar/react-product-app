import "./BlogView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogView() {
    const { id } = useParams()
    const selectedblogs = blogs.find((blogobj)=>blogobj.id===id)
    return (
      <div className="fullview">
       <h1 className="fulltitle">{selectedblogs.title}</h1>
       <marquee className="fullname">{selectedblogs. specification}</marquee>
       <img className="fullavatar" src={selectedblogs.founder.avatar}/>
       <h3> Only At Just {selectedblogs.prize} </h3>
       <p className="fullcontent">{selectedblogs.content}</p>
       <button className="button">
                Buy now
            </button>
      </div>
    );
}

export default BlogView;
