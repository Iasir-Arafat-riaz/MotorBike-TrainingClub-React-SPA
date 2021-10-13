import React, { useContext, useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import { AllCategoriesContext } from "../../App";
import PopularCourse from "../PopularCourse/PopularCourse";
import "./Home.css";

const Home = () => {
  // const [populars, setPopulars] = useState([]);
  // useEffect(() => {
  //   fetch("./popularCourses.json")
  //     .then((res) => res.json())
  //     .then((data) => setPopulars(data));
  // }, []);
const [textHeader,popularCourser]=useContext(AllCategoriesContext)
const populars = popularCourser.slice(0,4)
//now mapping with component


  return (
    <div className="main-home-div">
      <div className="home-div ">
        <div className="describe-div">
          <h1 className="text-center welcome">WelCome To Our Training Club</h1>
          <br />
          <br />
          <h3 className=" categories">Objectives</h3>
          <div className="objectives">
            <h5>*Provide best trainer for your skill</h5>
            <h5>*Develop proficiency in crossing over obstacles</h5>
            <h5>*Adjusting Speed & Turning</h5>
            <h5>*Starting & Stopping Drill</h5>
            <h5>*Limited-Space Maneuvers</h5>
            <h5>*Stopping Quickly in a Curve</h5>
            <h5>*Level up to international standard</h5>
            <h5>*Pressing to Initiate Lean</h5>
            <h5>
              *Become skilled in using the clutch friction zone for control
            </h5>
            <h5>*Matching Gears to Speed</h5>
          </div>
        </div>

        <div className="popular-courses-sec">
          <h3 className="text-center">
            <span className=" popular-tex">Popular</span> <span className="courses-text">Courses</span>.
          </h3>
          <Row xs={1} md={2} className="g-4">
            {populars.map((popular, index) => (
              <PopularCourse popular={popular} key={index}></PopularCourse>
            ))}
          </Row>
        </div>
      </div>
      <div className="home-detail">
        <div className="Carousels-section">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/v406Cmp/bike-3.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>We train you professionally</h3>
                <p>
                You can learn to ride a motorcycle safely or take the knowledge and riding skills tests.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/KxMhc9L/bike-1.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Knowledge and riding skills tests</h3>
                <p>This online course is a key component of the full hands-on Basic RiderCourse.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/wJ0PgC1/bike-2.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Motorcycle Safety Program</h3>
                <p>
                The best place to start once you've made the decision to ride. Covers the basics of operating a motorcycle and safety-oriented mental strategies.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="site-description">
          <h1 className="Why-learn welcome">Why learn with our trainig club</h1>
          <div className="mt-5">
          <p>The Motor Bike training club is a Basic RiderCourse is designed for beginning riders of all ages. More than 1 million motorcyclists nationwide have graduated from a RiderCourse since 2001. Eight to ten hours of classroom-style instruction – including, in some states, the Basic eCourse that you complete online before attending your first formal classroom session – prepares you for ten hours of hands-on riding exercises in a controlled, off-street environment – typically, a paved parking lot. Motorcycles and helmets are provided free of charge for your use during the course. In the classroom, you’ll learn about the different types of motorcycles, layout and operation of the basic controls, and how to become a safer, more responsible rider. You’ll then move to the riding range where your MSF-certified RiderCoach will guide you through the basic skills of straight-line riding, stopping, shifting, and turning, gradually progressing to swerving and emergency braking.The course concludes with a classroom knowledge test and hands-on a riding skill evaluation. Once your RiderCoach hands you the course-completion card, you'll be happy knowing that you’ve gone the extra mile to develop your own safe riding techniques.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


//Thanks to you