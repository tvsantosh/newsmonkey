import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card ">
        <h2 className="text-center mb-4 text-primary"><u>About NewsMonkey</u></h2>
        <p className="lead text-center">
          Stay informed with <strong><u>NewsMonkey</u></strong>, your one-stop destination for breaking news and in-depth articles across various categories.
        </p>

        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="text-secondary">🌍 What We Offer</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">✔️ Live news updates from trusted sources</li>
              <li className="list-group-item">✔️ Easy navigation with categorized news</li>
              <li className="list-group-item">✔️ Fast, responsive, and user-friendly interface</li>
              <li className="list-group-item">✔️ Accurate and unbiased news coverage</li>
              <li className="list-group-item">✔️ Latest headlines from Business, Tech, Sports & more</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4 className="text-secondary">⚡ Why Choose Us?</h4>
            <p>
              We bring you the most **reliable and up-to-date** news from around the world. Our news platform is designed to provide:
            </p>
            <ul>
              <li><strong>🔹 Real-time Updates:</strong> Never miss a breaking story.</li>
              <li><strong>🔹 Category-Based Filtering:</strong> Choose what matters to you.</li>
              <li><strong>🔹 AI-Powered Summaries:</strong> Get quick insights on every topic.</li>
              <li><strong>🔹 Dark Mode Support:</strong> Read comfortably at night.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <h4 className="text-success">Stay Ahead of the News! 📢</h4>
          <p>Get the latest updates delivered right to your screen. Explore various categories and stay informed.</p>
          <button className="btn btn-light"><Link to="/general">Explore News Now</Link></button>
        </div>

        <hr className="my-4" />
        <p className="text-muted text-center">
          📡 Powered by News API | 📰 Your Trusted News Source | 📅 Updated Daily
        </p>
      </div>
    </div>
  );
};

export default About;
