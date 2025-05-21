import React from "react";
import "./index.css";

const Bloglist = ({ posts }) => {
  return (
    <div className="blog-list">
      {posts.map(({ slug, title, excerpt, heroImage, date, author, tags }) => (
        <article key={slug} className="post-card">
          <a href={`/blog/${slug}/`}>
            {heroImage && (
              <img src={heroImage} alt={title} className="card-img" />
            )}
            <div className="card-data">
              <h3>{title}</h3>
              <p className="excerpt">{excerpt}</p>
              <div className="meta">
                <span>{new Date(date).toLocaleDateString()}</span> —{" "}
                <span>{author}</span>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
};

export default Bloglist;
