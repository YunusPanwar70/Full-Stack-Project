import React from 'react';
import foodRecipe from '../assets/foodRecipe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeItem from '../components/RecipeItem';
function Home() {
    return (
        <>
            <section className='home'>
                <div className="left">
                    <h1>Foor Recipe</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora neque, distinctio quae ab rerum repellendus quas eos suscipit accusantium veniam?</h5>
                    <button>Share your recipe</button>
                </div>
                <div className="right">
                    <img src={foodRecipe} alt="foodRecipe" width='320px' height='300px' />
                </div>
            </section>
            <div className="recipe">
                <RecipeItem />
            </div>
        </>
    );
}
export default Home;