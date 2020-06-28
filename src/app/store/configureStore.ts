import { applyMiddleware, createStore } from "redux";
import { sagaMiddleware } from "./middlewares";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas";

const configureStore = (initialState:any)=> {
  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
