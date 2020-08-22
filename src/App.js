import React, { useState, useEffect } from 'react';

//0f7b4a0acf40405aaaf2e7c423084a00 mio

import {Header} from './components/Header'
import {ListadoNoticias} from './components/ListadoNoticias'
import {Formulario} from './components/Formulario'


function App() {
  
  const [noticias, setNoticias] = useState([])
  const [categoria, guardarCategoria] = useState('')
  
  
  useEffect( ()=>{
    const consultarAPI = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=0f7b4a0acf40405aaaf2e7c423084a00`
      console.log(categoria)
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      //console.log(noticias.articles)

      setNoticias(noticias.articles)

    }
    consultarAPI()
  }, [categoria])
  
  return (
    <>
      <Header titulo="Noticias API"/>
      <Formulario guardarCategoriaProp={guardarCategoria}/>
      <ListadoNoticias noticiasProp={noticias}/>



    </>
  );
}

export default App;
