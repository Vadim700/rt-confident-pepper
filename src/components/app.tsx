import React, { useState } from "react";
import { Header } from "./header/component";
import { Body } from "./body/component";
import { Footer } from "./footer/component";

export const App = (): JSX.Element => {

  const [data, setData] = useState<[]>([]);
  const [state, setState] = useState<any>(localStorage.getItem('state'));
  
  React.useEffect(() => {
    try {
      const getData = async () => {
        const dataValue = await fetch(`https://jsonplaceholder.typicode.com/${state}`)
        .then(res => res.json());
        
        setData(dataValue);
      }

      getData();
      localStorage.setItem('state', state);
    } catch (error) {
      console.error(error);
    }
  }, [state])

  const onclick = (name:any) => {
    setState(name.attributes.id.value); 
  } 

  return (
    <div className="App">
      <Header title="Confident Pepper" onClick={onclick} state={ state } />
      <Body state={state} data={ data} />
      <Footer />
    </div>
  );
}

