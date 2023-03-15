import React from 'react'
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getPokemones } from '../../../redux/actions/index';
import Cards from '../Cards/Cards';

const HomePokemones = () => {

  const dispatch = useDispatch();
  const allPokemones = useSelector((state) => state.pokemonesHome)


  useEffect(() => {
    dispatch(getPokemones());
  }, [dispatch])


  return (

    <div>
        <Cards pokemones = {allPokemones}/>
    </div>

  )
}

export default HomePokemones