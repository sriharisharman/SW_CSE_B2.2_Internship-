import { Welcome } from "./components/p1";
import Greet from "./components/p2";
import { Favmovie } from "./components/p3";
function App() {

  return (
    <div>
    <h1>Hello My First React App</h1>
    <Welcome/>
    <Greet />
    <p>Return should only return one parent tag. Within a single parent atg there can be n number of tags.</p>
    <Favmovie/>
    </div>
  )
}

export default App
