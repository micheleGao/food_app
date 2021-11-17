import React from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { useState } from 'react'

export default function Drinks() {
    const drinkData = useContext(DataContext)
    console.log(drinkData)

    console.log(drinkData.DrinkList[0].strDrinkThumb)

    // const DrinkList = [
    //     {
    //         strDrink: 'Afterglow',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
    //         idDrink: 12560,
    //         strIngredient1: ["Grenadine","Orange juice", "Pineapple juice"],
    //         strInstructions: "Mix. Serve over ice.",
    //     },
    //     {
    //         strDrink: 'Alice Cocktail',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg',
    //         idDrink: 12562,
    //         strIngredient1: ["Grenadine","Orange juice","Pineapple juice","Cream"],
    //         strInstructions: "Shake well, strain into a large cocktail glass.",
    //     },
    //     {
    //         strDrink: 'Aloha Fruit punch',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
    //         idDrink: 12862,
    //         strIngredient1: ["Water","Ginger","Guava juice", "Lemon juice", "Pineapple","Sugar", "Pineapple juice"],
    //         strInstructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
    //     },
    //     {
    //         strDrink: 'Apello',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
    //         idDrink: 15106,
    //         strIngredient1:["Orange juice","Grapefruit juice","Apple juice", "Maraschino cherry"],
    //         strInstructions: "Stirr. Garnish with maraschino cherry."
    //     },
    //     {
    //         strDrink: 'Apple Berry Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
    //         idDrink: 12710,
    //         strIngredient1:["Berries","Apple"],
    //         strInstructions: "Throw everything into a blender and liquify.",
    //     },
    //     {
    //         strDrink: 'Apple Karate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg',
    //         idDrink: 12564,
    //         strIngredient1: ["Apple juice","Carrot"],
    //         strInstructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
    //     },
    //     {
    //         strDrink: 'Banana Cantaloupe Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
    //         idDrink: 12708,
    //         strIngredient1:["Cantaloupe", "Banana"],
    //         strInstructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
    //     },
    //     {
    //         strDrink: 'Banana Milk Shake',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg',
    //         idDrink: 12654,
    //         strIngredient1: ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
    //         strInstructions: "Blend all together in a blender until smooth.",
    //     },
    //     {
    //         strDrink: 'Banana Strawberry Shake',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg',
    //         idDrink: 12656,
    //         strIngredient1: ["Milk","Orange juice","Sugar syrup","Banana"],
    //         strInstructions:"Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
    //     },
    //     {
    //         strDrink: 'Banana Strawberry Shake Daiquiri',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
    //         idDrink: 12658,
    //         strIngredient1:["Strawberries","Banana","Apple juice"],
    //         strInstructions: "Blend all together in a blender until smooth."

    //     },
    //     {
    //         strDrink: 'Bora Bora',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
    //         idDrink: 12572,
    //         strIngredient:["Pineapple juice", "Passion fruit juice","Lemon juice", "Grenadine"],
    //         strInstructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",

    //     },
    //     {
    //         strDrink: 'Castillian Hot Chocolate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
    //         idDrink: 12730,
    //         strIngredient1: ["Cocoa powder", "Sugar", "Cornstarch","Water","Milk"],
    //         strInstructions:"Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
    //     },
    //     {
    //         strDrink: 'Chocolate Beverage',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg',
    //         idDrink: 12732,
    //         strIngredient1: ["Milk", "Chocolate", "Cinnamon", "Egg"],
    //         strInstructions: "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
    //     },
    //     {
    //         strDrink: 'Chocolate Drink',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg',
    //         idDrink: 12734,
    //         strIngredient1: ["Chocolate", "Milk", "Water"],
    //         strInstructions: "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
    //     },
    //     {
    //         strDrink: 'Coke and Drops',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg',
    //         idDrink: 17108,
    //         strIngredient1: ["Coca-Cola","Lemon juice"],
    //         strInstructions: "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
    //     },
    //         //________________________________________________________//
    //     {
    //         strDrink: 'Cranberry Punch',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg',
    //         idDrink: 12890,
    //     },
    //     {
    //         strDrink: 'Drinking Chocolate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg',
    //         idDrink: 12736,
    //     },
    //     {
    //         strDrink: 'Egg Cream',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg',
    //         idDrink: 12668,
    //     },
    //     {
    //         strDrink: 'Frappé',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg',
    //         idDrink: 12768,
    //     },
    //     {
    //         strDrink: 'Fruit Cooler',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg',
    //         idDrink: 12670,
    //     },
    //     {
    //         strDrink: 'Fruit Flip-Flop',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg',
    //         idDrink: 12672,
    //     },
    //     {
    //         strDrink: 'Fruit Shake',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg',
    //         idDrink: 12674,
    //     },
    //     {
    //         strDrink: 'Grape lemon pineapple Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg',
    //         idDrink: 12712,
    //     },
    //     {
    //         strDrink: 'Holloween Punch',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg',
    //         idDrink: 12954,
    //     },
    //     {
    //         strDrink: 'Hot Chocolate to Die for',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg',
    //         idDrink: 12738,
    //     },
    //     {
    //         strDrink: 'Iced Coffee',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg',
    //         idDrink: 12770,
    //     },
    //     {
    //         strDrink: 'Ipamena',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg',
    //         idDrink: 17176,
    //     },
    //     {
    //         strDrink: 'Just a Moonmint',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg',
    //         idDrink: 12688,
    //     },
    //     {
    //         strDrink: 'Kill the cold Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg',
    //         idDrink: 12720,
    //     },
    //     {
    //         strDrink: 'Kiwi Papaya Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg',
    //         idDrink: 12714,
    //     },
    //     {
    //         strDrink: 'Lassi - A South Indian Drink',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg',
    //         idDrink: 12690,
    //     },
    //     {
    //         strDrink: 'Lassi - Mango',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg',
    //         idDrink: 12698,
    //     },
    //     {
    //         strDrink: 'Lassi - Sweet',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg',
    //         idDrink: 12696,
    //     },
    //     {
    //         strDrink: 'Lassi Khara',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg',
    //         idDrink: 12692,
    //     },
    //     {
    //         strDrink: 'Lassi Raita',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg',
    //         idDrink: 12694,
    //     },
    //     {
    //         strDrink: 'Lemouroudji',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg',
    //         idDrink: 12702,
    //     },
    //     {
    //         strDrink: 'Limeade',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg',
    //         idDrink: 12704,
    //     },
    //     {
    //         strDrink: 'Mango Orange Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg',
    //         idDrink: 12716,
    //     },
    //     {
    //         strDrink: 'Masala Chai',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg',
    //         idDrink: 12774,
    //     },
    //     {
    //         strDrink: 'Melya',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg',
    //         idDrink: 12776,
    //     },
    //     {
    //         strDrink: 'Microwave Hot Cocoa',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg',
    //         idDrink: 12744,
    //     },
    //     {
    //         strDrink: 'Nuked Hot Chocolate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg',
    //         idDrink: 12746,
    //     },
    //     {
    //         strDrink: 'Orange Scented Hot Chocolate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg',
    //         idDrink: '12748',
    //     },
    //     {
    //         strDrink: 'Orangeade',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg',
    //         idDrink: 12618,
    //     },
    //     {
    //         strDrink: 'Pineapple Gingerale Smoothie',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg',
    //         idDrink: 12718,
    //     },
    //     {
    //         strDrink: 'Pysch Vitamin Light',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg',
    //         idDrink: 15092,
    //     },
    //     {
    //         strDrink: 'Rail Splitter',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg',
    //         idDrink: 12630,
    //     },
    //     {
    //         strDrink: 'Spanish chocolate',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg',
    //         idDrink: 12750,
    //     },
    //     {
    //         strDrink: 'Spiced Peach Punch',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg',
    //         idDrink: 13032,
    //     },
    //     {
    //         strDrink: 'Spiking coffee',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg',
    //         idDrink: 12780,
    //     },
    //     {
    //         strDrink: 'Strawberry Lemonade',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg',
    //         idDrink: 13036,
    //     },
    //     {
    //         strDrink: 'Strawberry Shivers',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg',
    //         idDrink: 12722,
    //     },
    //     {
    //         strDrink: 'Sweet Bananas',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg',
    //         idDrink: 12724,
    //     },
    //     {
    //         strDrink: 'Thai Coffee',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg',
    //         idDrink: 12782,
    //     },
    //     {
    //         strDrink: 'Thai Iced Coffee',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg',
    //         idDrink: '12784',
    //     },
    //     {
    //         strDrink: 'Thai Iced Tea',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg',
    //         idDrink: 12786,
    //     },
    //     {
    //         strDrink: 'Tomato Tang',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg',
    //         idDrink: 12726,
    //     },
    //     {
    //         strDrink: 'Yoghurt Cooler',
    //         strDrinkThumb:
    //             'https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg',
    //         idDrink: 12728,
    //     },
    // ]

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <div
                className="flexbox-container"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    /* flex-wrap: wrap; */
                    alignItems: 'center',
                }}
            >
                <div
                    className="drinks-list"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyItems: 'center',
                        flexWrap: 'wrap',
                        // padding-left: 60px;
                        // padding: auto;
                    }}
                >
                    {drinkData.DrinkList &&
                        drinkData.DrinkList.map((drink, id) => {
                            return (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        margin: 'auto',
                                    }}
                                >
                                    <Card
                                        key={id}
                                        border="light"
                                        className="bg-dark text-white"
                                        style={{
                                            width: '18rem',
                                            display: 'flex',
                                            margin: '0',
                                            flexDirection: 'column',
                                            flexWrap: 'nowrap',
                                            marginTop: '1rem',
                                            marginRight: '2rem',
                                            marginLeft: '2rem',
                                            borderRadius: '3rem',
                                        }}
                                    >
                                        <Card.Img
                                            src={drink.strDrinkThumb}
                                            alt="drink photo"
                                            id={id}
                                            style={{
                                                borderRadius: '17px',
                                                border: '2px solid black',
                                            }}
                                        />
                                        <Card.ImgOverlay>
                                            <Button
                                                style={{
                                                    backgroundColor:
                                                        'transparent',
                                                }}
                                                onClick={handleShow}
                                            >
                                                <Card.Title
                                                    style={{
                                                        backgroundColor:
                                                            'transparent',
                                                        color: 'white',
                                                        fontSize: '20px',
                                                        textAlign: 'center',
                                                        textShadow:
                                                            '2px 2px 4px #000000',
                                                    }}
                                                >
                                                    {drink.strDrink}
                                                </Card.Title>
                                            </Button>
                                            {/* <Card.Text style={{ backgroundColor: "transparent", fontSize:"13px", textAlign: "center", textShadow: "2px 2px 4px #000000"}}>
                                            <h5>Instructions:</h5>
                                            {drink.strInstructions}
                                        </Card.Text>  */}
                                        </Card.ImgOverlay>
                                    </Card>
                                    <Modal.Dialog>
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                            {drink.strDrink}
                                            </Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <h1>Ingredients : </h1>
                                            <p>{drink.strIngredient1}</p>
                                            <h1>Instructions : </h1>
                                            <p>{drink.strInstructions}</p>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="secondary">
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal.Dialog>
                                    {/* <Modal
                                                show={show}
                                                onHide={handleClose}
                                                animation={false}
                                            >
                                                <Modal.Body>
                                                    {drink.strDrink}
                                                    {drink.strDrink}
                                                   {drink.strIngredient1}
                                                   <h1>Instructions:</h1>
                                                   {drink.strInstructions}
                                                </Modal.Body>
                                                <Button
                                                        variant="secondary"
                                                        onClick={handleClose}
                                                    >
                                                        Close
                                                    </Button>
                                            </Modal> */}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
