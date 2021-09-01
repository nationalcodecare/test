function List({ items = [] }) {
  return (
    <div className="items-container">
      {items.length > 0 &&
        items.map((item) => (
          <div key={item.id} className="item-container">
            <a href={item.html_url} target="_blank" rel="noreferrer">
              <span>{item.login}</span>
              <img alt="" src={item.avatar_url} />
            </a>
          </div>
        ))}
    </div>
  );
}

export default List;
