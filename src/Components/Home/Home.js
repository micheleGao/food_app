import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div>
        <h3>Welcome</h3>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://thumbs.dreamstime.com/b/food-ingredients-spices-cooking-delicious-italian-pizza-mushrooms-tomatoes-cheese-onion-oil-pepper-salt-basil-grater-olive-114683943.jpg"
            src="https://foodish-api.herokuapp.com/images/pizza/pizza16.jpg"
            alt="Food, spices, cooking"
          />
          <Carousel.Caption
            style={{
                backgroundColor: 'transparent',
                color:'white',
                textShadow:'2px 2px 4px #000000',
                fontSize: '20px',
                textAlign: 'center',
            }}
          >
            <h3>Food, spices, cooking</h3>
            <p>Let your dreams come true eating well!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"
            src="https://foodish-api.herokuapp.com/images/rice/rice28.jpg"
            alt="assorted indian recipes"
          />
          <Carousel.Caption 
            style={{
                backgroundColor: 'transparent',
                color:'white',
                textShadow:'2px 2px 4px #000000',
                fontSize: '20px',
                textAlign: 'center',
            }}
          >
            <h3>
              Indian to Italian recipes,let your wild taste buds experience your
              own take.
            </h3>
            <p>
              Let your own taste buds take the stage and your chef skills do the
              rest.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://thumbs.dreamstime.com/b/nut-butter-banana-toast-kids-animal-face-food-art-healthy-meal-table-top-view-eating-lifestyle-menu-dieting-vegan-concept-115031536.jpg"
            src="https://foodish-api.herokuapp.com/images/dessert/dessert3.jpg"
            //https://foodish-api.herokuapp.com/images/burger/burger68.jpg
            alt="Nut, butter, toast"
          />
          <Carousel.Caption>
            <h3 style={{color:"white", fontStyle:"bold", backgroundColor:"black", width:"20%"}}>Little snack ideas even adults love.</h3>
            <p>Sometimes the little things are the best.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
