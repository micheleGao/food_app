import { useState, useEffect, useReducer, createContext } from 'react';
import {Route, Switch } from 'react-router-dom';
//import './App.css';

export const DataContext = createContext();
console.log(DataContext);
 
function App() {
  //redirects
  const [redirect, setRedirect] = useState(false);
  //getters, setters for api call
  const [food, setFood] = useState([]);
  //API CALL
  const getFoodRecipes = async () =>{
    try{
      const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=10&apiKey=702003a95486469fa4e2467ef3c6300a')
      const data = await response.json();
      setFood(data);
    } catch (error){
      console.log('oops', error);
    }
  }
  //hook (uesEffect)
  useEffect(()=>{
    getFoodRecipes();
  }, [])

  useEffect(()=>{
    setRedirect(false);
  }, [redirect])

  // function onLinkClick(e){
  //   e.preventDefault();
  //   //further processing happens here.
  // }

  return (
    <div>
      hello, world!
    </div>
    
  
  );
}

export default App;
