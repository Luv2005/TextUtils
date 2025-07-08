import React from 'react';

export default function About(props) {
  // Dynamic styling based on mode
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? '#ffffff1a' : '#dee2e6',
    transition: 'all 0.3s ease',
  };

  const accordionButtonStyle = {
    backgroundColor: props.mode === 'dark' ? '#1a1a1a' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743',
    transition: 'all 0.3s ease',
  };

  const linkStyle = {
    color: props.mode === 'dark' ? '#0d6efd' : '#0d6efd',
    textDecoration: 'none',
    fontWeight: '500'
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="mb-3">About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={accordionButtonStyle}
            >
              About the Owner
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Founder of this application is Lavansh Gupta.</strong><br />
              For Contact:&nbsp;
              <a
                href="https://www.instagram.com/_https_luvv?igsh=MXZlY2hkNnh5NmVteg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
