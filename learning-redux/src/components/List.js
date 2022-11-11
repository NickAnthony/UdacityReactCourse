const List = ({ items, removeItem, toggleItem }) => {
  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
              onClick={(e) => {
                toggleItem && toggleItem(item);
              }}
            >
              {item.name}
            </span>
            <button
              onClick={(e) => {
                removeItem(item);
              }}
            >
              X
            </button>
          </li>
        ))}
    </ul>
  );
};

export default List;
