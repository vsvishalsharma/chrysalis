import Header from "@/components/Header"
import  Slider  from "@/components/Slider"
import Plans from "@/components/Plans"
import Productivity from "@/components/Productivity"
export default function Home() {
  return (
    <main className="">
      <Header/>
      <Productivity/>
      <Slider/>
      <Plans/>
    </main>
    
  )
}
