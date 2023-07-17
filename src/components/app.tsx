import React, { useState } from "react";
import { Header } from "./header/component";
import { Body } from "./body/component";
import { Footer } from "./footer/component";



export const StateContext = React.createContext<any>(localStorage.getItem('state'));

export const App = (): JSX.Element => {
  
  const [state, setState] = useState<any>(localStorage.getItem('state'));
  const [data, setData] = useState([]);
  let page = 1;

  const pageNumber = (e:any) => {
    page = e;
  }

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
  }, [state, page])
  
  localStorage.setItem('data', JSON.stringify(data));
  
  const onclick = (name: any) => {
    setState(name.attributes.id.value);
  };
  
  const removeItem = (id: any) => {
    setData((arr) => arr.filter((item: any) => item.id !== id));
  };




  return (
    <StateContext.Provider value={ { state } }>
      <div className="App">
        <Header title="Confident Pepper"
          onClick={onclick}
          state={state}
          data={data}
        />
        
        <Body 
          state={state} 
          data={ data} 
          removeItem={removeItem}
          pageNumber={pageNumber}
        />

        <Footer />
      </div>
    </StateContext.Provider>
  );
}

