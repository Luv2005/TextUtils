import React ,{useState}from 'react';

export default function About() {

    return (
        <>
        <div>
          <div className="container my-3">
            <h1>About Us</h1>
          </div>
            <div className="accordion"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About the Owner 
                        </button>
                    </h2>
                    <div id="collapseOne"  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Founder of this application is lavansh gupta.</strong> For Contact {"        "}  
                             <a href="https://www.instagram.com/_https_luvv?igsh=MXZlY2hkNnh5NmVteg%3D%3D">Click Here</a>
                        </div>
                    </div>
                </div>
                
               
            </div>

        </div>

        </>
    );
}
