import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputList, setInputList] = useState({ task: "" });
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = document.cookie
      .split("; ")
      .find((row) => row.startsWith("items="));
    if (savedItems) {
      setItems(JSON.parse(decodeURIComponent(savedItems.split("=")[1])));
    }
  }, []);

  useEffect(() => {
    document.cookie = `items=${encodeURIComponent(JSON.stringify(items))}`;
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputList({ ...inputList, [name]: value });
  };

  const btnClicked = () => {
    if (inputList.task !== "") {
      setItems((prev) => [...prev, inputList]);
      setInputList({ task: "" });
    }
  };

  const DeleteItem = (id) => {
    setItems((prev) => prev.filter((_, index) => index !== id));
  };

  const EditItem = (id) => {
    setId(id);
    setEdit(false);
    const updatedValue = items.find((_, index) => index === id);
    setInputList({ ...inputList, ...updatedValue });
  };

  const btnUpdate = () => {
    if (inputList.task !== "") {
      const updatedItems = items.map((value, index) =>
        index === id ? inputList : value
      );
      setItems(updatedItems);
      setInputList({ task: "" });
      setId(null);
      setEdit(true);
    }
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add an Item"
          name="task"
          value={inputList.task}
          onChange={handleChange}
        />
        {edit ? (
          <button className="button" onClick={btnClicked}>
            Add
          </button>
        ) : (
          <button className="button" onClick={btnUpdate}>
            Update
          </button>
        )}
        <ol>
          {items.length > 0 &&
            items.map((e, key) => (
              <div key={key}>
                <ul className="ul">
                  <p>{e.task}</p>
                  <button className="btn" onClick={() => DeleteItem(key)}>
                    Delete
                  </button>
                  <button className="btn" onClick={() => EditItem(key)}>
                    Edit
                  </button>
                </ul>
              </div>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
