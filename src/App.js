import React from 'react'
import { useState, useEffect, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Navigation'
import Home from './Components/Home/Home'
import DrinksRecipe from './Components/Drinks/DrinksRecipe'
import Recipes from './Components/Recipes/Recipes'
import RecipeCards from './Components/Recipes/RecipeCards'
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
            const response = await fetch()
            // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=10&apiKey=702003a95486469fa4e2467ef3c6300a'
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
            strIngredient1: ['Grenadine', 'Orange juice', 'Pineapple juice'],
            strInstructions: 'Mix. Serve over ice.',
        },
        {
            strDrink: 'Alice Cocktail',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg',
            idDrink: 12562,
            strIngredient1: [
                'Grenadine',
                'Orange juice',
                'Pineapple juice',
                'Cream',
            ],
            strInstructions: 'Shake well, strain into a large cocktail glass.',
        },
        {
            strDrink: 'Aloha Fruit punch',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
            idDrink: 12862,
            strIngredient1: [
                'Water',
                'Ginger',
                'Guava juice',
                'Lemon juice',
                'Pineapple',
                'Sugar',
                'Pineapple juice',
            ],
            strInstructions:
                'Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.',
        },
        {
            strDrink: 'Apello',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
            idDrink: 15106,
            strIngredient1: [
                'Orange juice',
                'Grapefruit juice',
                'Apple juice',
                'Maraschino cherry',
            ],
            strInstructions: 'Stirr. Garnish with maraschino cherry.',
        },
        {
            strDrink: 'Apple Berry Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
            idDrink: 12710,
            strIngredient1: ['Berries', 'Apple'],
            strInstructions: 'Throw everything into a blender and liquify.',
        },
        {
            strDrink: 'Apple Karate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg',
            idDrink: 12564,
            strIngredient1: ['Apple juice', 'Carrot'],
            strInstructions:
                'Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.',
        },
        {
            strDrink: 'Banana Cantaloupe Smoothie',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
            idDrink: 12708,
            strIngredient1: ['Cantaloupe', 'Banana'],
            strInstructions:
                'Juice cantaloupe, pour juice into blender, add banana, and liquify.',
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
            strIngredient1: ['Milk', 'Orange juice', 'Sugar syrup', 'Banana'],
            strInstructions:
                'Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.',
        },
        {
            strDrink: 'Banana Strawberry Shake Daiquiri',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
            idDrink: 12658,
            strIngredient1: ['Strawberries', 'Banana', 'Apple juice'],
            strInstructions: 'Blend all together in a blender until smooth.',
        },
        {
            strDrink: 'Bora Bora',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
            idDrink: 12572,
            strIngredient: [
                'Pineapple juice',
                'Passion fruit juice',
                'Lemon juice',
                'Grenadine',
            ],
            strInstructions:
                'Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.',
        },
        {
            strDrink: 'Castillian Hot Chocolate',
            strDrinkThumb:
                'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
            idDrink: 12730,
            strIngredient1: [
                'Cocoa powder',
                'Sugar',
                'Cornstarch',
                'Water',
                'Milk',
            ],
            strInstructions:
                'Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.',
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

    const veganRecipes = [
        {
            dishName: 'Creamy vegan pasta',
            Ingredients: [
                'creamy vegan pasta sauce',
                '2.5 cups small shell pasta',
                '1tablespoon extra virgin olive oil',
                '1 small chopped yellow onion',
                '5 cups broccoli florets',
                '.25 cup of tasted pine nuts',
                'lemon wedges, for serving”, “sea salt and ground pepper',
            ],
            Instructions:
                'Make the sauce.Bring a large pot of salted water to a boil. Prepare the pasta according to the instructions on the package, cooking until al dente. Drain and set aside.Heat 1 tablespoon of olive oil in a large skillet over medium heat. Add the onion and sauté until soft, about 5 minutes.Stir in the chopped broccoli stems and cook for another 3 to 5 minutes or until tender. Add the broccoli florets and leaves and a splash of water or vegetable broth. Cover and turn off the heat. Allow the broccoli to steam for 2 to 3 minutes or until tender but still bright green. Add the pasta, then stir in ¾ of the sauce, adding more broth if the sauce is too dry.Season to taste with more salt, pepper and lemon juice, as desired, and portion into bowls. Divide the remaining sauce onto each bowl. Top with the pine nuts and serve with lemon wedges on the side.',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-564x674.jpg',
        },
        {
            dishName: 'Zucchini noodles',
            Ingredients: [
                ' 3 medium zucchini”, “lemon, olive oil, sea salt, and parmesan',
            ],
            Instructions:
                'Choose the type of noodle you would like to make and follow the instructions for each option below.For curly spaghetti noodles using a countertop spiralizer: Clamp the spiralizer to your countertop. Trim off the tip of the zucchini and secure it between the blade and the teeth of the spiralizer. Turn the handle to make the noodles.For straight angel hair noodles using a julienne peeler: Simply hold the zucchini with one hand and pull the julienne peeler across the zucchini to make strips.For fettucine noodles using a mandoline and a knife: Slice thin zucchini planks with the mandoline, and then cut those planks into fettuccine-sized strips.For pappardelle noodles using a regular vegetable peeler: Use the peeler to simply peel thin strips of zucchini. Serve the zucchini noodles raw with a warm sauce (the heat of the sauce will gently cook the noodles without making them mushy). Or heat a skillet to medium heat, brush with olive oil, add the noodles and heat 1 minute, or until just warmed through. Remove and serve with desired sauces and toppings',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/08/zucchini-noodles.jpg',
        },
        {
            dishName: 'Grilled Eggplant',
            Ingredients: [
                '2 medium eggplants, sliced into ¼-inch thick rounds',
                'Extra-virgin olive oil, for drizzling sea salt',
            ],
            Instructions:
                ' make Couscous Salad Topping first, ½ cup dry Israeli couscoug first,  ½ teaspoon extra-virgin olive oil, more for drizzling first, 1 garlic clove, grateg first, 1 tablespoon lemon juice, plus 1/2 teaspoon zesg first, 3 tablespoons chopped dried apricots or Medjool dateg first, heaping 1/4 teaspoon sea saltg first, Freshly ground black peppeg first, Pinches red pepper flakeg first, ¼ cup finely chopped parsleg first, 3 tablespoons chopped or sliced almondg first,  ¼ cup mint leaves, for garnishing first, Cook the couscous in a pot of salted boiling water until al dente, about 7 to 8 minutes. Drain and transfer to a medium bowl. Add the olive oil, garlic, lemon juice, lemon zest, dried apricots, salt, pepper, and red pepper flakes. Stir in the parsley and almonds and season to taste.Grill the eggplant. Heat a grill to medium-high heat. Drizzle the eggplant with olive oil and sprinkle with salt and pepper. Grill 2 to 3 minutes per side, until well-charred and tender. Assemble the eggplant on a platter and top with the couscous salad. Garnish with fresh mint. Drizzle with olive oil and season to taste. Serves 4 as a side dish, or 2 as a main.',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/08/IMG_30161.jpg',
        },
        {
            dishName: 'Beet Salad with Goat Cheese and Balsamic',
            ingredients: [
                ' 4 to 5 medium beets',
                'Extra-virgin olive oil, for drizzling',
                '2 cups salad greens arugula or spring mix',
                '½ shallot, thinly sliced',
                '½ green apple, thinly sliced',
                '¼ cup toasted walnuts',
                '2 ounces goat cheese, torn',
                'Microgreens, optional',
                'Balsamic Vinaigrette',
                'Flaky sea salt',
                'Freshly ground black pepper',
            ],
            Instructions:
                'Preheat the oven to 400°F. Wrap each beet in a piece of aluminum foil and drizzle generously with olive oil and pinches of salt and pepper. Place the beets on a baking sheet and roast for 40 to 90 minutes, or until soft and fork-tender. The time will depend on the size and freshness of the beets. Remove the beets from the oven, remove the foil, and set aside to cool. When they are cool to the touch, peel the skins. I like to hold them under running water and slide the skins off with my hands.Let the beets cool and chill them in the fridge until ready to use.Assemble the salad with the greens, shallots, apples, walnuts, cheese, and microgreens, if using. Drizzle with balsamic vinaigrette. Season with flaky sea salt and pepper and serve.',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/11/beet-salad-1.jpg',
        },
        {
            dishName: 'Green Beans Almondine Recipe',
            ingredients: [
                'Fresh green beans, of course! French haricots verts are best here, as they’re more tender than other varieties of string beans.Sliced almonds – Their nutty crunch contrasts perfectly with the grassy, tender green beans.Shallot and garlic – For savory depth of flavor.Extra-virgin olive oil – For sautéing the shallot and green beans. It adds a nice richness that ties the whole dish together.Fresh lemon juice – Its bright flavor balances this simple recipe.And salt and pepper – To make all the flavors pop!',
            ],
            Instructions:
                'Bring a large pot of salted water to a boil and set a large bowl of ice water nearby. Drop the green beans into the boiling water and blanch for 2 minutes. Drain, and immediately immerse in the ice water to stop the cooking process. Drain, and transfer to a towel to dry.Heat a cast-iron skillet over medium heat. Add the almonds to the dry skillet and toast until golden brown, 2 to 3 minutes. Remove the almonds from the pan and set aside.Add the oil to the pan (turn down the heat down if necessary), then add the shallot and the salt and sauté for 2 minutes. Add the green beans and sauté, 2 to 4 more minutes, until the green beans are warmed through and tender. Remove the pan from the heat, add the garlic and lemon juice and toss. Season to taste with salt and pepper and transfer to a serving dish. Top with the almonds and serve.',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/11/green-beans-almondine-1.jpg',
        },
        {
            dishName: 'Instant Pot Lentil Soup',
            ingredients: [
                '2 tablespoons extra-virgin olive oil,1 medium yellow onion, chopped,2 celery stalks, chopped2 cups chopped carrots, about 4 medium,6 kale leaves, stems finely diced, leaves chopped,4 garlic cloves, grated,1 (14-ounce) can diced fire-roasted tomatoes,¾ cup uncooked green lentils, 2 tablespoons white wine vinegar, 12 fresh thyme sprigs, bundled, 1½ teaspoons sea salt, Heaping ½ teaspoon ground cumin, Freshly ground black pepper, 6 cups vegetable broth, Red pepper flakes, ½ cup chopped fresh parsley, for garnish, Grated Parmesan, for serving, optional, Crusty bread, for serving',
            ],
            Instructions:
                'Select the Sauté function on your Instant Pot. Set the level to medium and set the time to 8 minutes. When the Instant Pot is preheated, drizzle the oil into the pot and add the onion, celery, and carrots. Cook for the 8 minutes, or until the vegetables soften.Add the kale stems, garlic, tomatoes, lentils, vinegar, thyme bundle, salt, cumin and several grinds of pepper to the pot and stir. Pour in the vegetable broth and secure the lid on the Instant Pot. Pressure cook on high for 15 minutes.Allow the Instant Pot to release pressure naturally. This will take 20 to 30 minutes. When the float valve drops, remove the lid and stir in the kale leaves. Add a pinch of red pepper flakes and season to taste with salt and pepper.Remove the thyme bundle, and garnish with the parsley and grated Parmesan, if desired. Serve with crusty bread.',
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/10/instant-pot-lentil-soup-1.jpg',
        },
        {
            dishName: 'Vegan Broccoli Soup',
            ingredients: [
                '2 tablespoons extra-virgin olive oil, more for drizzling,1 small yellow onion, diced,½ cup chopped celery,⅓ cup chopped carrots,1 lb. broccoli, stems diced, florets choppe,1 small yukon gold potato, diced (1 cup),4 garlic cloves, minced,4 cups vegetable broth,3 cups cubed bread, for croutons,½ cup raw cashews,1½ teaspoons apple cider vinegar,1/2 teaspoon Dijon mustard,¼ cup fresh dill,1 tablespoon fresh lemon juice,3/4 teaspoon sea salt,freshly ground black pepper',
            ],
            Instructions:
                "Preheat the oven to 350°F and line 2 small baking sheets with parchment paper.Heat the oil in a large pot or Dutch oven over medium heat. Add the onion, celery, carrots, broccoli stems, salt, and pepper and sauté until softened, about 10 minutes. Add the potatoes and garlic and stir, then add the broth and simmer for 20 minutes until the potatoes are soft. Let cool slightly.Set aside 1 cup of the broccoli florets to roast as a topping for the soup. Place the remaining florets in a steamer basket, and set over a pot with 1-inch of water. Bring the water to a simmer, cover, and let steam 5 minutes, until the broccoli is tender.Meanwhile, place the reserved broccoli florets and the bread cubes on the baking sheets. Toss with a drizzle of olive oil and a pinch of salt and roast until the bread is crispy and the broccoli is tender and browned around the edges, 10 to 15 minutes.Transfer the soup to the blender and add the cashews, apple cider vinegar, and mustard, and blend until creamy. Work in batches, if necessary. Add the steamed broccoli florets, dill, and lemon juice, and pulse until the broccoli is incorporated but still chunky. The soup should be thick; if it's too thick, add 1/2 cup water to thin to your desired consistency.Season to taste and serve the soup in bowls with the roasted broccoli and croutons on top",
            Img: 'https://cdn.loveandlemons.com/wp-content/uploads/2017/11/vegan-broccoli-soup.jpg',
        },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
        // {
        //     dishName:"",
        //     ingredients:[],
        //     Instructions:"",
        //     Img:"",
        // },
    ]

    return (
        <div>
            <Nav />
            <DataContext.Provider
                value={{
                    food,
                    setFood,
                    drink,
                    setDrink,
                    DrinkList,
                    veganRecipes,
                }}
            >
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route
                        path="/DrinksRecipe"
                        render={() => (
                            <DrinksRecipe drink={drink} setDrink={setDrink} />
                        )}
                    />
                    <Route
                        path="/RecipeCards"
                        render={() => (
                            <RecipeCards
                            />
                        )}
                    />
                    <Route path="/recipes" render={() => <Recipes />} />
                </Switch>
            </DataContext.Provider>
        </div>
    )
}

export default App
