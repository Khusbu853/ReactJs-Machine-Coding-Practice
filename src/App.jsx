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
import ToastContainer from './component/toast/ToastContainer'
import ProgressBar2 from './component/progressBar2/ProgressBar2'
import Carousel from './component/cardCarousel/Carousel'


function App() {

  const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const tabsData = [
    { title: "", content: "This is the content of Tab 1" },
    { title: "Tab 2", content: "This is the content of Tab 2" },
    { title: "Tab 3", content: "This is the content of Tab 3" }
  ];

  const cards = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
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
      {/* <PasswordStrength/> */}
      {/* <ToastContainer/> */}
      {/* <h1>Progress Bar</h1>
      {bars.map((bar) => (
        <ProgressBar2 key={bar} progress={bar}/>
      ))} */}
      <Carousel cards={cards}/>
    </div>
  )
}

export default App
