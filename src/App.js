import React from 'react'
import { useState, useEffect, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Navigation'
import Home from './Components/Home/Home'
import DrinksRecipe from './Components/Drinks/DrinksRecipe'
import Recipes from './Components/Recipes/Recipes'
//import './App.css';

export const DataContext = createContext()
//console.log(DataContext);

function App() {
    //redirects
    const [redirect, setRedirect] = useState(false)
    //getters, setters for api call
    const [food, setFood] = useState([])
    const [drink, setDrink] = useState([])
    //const [pic, setPics]= useState([])
    //API CALL
    const getFoodRecipes = async () => {
        try {
            const response = await fetch(
                // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=10&apiKey=702003a95486469fa4e2467ef3c6300a'
            )
            const data = await response.json()
            console.log(data)
            setFood(data)
        } catch (error) {
            console.log('oops', error)
        }
    }
    //hook (uesEffect)
    useEffect(() => {
        getFoodRecipes()
    }, [])

    const getDrinkRecipes = async () => {
        try {
            const response = await fetch(
              'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m'
              // 'www.thecocktaildb.com/api/json/v1/1/random.php'
            //   'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
            )
            const data = await response.json()
            console.log(data)
            setDrink(data)
        } catch (error) {
            console.log(error)
        }
    }
    //hook (uesEffect)
    useEffect(() => {
        getDrinkRecipes()
    }, [])

    useEffect(() => {
        setRedirect(false)
    }, [redirect])

    const DrinkList = [
        {
            strDrink: 'Afterglow',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
            idDrink: 12560,
            strIngredient1: ["Grenadine","Orange juice", "Pineapple juice"],
            strInstructions: "Mix. Serve over ice.",
        },
        {
            strDrink: 'Alice Cocktail',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg',
            idDrink: 12562,
            strIngredient1: ["Grenadine","Orange juice","Pineapple juice","Cream"],
            strInstructions: "Shake well, strain into a large cocktail glass.",
        },
        {
            strDrink: 'Aloha Fruit punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
            idDrink: 12862,
            strIngredient1: ["Water","Ginger","Guava juice", "Lemon juice", "Pineapple","Sugar", "Pineapple juice"],
            strInstructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
        },
        {
            strDrink: 'Apello',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
            idDrink: 15106,
            strIngredient1:["Orange juice","Grapefruit juice","Apple juice", "Maraschino cherry"],
            strInstructions: "Stirr. Garnish with maraschino cherry."
        },
        {
            strDrink: 'Apple Berry Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
            idDrink: 12710,
            strIngredient1:["Berries","Apple"],
            strInstructions: "Throw everything into a blender and liquify.",
        },
        {
            strDrink: 'Apple Karate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg',
            idDrink: 12564,
            strIngredient1: ["Apple juice","Carrot"],
            strInstructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
        },
        {
            strDrink: 'Banana Cantaloupe Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
            idDrink: 12708,
            strIngredient1:["Cantaloupe", "Banana"],
            strInstructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
        },
        {
            strDrink: 'Banana Milk Shake',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg',
            idDrink: 12654,
        },
        {
            strDrink: 'Banana Strawberry Shake',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg',
            idDrink: 12656,
            strIngredient1: ["Milk","Orange juice","Sugar syrup","Banana"],
            strInstructions:"Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
        },
        {
            strDrink: 'Banana Strawberry Shake Daiquiri',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
            idDrink: 12658,
            strIngredient1:["Strawberries","Banana","Apple juice"],
            strInstructions: "Blend all together in a blender until smooth."

        },
        {
            strDrink: 'Bora Bora',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
            idDrink: 12572,
            strIngredient:["Pineapple juice", "Passion fruit juice","Lemon juice", "Grenadine"],
            strInstructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",

        },
        {
            strDrink: 'Castillian Hot Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
            idDrink: 12730,
            strIngredient1: ["Cocoa powder", "Sugar", "Cornstarch","Water","Milk"],
            strInstructions:"Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
        },
        //________________________________________________________//
        {
            strDrink: 'Chocolate Beverage',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg',
            idDrink: 12732,
        },
        {
            strDrink: 'Chocolate Drink',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg',
            idDrink: 12734,
        },
        {
            strDrink: 'Coke and Drops',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg',
            idDrink: 17108,
        },
        {
            strDrink: 'Cranberry Punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg',
            idDrink: 12890,
        },
        {
            strDrink: 'Drinking Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg',
            idDrink: 12736,
        },
        {
            strDrink: 'Egg Cream',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg',
            idDrink: 12668,
        },
        {
            strDrink: 'Frappé',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg',
            idDrink: 12768,
        },
        {
            strDrink: 'Fruit Cooler',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg',
            idDrink: 12670,
        },
        {
            strDrink: 'Fruit Flip-Flop',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg',
            idDrink: 12672,
        },
        {
            strDrink: 'Fruit Shake',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg',
            idDrink: 12674,
        },
        {
            strDrink: 'Grape lemon pineapple Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg',
            idDrink: 12712,
        },
        {
            strDrink: 'Holloween Punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg',
            idDrink: 12954,
        },
        {
            strDrink: 'Hot Chocolate to Die for',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg',
            idDrink: 12738,
        },
        {
            strDrink: 'Iced Coffee',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg',
            idDrink: 12770,
        },
        {
            strDrink: 'Ipamena',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg',
            idDrink: 17176,
        },
        {
            strDrink: 'Just a Moonmint',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg',
            idDrink: 12688,
        },
        {
            strDrink: 'Kill the cold Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg',
            idDrink: 12720,
        },
        {
            strDrink: 'Kiwi Papaya Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg',
            idDrink: 12714,
        },
        {
            strDrink: 'Lassi - A South Indian Drink',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg',
            idDrink: 12690,
        },
        {
            strDrink: 'Lassi - Mango',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg',
            idDrink: 12698,
        },
        {
            strDrink: 'Lassi - Sweet',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg',
            idDrink: 12696,
        },
        {
            strDrink: 'Lassi Khara',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg',
            idDrink: 12692,
        },
        {
            strDrink: 'Lassi Raita',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg',
            idDrink: 12694,
        },
        {
            strDrink: 'Lemouroudji',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg',
            idDrink: 12702,
        },
        {
            strDrink: 'Limeade',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg',
            idDrink: 12704,
        },
        {
            strDrink: 'Mango Orange Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg',
            idDrink: 12716,
        },
        {
            strDrink: 'Masala Chai',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg',
            idDrink: 12774,
        },
        {
            strDrink: 'Melya',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg',
            idDrink: 12776,
        },
        {
            strDrink: 'Microwave Hot Cocoa',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg',
            idDrink: 12744,
        },
        {
            strDrink: 'Nuked Hot Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg',
            idDrink: 12746,
        },
        {
            strDrink: 'Orange Scented Hot Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg',
            idDrink: '12748',
        },
        {
            strDrink: 'Orangeade',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg',
            idDrink: 12618,
        },
        {
            strDrink: 'Pineapple Gingerale Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg',
            idDrink: 12718,
        },
        {
            strDrink: 'Pysch Vitamin Light',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg',
            idDrink: 15092,
        },
        {
            strDrink: 'Rail Splitter',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg',
            idDrink: 12630,
        },
        {
            strDrink: 'Spanish chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg',
            idDrink: 12750,
        },
        {
            strDrink: 'Spiced Peach Punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg',
            idDrink: 13032,
        },
        {
            strDrink: 'Spiking coffee',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg',
            idDrink: 12780,
        },
        {
            strDrink: 'Strawberry Lemonade',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg',
            idDrink: 13036,
        },
        {
            strDrink: 'Strawberry Shivers',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg',
            idDrink: 12722,
        },
        {
            strDrink: 'Sweet Bananas',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg',
            idDrink: 12724,
        },
        {
            strDrink: 'Thai Coffee',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg',
            idDrink: 12782,
        },
        {
            strDrink: 'Thai Iced Coffee',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg',
            idDrink: '12784',
        },
        {
            strDrink: 'Thai Iced Tea',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg',
            idDrink: 12786,
        },
        {
            strDrink: 'Tomato Tang',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg',
            idDrink: 12726,
        },
        {
            strDrink: 'Yoghurt Cooler',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg',
            idDrink: 12728,
        },
    ]

    // function onLinkClick(e){
    //   e.preventDefault();
    //   //further processing happens here.
    // }

    return (
        <div>
            <Nav />
            <DataContext.Provider value={{ food, setFood, drink, setDrink, DrinkList}}>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/DrinksRecipe" render={() => <DrinksRecipe drink={drink} setDrink={setDrink}/>} />
                    <Route path="/recipes" render={() => <Recipes />} />
                </Switch>
            </DataContext.Provider>
        </div>
    )
}

export default App
