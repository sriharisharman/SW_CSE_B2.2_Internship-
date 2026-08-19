import { Welcome } from "./components/p1";
import { ProductCard } from "./components/p2";
import './App.css'
import ButtonDemo from "./components/P3";
import lenovo from "./assets/lenovo_loq_rtx_4050.jpg"
import Counter from "./components/StateExampleOne";
import ToggleText from "./components/StateExampleTwo";
import NameInput from "./components/StateExampleThree";
function App() {
  
  return (
    <>
    <NameInput />
    <Counter/>
    <ToggleText/>
    <Welcome name ="SriHari"/>
    <ButtonDemo />
    <ProductCard
    // name="Lenovo LOQ 2024, Intel Core i5-13450HX, 13th Gen"
    price={125000}
    image={lenovo}
    />

    </>
  )
}

export default App
