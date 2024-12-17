import Hero from "./Hero/hero"
import Card from "./components/card"
import Listing from "./components/Listings/Listing"
import Features from "./components/Features/Features"
import Signup from "./components/Signup/sign"
export default function Home(){
  return(
    <div className="bg-cover bg-center">
    <Hero/>
    <Card/>
    <Listing/>
    <Features/>
    <Signup/>
    </div>
  )
}