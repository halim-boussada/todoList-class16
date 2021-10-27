import React, { useEffect, useState } from "react";
import axios from "axios";
// Hooks use Effect HOOk
function Home() {
  var [inp, setInp] = useState("");
  var [todos, setTodos] = useState([]);

  function get() {
    axios.get("/api/todos").then(({ data }) => {
      console.log(data);
      setTodos(data);
    });
  }
  useEffect(() => {
    get();
  }, []);
  function h() {
    axios.post("/api/todos", { todo: inp }).then(({ data }) => {
      get();
    });
  }
  function d(id) {
    axios.delete("/api/todos/" + id).then((d) => {
      get();
    });
  }
  function u(id) {
    axios.put("/api/todos/" + id, { todo: inp }).then((d) => {
      get();
    });
  }
  var list = todos.map((e, i) => (
    <li key={i}>
      {e.todo} <button onClick={() => d(e._id)}>delete</button>
      <button onClick={() => u(e._id)}>up</button>
    </li>
  ));
  return (
    <div>
      <button onClick={h}>oo</button>
      <input type="text" onChange={(e) => setInp(e.target.value)} />
      {list}
    </div>
  );
}

export default Home;
