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
import Tabs from './component/tabsComponent/Tabs'
import PasswordStrength from './component/PasswordStrength'


function App() {

  const tabsData = [
    { title: "", content: "This is the content of Tab 1" },
    { title: "Tab 2", content: "This is the content of Tab 2" },
    { title: "Tab 3", content: "This is the content of Tab 3" }
  ];

  return (
    <div>
      {/* <ChipsInput/> */}
      {/* <LikeButton/> */}
      {/* <Accordion items = {items}/> */}
      {/* <GuessTheNumber/> */}
      {/* <ProgressBar/> */}
      {/* <ContactForm/> */}
      {/* <LoadingSkeleton/> */}
      {/* <Stopwatch/> */}
      {/* <Tabs tabs={tabsData}/> */}
      <PasswordStrength/>
    </div>
  )
}

export default App
