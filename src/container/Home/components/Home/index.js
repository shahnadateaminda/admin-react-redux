import React from 'react'
import CardComponent from '../../../../components/Card';
import classes from './Home.module.scss';

export default function Home() {
  return (
    <div className={classes.home}>

      <CardComponent />
    </div>
  )
}
