import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <section className='container'>
      <div className='title'>
        <h3>Questions and answers about login</h3>
      </div>
      <div className='info'>

      {data.map((question)=>{
        const {id, title, info} = question
        return (
          <SingleQuestion key={id} {...question}/>
        )
      })}
      </div>

    </section>
  </main>;
}

export default App;
