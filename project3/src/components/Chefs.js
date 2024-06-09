import React from 'react';
import '../styles/chefs.css';

function Chefs() {
  return (
    <section id="chefs">
      <div className="chef">
        <img src="../images/chef2.jpeg" alt="Chef 1" />
        <h3>Emily Doe</h3>
        <p>Chef Emily infuses her creations with a passion for locally-sourced ingredients, resulting in dishes that reflect the vibrant flavors of the region.</p>
      </div>
      <div className="chef">
        <img src="../images/chef1.jpeg" alt="Chef 2" />
        <h3>Ethan Doe</h3>
        <p>Chef Ethan's culinary expertise shines through in his meticulous attention to detail, transforming simple ingredients into extraordinary culinary delights.</p>
      </div>
      <div className="chef">
        <img src="../images/chef3.jpeg" alt="Chef 3" />
        <h3>Olivia Smith</h3>
        <p>Chef Olivia brings a fusion of global flavors to her dishes, creating unforgettable culinary experiences that tantalize the taste buds.</p>
      </div>
      <div className="chef">
        <img src="../images/chef4.jpeg" alt="Chef 4" />
        <h3>William Johnson</h3>
        <p>Chef William's innovative approach to cooking pushes boundaries, resulting in dishes that are both visually stunning and delightfully delicious.</p>
      </div>
    </section>
  );
}

export default Chefs;
