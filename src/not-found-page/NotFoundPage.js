import React from 'react';
import { Link } from 'react-router-dom';
import robotImg from './robot.jpg'

import "./NotFoundPage.css"

export const NotFoundPage = () => {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <br/>
        <p>Woops... Looks like this page doesn't exist 😢</p>
        <br/>
        <img src={robotImg} alt='A confused robot'/>
        <br/>
        <br/>
        <Link to="/">Click here to go back to the home page</Link>
    </div>
  )
}
