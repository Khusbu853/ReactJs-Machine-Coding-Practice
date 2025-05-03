import './App.css'
import Accordion from './component/Accordion/Accordion'
import ChipsInput from './component/ChipsInput'
import LikeButton from './component/LikeButton'
import { items } from './component/Accordion/data'


function App() {

  return (
    <div>
      {/* <ChipsInput/> */}
      {/* <LikeButton/> */}
      <Accordion items = {items}/>
    </div>
  )
}

export default App
