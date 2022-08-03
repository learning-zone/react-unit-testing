import React from 'react'
import Header from './Components/Header/Header'
import Props from './Components/Props/Props'
import Events from './Components/Events/Events'
import RestAPI from './Components/RestAPI/RestAPI'
import './App.scss'



export default function App() {
  return (
    <div className='App'>
      {/** Component Test */}
      <Header />
      <section className='main'>
        {/** Props Test */}
        <Props header='Props Test' desc='Validating props in React !' />
        <br/><hr/>
        {/** Events and Snapshot Test */}
        <Events />
        <br/><hr/>
        {/** RestAPI Test */}
        <RestAPI />
      </section>
    </div>
  );
}
