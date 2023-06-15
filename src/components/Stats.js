export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding some items in your packing list🚀</em>
      </p>
    );
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percent === 100 ? (
        <em>You got everything ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems} ({percent}%)
        </em>
      )}
    </footer>
  );
}
