import "./Home.css";
import blogs from "../../data";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {
    return (
        <div className="container">
            {blogs.map((blogobj, i) => {
                const {
                    id,
                    title,
                    content,
                    founder,
                    date,
                    specification
                } = blogobj;
                return (
                    <BlogCard
                        key={i}
                        id={id}
                        title={title}
                        content={content}
                        founder={founder}
                        date={date}
                        specification={specification}
                    />
                );
            })}
        </div>
    );
}

export default Home;
