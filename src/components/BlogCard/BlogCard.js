import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard({ id, title, content, founder, date, specification }) {
  return (
    <Link className="blogcard" to={`/BlogView/${id}`}>
        <h1 className="title">{title}</h1>
        <p className="pre-content">
            {content.substring(0, 100)}...
        </p>
        <div className="founder">
            <img src={founder.avatar} alt={founder.name} className="avatar" />
            <span className="founder-name">{founder.name}</span>
            <span className="date">{date}</span>
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