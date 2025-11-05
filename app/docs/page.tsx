import { Navbar } from "@/components/Navbar/Navbar"
import { Footer } from "@/components/Footer/Footer"
import { Documentation } from "@/components/Documentation/Documentation"

export default function Docs () {
    return (
      <div>
           <Navbar/>
           <Documentation/>
           <Footer/>
      </div> 
    )
}