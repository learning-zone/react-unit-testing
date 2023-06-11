import React from 'react'
import Header from './components/Header/Header'
import Props from './components/Props/Props'
import Events from './components/Events/Events'
import Snapshot from './components/Snapshot/Snapshot'
import RestAPI from './components/RestAPI/RestAPI'
import './App.scss'


export default function App() {
  return (
    <div className='App'>
      {/** Component Testing */}
      <Header />

      <section className='main'>

        {/** Props Testing */}
        <Props header='Props Testing' desc='Validating props in React !' />
        <br /><hr />

        {/** Events Testing */}
        <Events />
        <br /><hr />

        {/** Snapshot Testing */}
        <Snapshot />
        <br /><hr />

        {/** RestAPI Testing */}
        <RestAPI />

      </section>
    </div>
  );
}
