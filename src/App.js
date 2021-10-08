import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Users from "./Components/Users";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { useState, useEffect } from "react";
import { AddTodo } from "./Components/AddTodo";
import StateHooks from "./Components/StateHooks";
// class App extends Component {
// render() {
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am on delete todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sNo;
    if (todos.length === 0) {
      sNo = 0;
    } else {
      sNo = todos[todos.length - 1].sNo + 1;
    }
    const myTodo = {
      sNo: sNo,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todos List " searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/Components/About">
            <About />
          </Route>
          <Route exact path="/Components/StateHooks">
            <StateHooks />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
    // <Router>
    //   <div>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <div className="container-fluid">
    //         <span className="navbar-brand mb-0 h1">Navbar</span>
    //       </div>
    //       <div className="collapse navbar-collapse">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <Link className="nav-link active" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" to="/Components/About">
    //               About
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link active" to="/Components/Users">
    //               Users
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //     <main className="container"></main>
    //     {/* A <Switch> looks through its children <Route>s and
    //       renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/Components/About">
    //         <About />
    //       </Route>
    //       <Route path="/Components/Users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
  //   }
  // }
}
export default App;
