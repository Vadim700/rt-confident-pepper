import React, { useState } from 'react';
import { Header } from './header/component';
import { Body } from './body/component';
import { Footer } from './footer/component';

import { useAppSelector } from '../hooks';

// https://jsonplaceholder.typicode.com/posts?_page=7&_limit=5

export const App = (): JSX.Element => {
   const [data, setData] = useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = React.useState('');

   const state = useAppSelector((a: any) => a.state.state);

   const onchange = (e: any) => {
      setLimit(e);
   };

   const pageNumber = (e: any): any => {
      setPage(e);
   };

   React.useEffect(() => {
      try {
         const getData = async () => {
            const dataValue = await fetch(
               `https://jsonplaceholder.typicode.com/${state}?_page=${page}&_limit=${limit}`,
            ).then(async (res) => res.json());

            setData(dataValue);
         };
         getData();
         localStorage.setItem('state', state);
      } catch (error) {
         console.error(error);
      }
   }, [state, page, limit]);

   localStorage.setItem('data', JSON.stringify(data));

   const removeItem = (id: number): any => {
      setData((arr) => arr.filter((item: any) => item.id !== id));
   };

   return (
      <div className="App">
         <Header title="Confident Pepper" data={data} onchange={onchange} />
         <Body
            state={state}
            data={data}
            removeItem={removeItem}
            pageNumber={pageNumber}
         />
         <Footer />
      </div>
   );
};
