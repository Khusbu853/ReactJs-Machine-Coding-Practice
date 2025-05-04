import './App.css'
import Accordion from './component/Accordion/Accordion'
import ChipsInput from './component/ChipsInput'
import LikeButton from './component/LikeButton'
import { items } from './component/Accordion/data'
import GuessTheNumber from './component/Guess Number/GuessNumber'
import ProgressBar from './component/progressBar/ProgressBar'


function App() {

  return (
    <div>
      {/* <ChipsInput/> */}
      {/* <LikeButton/> */}
      {/* <Accordion items = {items}/> */}
      {/* <GuessTheNumber/> */}
      <ProgressBar/>
    </div>
  )
}

export default App
