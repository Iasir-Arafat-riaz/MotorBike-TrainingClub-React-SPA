import React from "react";
import { Card, CardGroup, Col,Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";
import "./Category.css"

const Category = (props) => {
    const history = useHistory()
  const { categorie, charge, image, location, timeDuration, safetyGear,id,describe } =
    props.category;

    const admitNow=()=>{
        history.push("/admission")
    }

  return (
    <div className="category">
    
    <Col>
      <Card className="category-card">
      <h3 className="course-id">Course : {id}</h3>
        <Card.Img className="category-img" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{categorie}</Card.Title>
          <p>total charge: ${charge}</p>
          <p>Course Duration: {timeDuration}</p>
          <Card.Text>
            <h5>{describe}</h5>
          </Card.Text>
          
        </Card.Body>
        <Button onClick={admitNow} variant="danger bottom"><b> <FontAwesomeIcon icon={faMotorcycle} /> Admit now</b></Button>
      </Card>
    </Col>
    </div>
    
  );
};

export default Category;

//--------Thanks to you for your valuable time and support----------------
