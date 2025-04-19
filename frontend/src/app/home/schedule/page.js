import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import { Menu } from "@/components/Menu"
import axios from "axios";



export default async function Schedule() {
  let schedules = [];
  let error =null;

  try {
      const response = await axios.get('http://localhost:8080/api/schedules');
      schedules = response.data;
  } catch (err){
      error = err.message;
  }

  return (
    <div className='bg-gray-100'>
            <NavBar/>
            <Menu/>
            <div className='flex flex-col bg-white justify-center items-center h-screen w-screen'>
                <h1 className="grid center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-black">Danh sách đường đua</h1>
            </div>
            <Footer/>
        </div>
  )
}
