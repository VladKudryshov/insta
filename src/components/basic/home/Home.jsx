import React, {Component} from 'react';
import SliderComponent from "./SliderComponent";
import WidgetPostContainer from "../../../containers/blog/WidgetPostContainer";
import ToolTip from "../tooltip/ToolTip";
import {Link} from "react-router";


const Home = () => (
    <>
        <SliderComponent/>
        <div className="information">

            <div className="card small-box">
                <div className="some-img">
                    <img src="images/vegetables-hand-drawn-basket.png" alt=""/>
                </div>
                <div className="short-text">100% Organic</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    asperiores consequatur dolore doloribus, labore maxime nobis provident quam quo suscipit.
                </div>
            </div>
            <div className="card small-box">
                <div className="some-img">
                    <img src="images/fast-delivery.png" alt=""/>
                </div>
                <div className="short-text">Fast Delivery</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    asperiores consequatur dolore doloribus, labore maxime nobis provident quam quo suscipit.
                </div>
            </div>
            <div className="card small-box">
                <div className="some-img"><img src="images/diet.png" alt=""/></div>
                <div className="short-text">Healthy</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                    asperiores consequatur dolore doloribus, labore maxime nobis provident quam quo suscipit.
                </div>
            </div>
        </div>
        <div className="categories card">
            <ul>
                <li className="category">
                    <ToolTip tooltipMessage={"Овощи"}>
                        <Link to={{pathname: `/products`, query: {category: 'Vegetable'}}} className="iamg hover"
                              onlyActiveOnIndex><img src="images/salad-bowl-hand-drawn-food.png" alt=""/></Link>
                    </ToolTip>
                </li>
                <li className="category">
                    <ToolTip tooltipMessage={"Зелень"}>
                        <Link to={{pathname: `/products`, query: {category: 'Greens'}}} className="iamg hover"
                              onlyActiveOnIndex><img src="images/lettuce.png" alt=""/></Link>
                    </ToolTip>
                </li>
                <li className="category">
                    <ToolTip tooltipMessage={"Фрукты"}>
                        <Link to={{pathname: `/products`, query: {category: 'Fruits'}}} className="iamg hover"
                              onlyActiveOnIndex><img src="images/apple-and-grapes-on-a-bowl.png" alt=""/></Link>
                    </ToolTip>
                </li>
                <li className="category">
                    <ToolTip tooltipMessage={"Ягоды"}>
                        <Link to={{pathname: `/products`, query: {category: 'Berries'}}} className="iamg hover"
                              onlyActiveOnIndex><img src="images/strawberry.png" alt=""/></Link>
                    </ToolTip>
                </li>
                <li className="category">
                    <ToolTip tooltipMessage={"Рассада"}>
                        <Link to={{pathname: `/products`, query: {category: 'Seedlings'}}} className="iamg hover"
                              onlyActiveOnIndex> <img src="images/plant-with-leaves.png" alt=""/></Link>
                    </ToolTip>
                </li>
            </ul>
        </div>
        <WidgetPostContainer/>
    </>
)
export default Home;

