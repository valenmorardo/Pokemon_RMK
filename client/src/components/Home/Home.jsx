import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/home/pokemones'>
            <button>VER POKEMONES</button>
        </Link>

        <Link to='/home/creation'>
            <button>Crear mi pokemon</button>
        </Link>

        <Link to='/home/donation'>
            <button>DONAR</button>
        </Link>

        <Link to='/home/about'>
            <button>ABOUT</button>
        </Link>


    </div>
  )
}

export default Home