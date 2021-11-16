import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { Card } from 'react-bootstrap'
//Button,
//import Carousel from 'react-bootstrap/Carousel'

// function onClick(){
//     console.log('hello')
// }

export default function Features({ drink }) {
    const drinkData = useContext(DataContext)
    console.log(drinkData)

    if (drink.length <= 0) {
        return 'oops'
    }

    return (
        <div>
            {drink.drinks &&
                drink.drinks.map((drink, id) => {
                    return (
                        // <Button onClick={onClick()}>
                        <Card className="bg-dark text-white">
                            <Card.Img
                                src={drink.strDrinkThumb}
                                alt="drink photo"
                                id={id}
                            />
                            <Card.ImgOverlay>
                                <Card.Title
                                    style={{
                                        backgroundColor: 'darkgrey',
                                        fontSize: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {drink.strDrink}
                                </Card.Title>
                                {/* <Card.Text style={{ backgroundColor: "darkgrey", fontSize:"13px", textAlign: "center", marginTop:"60px"}}>
                                    <h5>Instructions:</h5>
                                    {drink.strInstructions}
                                </Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                        // </Button>
                    )
                })}
        </div>
    )
}
