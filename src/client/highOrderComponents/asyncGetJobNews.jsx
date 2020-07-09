import React, { useState } from 'react';
import Practic from '../components/practic';
import { jobNews } from '../../../preview/moks';

export const WidthGetJobNews = (props) => {
  const Regnav = props.Regnavbar;
  const [externalData, setExternalData] = useState([jobNews]);
  const [newsCount, setNewsCount] = useState(0);

  const getData = (tkn) => {
    fetch(`/api/getjobnews?from=${newsCount}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: tkn,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setExternalData([...externalData, data]);
      })
      .catch((error) => { console.log(error); });
  };

  return (
    <Practic getData={getData}
      externalData={externalData}
      newsCount={newsCount}
      setNewsCount={setNewsCount}
      Regnav={Regnav}
    />
  );
};
