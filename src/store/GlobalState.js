import React, { createContext, useContext, useReducer } from "react";
import {
  SET_CITY_WEATHER,
  SET_CITY
} from "./actions";

const StoreContext = createContext({
  cityInfo: {},
  city: ""
})

const { Provider } = StoreContext;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_CITY_WEATHER:
      console.log("setting recipe", payload);
      return { ...state, cityInfo: payload }

    case SET_CITY:
      console.log("setting city", payload);
      return { ...state, city: payload }

    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    cityInfo: {},
    city: "Columbus"

  });

  return <Provider value={[store, dispatch]}>{children}</Provider>
}

export const useStoreContext = () => {
  return useContext(StoreContext);
}



