import React from 'react'
import Records from '../../components/Records/Records'
import Form from '../../components/Form/Form'
import "./HomeStyle.css"

const Home = () => {
  return (
    <section className='home-section'>
      <Records/>
      <Form/>
    </section>
  )
}

export default Home
