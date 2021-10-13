import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Categories from "./components/Categories/Categories";
import Instructors from "./components/Instructors/Instructors";
import Forum from "./components/Forum/Forum";
import Sponsors from "./components/Sponsors/Sponsors";
import Admission from "./components/Admission/Admission";
import Trainer from "./components/Trainer/Trainer";
import { createContext, useEffect, useState } from "react";
import Category from "./components/Category/Category";
//Use context api
export const AllCategoriesContext = createContext();
function App() {
  const allCategories = "Here Is Our All Courses ";
  const [courses, setCourse] = useState([]);
  useEffect(()=>{
fetch ("./categories.json")
.then(res=>res.json())
.then(data=>setCourse(data))
},[])
  return (
    <AllCategoriesContext.Provider value={[allCategories,courses]}>
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Categories></Categories>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/categories">
              <Categories></Categories>
            </Route>
            <Route path="/forum">
              <Forum></Forum>
            </Route>
            <Route path="/sponsors">
              <Sponsors></Sponsors>
            </Route>
            <Route path="/admission">
              <Admission></Admission>
            </Route>
            <Route path="/trainer">
              <Trainer></Trainer>
            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </AllCategoriesContext.Provider>
  );
}

export default App;

//.......................THANKS TO YOU FOR YOUR TIME AND SUPPORT...........
