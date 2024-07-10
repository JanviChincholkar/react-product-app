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
       <img className="fullavatar" src={selectedblogs.founder.avatar} alt="founder" />
       <p className="fullname">{selectedblogs.founder.name}<br/>{selectedblogs.date}</p>
       <p className="fullcontent">{selectedblogs.content}</p>
       
      </div>
    );
}

export default BlogView;
