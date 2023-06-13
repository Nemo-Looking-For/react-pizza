
function Categories({ value, onChangeCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегитарианские",
    "Гриль",
    "Острые",
    "Микс пиццы",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((catigoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}>
            {catigoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
