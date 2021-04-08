import React,{ createContext, useContext, useReducer } from "react";
import {
  SET_CITY_WEATHER
} from "./actions";

const StoreContext = createContext({
  cityInfo: {}
})

const { Provider } = StoreContext;

const reducer = (state, {type, payload}) => {
  switch (type){
    case SET_CITY_WEATHER:
      console.log("setting recipe",payload);
      return {...state, cityInfo:payload}

    default:
      return state;
  }
}

export const StoreProvider = ( {children}) =>{
  const [store,dispatch] = useReducer(reducer, {
    cityInfo:{}
  });

  return <Provider value={[store,dispatch]}>{children}</Provider>
}

export const useStoreContext = () =>{
  return useContext ( StoreContext );
}



