import './scss/app.scss';


import  Header from './components/header/Header';
import  Categories from './components/categories/Categories';
import  Sort from './components/sort/Sort';
import PizzaBlock from './components/pizza-block/Pizza-block';


function App() {
  return (
    <div className="App">
      <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title='Чизбургер-пицца' price={420}/>
            <PizzaBlock title='Сырная' price={399}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
