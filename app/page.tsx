import Booking from "@/components/Booking/Booking";
import Map from "@/components/Map/Map";

export default function Home() {
  return (
   <div>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5">
        <div>
          < Booking/>
        </div>
        <div className="order-first md:order-last">
          < Map/>
        </div>
      </div>
    </div>
    
   </div>
  )
}
