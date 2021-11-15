import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { Button, Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

export default function Features({ drink }) {
    const drinkData = useContext(DataContext)
    console.log(drinkData)

    if (drink.length <= 0) {
        return 'oops'
    }
    // console.log(drink.drinks[0])

    return (
        <div>
            {drink.drinks &&
                drink.drinks.map((drink, id) => {
                    return (
                        <Button>
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
                        </Button>
                    )
                })}
        </div>
    )
}
