import React from 'react';
import { RenderPdfPaye } from '../components/body/components/Payers/RenderPdfPaye';
import { RenderNotPaye } from '../components/body/components/Payers/RenderNotPaye';
import { useState, useEffect } from 'react';
import { CabeceraOtherPage } from '../components/body/CabeceraOtherPage';

export const HistorialPaye = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('datosPay'));
    setData(localStorageData);
  }, []);

  const eliminar = (id) => {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem('datosPay', JSON.stringify(newData));
    setData(newData);
  };

  console.log(data);
    
  return (
    <>
      <CabeceraOtherPage />
      {
        (data !== null && data.length !== 0 )? <RenderPdfPaye data={data} eliminar={eliminar} /> : <RenderNotPaye />
      }
    </>
  )
}
