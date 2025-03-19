import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="jumbotron text-center p-5 bg-light rounded shadow-sm">
        <h1 className="display-4 text-primary">📰 All new news is old news happening to new people</h1>
        <p className="lead text-dark">
          Your one-stop destination for the latest news from around the world.
        </p>
        <p className="text-muted">
        Real change in society must start from individual initiative.
        </p>
        <Link to="/general" className="btn btn-primary btn-lg mt-3">
          Start Reading
        </Link>
      </div>

      {/* What We Offer */}
      <div className="mt-5">
        <h2 className="text-center text-secondary">🌍 What We Offer</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-3 text-center shadow-sm">
              <h4 className="text-dark">📡 Real-Time Updates</h4>
              <p>Get breaking news as it happens from trusted sources.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center shadow-sm">
              <h4 className="text-dark">🔍 Category-Based News</h4>
              <p>Browse news by category and stay informed on topics you care about.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center shadow-sm">
              <h4 className="text-dark">⚡ Fast & Easy Access</h4>
              <p>Simple and user-friendly interface for quick navigation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore News Categories */}
      <div className="mt-5">
        <h2 className="text-center text-secondary">📌 Explore News Categories</h2>
        <p className="text-center text-muted">Click on a category to see the latest updates.</p>
        <div className="row mt-4">
          {[
            { name: "Business", path: "/business", icon: "💼" },
            { name: "Entertainment", path: "/entertainment", icon: "🎭" },
            { name: "General", path: "/general", icon: "🌍" },
            { name: "Health", path: "/health", icon: "🏥" },
            { name: "Science", path: "/science", icon: "🔬" },
            { name: "Sports", path: "/sports", icon: "⚽" },
            { name: "Technology", path: "/technology", icon: "💻" },
          ].map((category, index) => (
            <div key={index} className="col-md-4 mb-3">
              <Link to={category.path} className="text-decoration-none">
                <div className="card p-3 text-center shadow-sm">
                  <h4 className="text-dark">{category.icon} {category.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-5">
        <h3 className="text-success">📢 Stay Updated with the Latest Facts not News!</h3>
        <p className="text-muted">Never miss out on important updates. Read top headlines now.</p>
        <Link to="/general" className="btn btn-dark btn-lg">Read News Now</Link>
      </div>

      <hr className="my-7" />
      <p className="text-muted text-center">
        📡 Powered by News API | 📰 Your Trusted News Source | 📅 Updated Daily
      </p>
    </div>
  );
};

export default Home;
