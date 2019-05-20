const { createStore } = require('redux');

document.addEventListener('DOMContentLoaded', () => {

  const coffeeReducer = (state = 0, action) => {
    switch(action.type) {
      case 'ADD_COFFEE':
        return state + 1;
      case 'RESET_COFFEE':
      return state = 0;
      default:
        return state;
    }
  }

  const store = createStore(coffeeReducer);

  const button = document.querySelector('button#add');
  button.addEventListener('click', () => {

    store.dispatch({type: 'ADD_COFFEE'})
  });

  const resetButton = document.querySelector('button#reset');
  resetButton.addEventListener('click', () => {
    store.dispatch({type: 'RESET_COFFEE'})
  });

  store.subscribe(() => {
    render();
  });

  const render = () => {
    const total = document.querySelector('h3#total');
    total.textContent = store.getState();
  };

  render();




});
