import React from "react";
import { Carousel } from "react-bootstrap";
import "./Trainer.css"

const Instructors = () => {
  return (
    <div className="trainer-div">
      <div className="trainer-detail">
          <h2 className="welcome">We have best trainer over the world</h2>
          <div className="tariner-des">
          <h4 className="trainer">Valentino Rossi</h4>
          <p> is an Italian professional motorcycle road racer and multiple time MotoGP World Champion. Rossi is widely considered to be one of the greatest motorcycle racers of all time, with nine Grand Prix World Championships to his name – seven of which are in the premier class. Rossi is also the only road racer to have competed in 400 or more Grands Prix.[1] He has ridden with number 46 his entire career. He also owns the Sky Racing Team VR46 which currently participates in the Moto2 class and historically in the Moto3 class.</p>
          <br />
          <h4 className="trainer">Maque Marquize</h4>
          <p>
          is a Spanish Grand Prix solo motorcycle road racer and is considered to be one of the most successful motorcycle racers of all time, with eight Grand Prix World Championships to his name, six of which are in the premier class. Márquez has raced for Honda's factory team since his MotoGP debut in 2013. He is nicknamed the 'Ant of Cervera' worldwide and 'el tro de Cervera' in his hometown, meaning the 'Thunder of Cervera'. He is one of four riders to have won world championship titles in three different categories, after Mike Hailwood, Phil Read and Valentino Rossi. Márquez is often considered one of the greatest innovators of modern MotoGP racing,
          </p>
          <br />
          <h4 className="trainer">Nicky Heiden</h4>
          <p>
          was an American professional motorcycle racer who won the MotoGP World Championship in 2006. Hayden began racing motorcycles at a young age. He began his road racing career in the CMRA before progressing to the AMA Supersport Championship and then to the AMA Superbike Championship. He won the AMA title in 2002 and was approached by the Repsol Honda team to race for them in MotoGP in 2003.
          </p>
          </div>
      </div>
      <div className="Carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/B4MNM15/rossi.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Valentino Rossi</h3>
              <p>Valentino rossi is a best motor bike racer over the world, he is full time trainer of our club</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/wwM73Gh/mm.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 >Maque Marquize</h3>
              <p className="bg-dark">Mark marquize champion of moto gp he is pert-time trainer</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/NT9Scph/motogp-japanese-gp-2013-nicky-hayden-ducati-team.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Nicky Heiden</h3>
              <p>
                Nicky Heiden is a ex winner of world championship and he is a legen teacher all time.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Instructors;
