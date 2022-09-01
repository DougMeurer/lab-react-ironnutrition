import './App.css';
import foodsJson from './foods.json';
import { Row, Divider, Button } from 'antd';
import {useState} from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'

function App() {

const [foods, setFoods] = useState(foodsJson)
const [search, setSearch] = useState('')

  return (
    <div className="App">

  <AddFoodForm foods={foods} setFoods={setFoods} />

    {/* Adicionar botao abaixo assim que possivel */}
  {/* <Button> Hide Form / Add New Food </Button> */}

  <Search search={search} setSearch={setSearch}/>

  <Divider>Food List</Divider>
  <Row style={{ width: '100%', justifyContent: 'center' }}>

  {foods
        
    .filter(food => {
    return (
          food.name.toLowerCase().includes(search.toLowerCase()) || food.calories.toString().includes(search.toLowerCase())
          || food.servings.toString().includes(search.toLowerCase())
    )
    })
        .map(food => {
         return (
         <FoodBox 
         food={food} 
         key={food.image} 
         foods={foods} 
         setFoods={setFoods}

         />
        )
    })
    }


  </Row>

    </div>
  );
}

export default App;
