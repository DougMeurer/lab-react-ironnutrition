import { Input, Divider } from 'antd'
import {useState} from 'react'

function AddFoodForm ({foods, setFoods}) {

const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
})

    function handleChange(e) {
        e.preventDefault() 
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault() 

        let updatedFoodBox = [...foods, form]
       setFoods(updatedFoodBox)   

        // setForm nao esta 'esvaziando' o input dps de adicionar um novo elemento* - investigar o porq/
       setForm({
        name: '',
        image: '',
        calories: '',
        servings: '',
       })
    }

    return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input type="text" name="name" value={foods.name} onChange={handleChange} required/>

      <label>Image</label>
      <Input type="url" name="image" value={foods.image} onChange={handleChange} required/>

      <label>Calories</label>
      <Input type="text" name="calories" value={foods.calories} onChange={handleChange} required/>

      <label>Servings</label>
      <Input type="text" name="servings" value={foods.servings} onChange={handleChange} required/>

      <button type="submit">Create</button>
    </form>
    )
}

export default AddFoodForm