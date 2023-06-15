import { useState } from "react";
import "./index.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
function App() {
  const [items, setItems] = useState([]);

  const checkHandler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const addHandler = (item) => {
    setItems((e) => [...e, item]);
  };
  const deleteHandler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const clearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddHandle={addHandler} />
      <PackingList
        items={items}
        onDelete={deleteHandler}
        onCheck={checkHandler}
        onToogle={checkHandler}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
