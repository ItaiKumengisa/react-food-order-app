import classes from './Meals.module.css'
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
const Meals = () => {
    return <>
        <MealsSummary/>
        <AvailableMeals/>
    </>
}

export default Meals;