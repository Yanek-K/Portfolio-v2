import React from "react";
import "./index.css";

const Bloglist = ({ posts }) => {
  return (
    <div className="blog-section">
      <div className="blog__wrap">
        <aside className="blog__nav">
          <p>link</p>
          <p>link</p>
          <p>link</p>
          <p>link</p>
        </aside>
        <div className="blog__content">
          <div className="blog-list">
            {posts.map(
              ({ slug, title, excerpt, heroImage, date, author, tags }) => (
                <article key={slug} className="post-card">
                  <a href={`/blog/${slug}/`}>
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
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloglist;
