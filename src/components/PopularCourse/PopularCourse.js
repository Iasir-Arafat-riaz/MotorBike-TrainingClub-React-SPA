import React from "react";
import { Card, Col } from "react-bootstrap";
import "./PopularCourse.css"

const PopularCourse = (props) => {
  const {image,categorie,describe} = props.popular;
  return (
    <div  >
      <Col>
        <Card className="popular-course">
          <Card.Img className="popular-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{categorie}</Card.Title>
            <Card.Text>
              {describe}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default PopularCourse;
