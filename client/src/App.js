import './App.css';
import React, {Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./pages/Products";
import All from "./pages/All";

function DynamicLoading(props){
  const Component=React.lazy(()=>import(`${props.component}`));
  return (
      <Suspense fallback={<div>Loading ...</div>}>
          <Component/>
      </Suspense>
  );
}


function App() {
    return (
    <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar/>
        <Switch>
            <Route exact path="/"><DynamicLoading component="./Home"/></Route>
            <Route path="/All/:page" component={All}></Route>
            <Route path="/Product/:productId" component={Products}></Route>
            <Route exact path="/New"><DynamicLoading component="./pages/New.jsx"/></Route>
            <Route exact path="/Discounting"><DynamicLoading component="./pages/Discounting.jsx"/></Route>
            <Route exact path="/Male"><DynamicLoading component="./pages/Male.jsx"/></Route>
            <Route exact path="/Female"><DynamicLoading component="./pages/Female.jsx"/></Route>
        </Switch>
        </Router>
    );
}

export default App;
