import { Welcome } from "./components/p1";
import { ProductCard } from "./components/p2";
import './App.css'
import lenovo from "./assets/lenovo_loq_rtx_4050.jpg"
function App() {
  
  return (
    <>
    <Welcome name ="SriHari"/>
    <ProductCard
    name="Lenovo LOQ 2024, Intel Core i5-13450HX, 13th Gen"
    price={125000}
    image={lenovo}
    />

    </>
  )
}

export default App
