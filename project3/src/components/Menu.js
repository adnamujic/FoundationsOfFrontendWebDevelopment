import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast & Starters');
  
  // Simulacija dohvaćanja podataka 
  useEffect(() => {

    setMenuData({
      'Breakfast & Starters': [
        { id: 1, name: 'Eggs Benedict', price: '$10', description: 'Poached eggs on English muffin with hollandaise sauce' },
        { id: 2, name: 'French Toast', price: '$8', description: 'Thick slices of bread dipped in beaten eggs and fried' }
      ],
      'Main Course': [
        { id: 3, name: 'Grilled Salmon', price: '$20', description: 'Fresh salmon fillet grilled to perfection' },
        { id: 4, name: 'Chicken Alfredo', price: '$18', description: 'Creamy Alfredo sauce with grilled chicken breast' }
      ],
      'Dinner': [
        { id: 5, name: 'Filet Mignon', price: '$30', description: 'Tender filet steak seasoned and grilled to your liking' },
        { id: 6, name: 'Vegetable Stir-Fry', price: '$15', description: 'Assorted vegetables stir-fried in savory sauce' }
      ],
      'Coffee & Drinks': [
        { id: 7, name: 'Espresso', price: '$3', description: 'Strong black coffee brewed by forcing steam through finely-ground coffee beans' },
        { id: 8, name: 'Mojito', price: '$12', description: 'A classic cocktail made with rum, mint, sugar, lime juice, and soda water' }
      ]
    });
  }, []);

  // Simulirani podaci jelovnika
  const [menuData, setMenuData] = useState({});

  // Filtriranje jelovnika na temelju odabrane kategorije hrane
  const filteredMenu = menuData[selectedCategory] || [];

  return (
    <div id="restaurant-menu">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>Menu</h2>
          <hr />
          <p>Indulge in our concise menu, meticulously designed to tantalize your taste buds with every dish.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="menu-section">
              <h2 className="menu-section-title">Categories</h2>
              <hr />
              {/* Dugmad za odabir kategorije hrane */}
              <button onClick={() => setSelectedCategory('Breakfast & Starters')}>Breakfast & Starters</button>
              <button onClick={() => setSelectedCategory('Main Course')}>Main Course</button>
              <button onClick={() => setSelectedCategory('Dinner')}>Dinner</button>
              <button onClick={() => setSelectedCategory('Coffee & Drinks')}>Coffee & Drinks</button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="menu-section">
              {/* Prikaz odabrane kategorije hrane */}
              <h2 className="menu-section-title">{selectedCategory}</h2>
              <hr />
              {/* Prikaz elemenata jelovnika */}
              {filteredMenu.map(item => (
                <div className="menu-item" key={item.id}>
                  <div className="menu-item-name">{item.name}</div>
                  <div className="menu-item-price">{item.price}</div>
                  <div className="menu-item-description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
