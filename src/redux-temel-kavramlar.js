const redux = require('redux') //bu şekilde içe aktarılıyor

const counterReducer = (state = {counter: 0}, action) => { 

    return {
        counter: state.counter +1
    }
}

const store = redux.createStore(counterReducer) //Store yaratır

// console.log(store.getState())

const counterSubscriber = () => {

    const latestState = store.getState() // güncellendikten sora en son state snapshot ını 
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment'})