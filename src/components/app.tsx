import React, { useState, useContext } from "react";
import { Header } from "./header/component";
import { Body } from "./body/component";
import { Footer } from "./footer/component";


interface IState  {
  state: string;         
}

export const StateContext = React.createContext<any>(localStorage.getItem('state'));

export const App = (): JSX.Element => {
  
  const [state, setState] = useState<any>(localStorage.getItem('state'));
  const [data, setData] = useState([]);
  
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

  const onclick = (name: any) => {
    setState(name.attributes.id.value);
  };

  const removeItem = (id: any) => {

    // const patchData = async () => {
    //   const newData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //     method: 'DELETE',
    //   }).then(res => res.json());

    //   setData(newData);
    // }
    // patchData();
    // console.log(data)

		setData((arr) => arr.filter((item:any) => item.id !== id));
	}

  return (
    <StateContext.Provider value={ { state } }>
      <div className="App">
          <Header title="Confident Pepper" onClick={onclick} state={ state } />
          <Body state={state} data={ data} removeItem={removeItem}/>
          <Footer />
      </div>
    </StateContext.Provider>
  );
}

