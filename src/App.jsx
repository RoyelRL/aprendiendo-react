import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PresentationCard from './presentationcard'
import './App.css'
import Card from './Card'


function App() {
  /*const [count, setCount] = useState(0)
*/

  return (
    <div className="App">
    {/*<p>hola mundo{10 + 20}</p>*/}
      <PresentationCard/>
      <Card/>
     
    </div>
  )
}

export default App
