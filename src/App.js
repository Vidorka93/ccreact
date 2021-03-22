import './App.css'
import LoadingMask from './component/load';
import Subscription from './component/subscription'
import Hotel from './component/hotel'


const App = () => {


  return (
    <div className="App">
      <h1>Hotels</h1>
      <Subscription/>
      <LoadingMask/>
      <Hotel/>
    </div>
  )
}

export default App
