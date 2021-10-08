import React from "react";
import { useState } from "react";
export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [d, isLoaded] = useState(true);
  let [showAlert, setAlert] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      // alert("title or description cannot be blank");
      setAlert((showAlert = true));
      setTimeout(() => {
        setAlert((showAlert = null));
      }, 2000);
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
      setAlert((showAlert = false));
      getNext(title, desc);
    }
  };
  const getNext = async (title, desc) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: "Nokia lumia",
        cost: "13000",
        firstName: title,
        lastName: "Singh",
        age: 56,
      }),
    };
    await fetch("http://localhost:3200/products", requestOptions)
      .then((res) => res.json())
      // .then(console.log((res) => JSON.stringify(res)))
      .then((result) => {
        isLoaded(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        {showAlert ? (
          <div className="alert alert-warning" role="alert">
            title or description cannot be blank
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="btn  btn-sm btn-success mt-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};
