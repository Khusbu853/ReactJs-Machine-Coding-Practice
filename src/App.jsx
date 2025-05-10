import './App.css'
import Accordion from './component/Accordion/Accordion'
import ChipsInput from './component/ChipsInput'
import LikeButton from './component/LikeButton'
import { items } from './component/Accordion/data'
import GuessTheNumber from './component/Guess Number/GuessNumber'
import ProgressBar from './component/progressBar/ProgressBar'
import ContactForm from './component/contactform/ContactForm'
import LoadingSkeleton from './component/animatedLoadingSkeleton/LoadingSkeleton'
import Stopwatch from './component/StopWatch'


function App() {

  return (
    <div>
      {/* <ChipsInput/> */}
      {/* <LikeButton/> */}
      {/* <Accordion items = {items}/> */}
      {/* <GuessTheNumber/> */}
      {/* <ProgressBar/> */}
      {/* <ContactForm/> */}
      {/* <LoadingSkeleton/> */}
      <Stopwatch/>
    </div>
  )
}

export default App
