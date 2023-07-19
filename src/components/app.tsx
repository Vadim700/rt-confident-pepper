import React, { useState } from "react";
import { Header } from "./header/component";
import { Body } from "./body/component";
import { Footer } from "./footer/component";

// https://jsonplaceholder.typicode.com/${state}?_page=7&_limit=5

export const StateContext = React.createContext<any>(localStorage.getItem('state'));

export const App = (): JSX.Element => {
  
  const [state, setState] = useState<any>(localStorage.getItem('state'));
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = React.useState('');

  const onchange = (e:any) => {
    setPerPage(e);
  }

  const pageNumber = (e:any) => {
    setPage(e);
  }

  React.useEffect(() => {
    try {
      const getData = async () => {
        const dataValue = await fetch(`https://jsonplaceholder.typicode.com/${state}?_page=${page}&_limit=${perPage}`)
          .then(res => res.json());
        
        setData(dataValue);
      }
      getData();
      localStorage.setItem('state', state);
      
    } catch (error) {
      console.error(error);
    }
  }, [state, page, perPage])
  
  localStorage.setItem('data', JSON.stringify(data));
  
  const onclick = (name: any) => {
    setState(name.attributes.id.value);
  };
  
  const removeItem = (id: any) => {
    setData((arr) => arr.filter((item: any) => item.id !== id));
  };




  return (

      <div className="App">
        <Header title="Confident Pepper"
          onClick={onclick}
          state={state}
          data={data}
          onchange={onchange}
        />
        
        <Body 
          state={state} 
          data={ data} 
          removeItem={removeItem}
          pageNumber={pageNumber}
        />
        <Footer />
      </div>
    
  );
}

