import React from 'react'
import { useState, useEffect, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Navigation'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features'
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
              'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b'
            )
            const data = await response.json()
            console.log(data.drinks)
            setDrink(data)
        } catch (error) {
            console.log('oops', error)
        }
    }
    //hook (uesEffect)
    useEffect(() => {
        getDrinkRecipes()
    }, [])

  //   const getRandomPics = async () => {
  //     try {
  //         const response = await fetch(
  //           'https://foodish-api.herokuapp.com/images/pizza/'
  //         )
  //         const data = await response.json()
  //         console.log(data)
  //         setPics(data)
  //     } catch (error) {
  //         console.log('oops', error)
  //     }
  // }
  // //hook (uesEffect)
  // useEffect(() => {
  //     getRandomPics()
  // }, [])


    useEffect(() => {
        setRedirect(false)
    }, [redirect])

    // function onLinkClick(e){
    //   e.preventDefault();
    //   //further processing happens here.
    // }

    return (
        <div>
            <Nav />
            <DataContext.Provider value={{ food, setFood, drink, setDrink, }}>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/features" render={() => <Features drink={drink} setDrink={setDrink}/>} />
                    <Route path="/recipes" render={() => <Recipes />} />
                </Switch>
            </DataContext.Provider>
        </div>
    )
}

export default App
