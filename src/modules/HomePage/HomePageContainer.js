import React from 'react';
import Category from "../../common/Category"
import "./homepage.scss"

function HomePageContainer(props) {
    var caterogis = [
        {
            name: "PIZZA",
            img: "https://cafebiz.cafebizcdn.vn/thumb_w/600/2015/slider-2-1440951114675-crop-1440951137880.jpg"
        },
        {
            name: "DRINKS",
            img: "https://assets.epicurious.com/photos/57ab6c9e80e7d8e55a8e851f/2:1/w_1260%2Ch_630/mai-tai.jpg"
        },
        {
            name: "SALAD",
            img: "https://www.madgreens.com/sites/default/files/mad_molly_brown_no_protein-2-1-150709_0.jpg"
        },
        {
            name: "SPAGHETTI",
            img: "https://media2.s-nbcnews.com/j/newscms/2017_11/1201160/food-lucinda-scala-quinn-spaghetti-choc-pb-pretzel-squares-tease-today-170314-01_14850ef6d83157c0b56e22066c93ccff.focal-920x460.jpg"
        },
    ]
    return (
        <div className="container">
            <div className="container-category">
                {caterogis.map((category, index) => <Category key={index} {...category} {...props} />)}
            </div>
        </div>
    );
}

export default HomePageContainer;
