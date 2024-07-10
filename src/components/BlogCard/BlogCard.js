import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ id, title, content, founder, date, prize, specification }) {
  return (
    <Link className="blogcard" to={`/BlogView/${id}`}>
        <h1 className="title">{title}</h1>
        <img src={founder.avatar}  className="avatar" />
        <p className="pre-content">
            {content.substring(0, 30)}...
        </p>
        <div className="founder">
           
            <span className="founder-name">{founder.name}</span>
            <h2 className="prize"> Prize : {prize}</h2>
           
        </div>
        <div>
        <button className="button">
                Buy now
            </button>
        </div>
        <div className="specification">
            {specification?.map((tech, i) => (
                <span key={i} className="spec-item">{tech}</span>
            ))}
        </div>
    </Link>
  );
}

export default BlogCard;