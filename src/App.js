import React from 'react'
import Content from './components/contents/Content' 
import Banner from './components/banners/Banner';


const App = () => {
  return (
    <div>
 
      <Content xy={[150,200]} num={15} title={['News to day','red']}/>
      <Banner y={50}/>
      <Content xy={[250,250]} num={6} title={['Weather','green']}/>

    </div>
  )
}

export default App
