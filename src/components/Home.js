import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// 🚀 If the image is in public/assets/bg.jpg, keep this:
const backgroundImageUrl = '/assets/bg.jpg';
// 🚀 If you moved it into src/assets/, use:  import backgroundImageUrl from '../assets/bg.jpg';

export default function Home({ mode = 'light' }) {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/TextUtilse'); // ✅ make sure route name is correct

  return (
    <div
      className={`text-${mode === 'light' ? 'dark' : 'light'}`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Hero Section */}
      <div
        className="container text-center mb-5 py-5"
        style={{
          backgroundColor: mode === 'light'
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(0,0,0,0.7)',
          borderRadius: '20px',
        }}
      >
        <h1 className="display-4 fw-bold">
          Welcome to <span className="text-primary">TextUtils</span>
        </h1>
        <p className="lead">A powerful, lightweight text‑editing utility for everyday use.</p>
        <button className="btn btn-primary mt-3" onClick={handleGetStarted}>
          ✨ Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">🚀 Features</h2>
        <div className="row">
          {[
            { icon: '🔠', text: 'Convert to Uppercase / Lowercase' },
            { icon: '📋', text: 'Copy text with a single click' },
            { icon: '🧹', text: 'Remove extra spaces from text' },
            { icon: '🔊', text: 'Text‑to‑Speech functionality' },
            { icon: '🧮', text: 'Count words and characters' },
          ].map(({ icon, text }, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <h1>{icon}</h1>
                  <p className="card-text">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        className="container my-5"
        style={{
          backgroundColor: mode === 'light'
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(0,0,0,0.7)',
          borderRadius: '20px',
          padding: '2rem',
        }}
      >
        <h2>📚 About This Project</h2>
        <p>
          TextUtils is a simple, responsive web app built with <strong>React.js</strong>. It
          showcases core React concepts like components, props, state and React Router. Whether
          you're a student, writer or coder, TextUtils helps you manipulate text on the go.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <hr />
        <p>
          Made with ❤️ by <strong>Lavansh Gupta</strong> | Version 1.0
        </p>
      </footer>
    </div>
  );
}
