import './scss/app.scss';


import  Header from './components/header/Header';
import  Categories from './components/categories/Categories';
import  Sort from './components/sort/Sort';
import PizzaBlock from './components/pizza-block/Pizza-block';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title='Чизбургер-пицца' price={420}/>
            <PizzaBlock title='Сырная' price={399}/>
            <PizzaBlock title='Креветки' price={569}/>
            <PizzaBlock title='Ветчина грибы' price={470}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
