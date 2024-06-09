import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../styles/gallery.css';

function Gallery() {
  const dishes = [
    { image: '/images/food1.jpeg', name: 'Dish 1', description: "Grilled steak with garlic mash", price: 10 },
    { image: '/images/food2.jpeg', name: 'Dish 2', description: "Creamy mushroom risotto with truffle", price: 12 },
    { image: '/images/food3.jpeg', name: 'Dish 3', description: "Seafood linguine in tomato sauce", price: 15 },
    { image: '/images/food4', name: 'Dish 4', description: 'Quinoa salad with balsamic dressing', price: 8 },
    { image: '/images/food5.avif', name: 'Dish 5', description: 'Herb-marinated chicken with rice', price: 11 },
    { image: '/images/food6.jpeg', name: 'Dish 6', description: 'Grilled salmon with lemon butter', price: 13 },
    { image: '/images/food7.jpeg', name: 'Dish 7', description: 'Margherita pizza with fresh basil', price: 9 },
    { image: '/images/food8.jpeg', name: 'Dish 8', description: 'Bacon cheeseburger with lettuce', price: 10 }
  ];

  const [open, setOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleOpen = (dish) => {
    setSelectedDish(dish);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="gallery" id="gallery">
      {dishes.map((dish, index) => (
        <Card key={index} className="gallery-card">
          <CardMedia
            component="img"
            height="140"
            image={dish.image}
            alt={`Image ${index + 1}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dish.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dish.description}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleOpen(dish)}>
              Order Now
            </Button>
          </CardContent>
        </Card>
      ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="order-modal"
        aria-describedby="modal-for-ordering-food"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          {selectedDish && (
            <div>
              <Typography variant="h6" gutterBottom>
                Order Details
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {selectedDish.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedDish.description}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Price: ${selectedDish.price}
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Gallery;
