import { useState } from "react";

export default function useRedux(store) {
  const [item, setInnerValue] = useState(store.getState());
  
  const dispatch = (action) => {
    const unsubscribe = store.subscribe(() => {
      setInnerValue(store.getState());
      unsubscribe();
    });
    store.dispatch(action);
  }

  return [item, dispatch];
}

