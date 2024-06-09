import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <div className="about-img"><img src="img/about.jpg" className="img-responsive" alt="" /></div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Touché</h2>
              <hr />
              <p>Welcome to Touché, where culinary passion meets exquisite flavors. Nestled in the heart of city, we pride ourselves on crafting unforgettable dining experiences. Our menu, curated with the finest ingredients and inspired by both local traditions and global influences, promises to tantalize your taste buds with every bite.</p>
              <h3>Awarded Chefs</h3>
              <p>Our kitchen is helmed by a team of award-winning chefs dedicated to creating culinary masterpieces that elevate the dining experience to new heights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
