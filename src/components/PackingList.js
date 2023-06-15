import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, onDelete, onToogle, clearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedList;
  if (sortBy === "input") sortedList = items;
  if (sortBy === "description")
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedList = items.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToogle={onToogle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={() => clearList()}>Clear List</button>
      </div>
    </div>
  );
}
