import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { CardGroup, Row } from "react-bootstrap";
import { AllCategoriesContext } from "../../App";
import Category from "../Category/Category";
import "./Categories.css";

const Services = () => {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch("./categories.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  //receve context api
  const [categoriesHeader,categories] = useContext(AllCategoriesContext)
  console.log(categories);

  return (
    <div className="m-5 justify-content-md-center">
      <h1 className="categories" >{categoriesHeader}</h1>
      <div className="category-section">
      <Row xs={1} md={3} className="g-4">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </Row>
      </div>
    </div>
  );
};

export default Services;
