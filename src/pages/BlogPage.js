import React, { useState } from "react";
import { Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import pageBanners from "../data/pageBanners";
import blogPosts, { formatBlogDate } from "../data/blogPosts";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const bannerTitle = selectedPost ? selectedPost.title : "Educational Blog & Insights";
  const bannerDescription = selectedPost ? selectedPost.excerpt : "Articles and practical guides authored by Mr. Subhash Wangde on mind power, student success, stress relief, and DMIT science.";
  const bannerTag = selectedPost ? selectedPost.category : "Insights and Articles";

  return (
    <div>
      <PageBanner tag={bannerTag} title={bannerTitle} description={bannerDescription} image={pageBanners.blog} />

      <section className="section section-light">
        <div className="container">
          {selectedPost ? (
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <button onClick={() => setSelectedPost(null)} className="btn-outline" style={{ marginBottom: "24px", padding: "8px 16px", fontSize: "0.85rem" }}>
                <ArrowLeft size={16} /> Back to All Articles
              </button>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#95346b",
                  textTransform: "uppercase",
                  verticalAlign: "text-bottom",
                  marginLeft: "20px",
                }}
              >
                {selectedPost.category}
              </span>
              <h2 style={{ fontSize: "2rem", color: "#0f172a", marginTop: "6px", marginBottom: "16px" }}>{selectedPost.title}</h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontSize: "0.875rem",
                  color: "#64748b",
                  marginBottom: "28px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #e2e8f0",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <User size={14} color="#95346b" /> By {selectedPost.author}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Calendar size={14} color="#95346b" /> {formatBlogDate(selectedPost.date)}
                </span>
              </div>

              <div
                style={{
                  fontSize: "1rem",
                  color: "#334155",
                  lineHeight: 1.8,
                  whiteSpace: "pre-line",
                }}
              >
                {selectedPost.content}
              </div>

              <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
                <Link to="/contact" className="btn-primary">
                  Inquire Workshop / Counseling Session
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="section-title">
                <h2>All Articles & Guides</h2>
                <p>Read our informative guides on unleashing human potential and living a stress-free life.</p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
                  gap: "28px",
                }}
              >
                {blogPosts.map((post) => (
                  <div key={post.id} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#95346b",
                            textTransform: "uppercase",
                            backgroundColor: "#f6e7f1",
                            padding: "4px 10px",
                            borderRadius: "4px",
                          }}
                        >
                          {post.category}
                        </span>
                        <span
                          style={{
                            fontSize: "0.8rem",
                            color: "#64748b",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Calendar size={14} color="#95346b" />
                          {formatBlogDate(post.date)}
                        </span>
                      </div>

                      <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "12px", lineHeight: 1.4 }}>{post.title}</h3>

                      <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, marginBottom: "20px" }}>{post.excerpt}</p>
                    </div>

                    <div style={{ paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                      <button
                        onClick={() => setSelectedPost(post)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#95346b",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Read Full Article <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
