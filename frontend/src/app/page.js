import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";

export default function Home() {
  
  return (
    <div className='bg-gray-100'>
            <NavBar/>
            <Menu/>
            <div className='flex flex-col bg-white justify-center items-center bg-black '>
                <div className="flex flex-col bg-red-800 w-screen" >
                  <div className="flex flex-col bg-white h-200 w-80vw mx-5 my-10 rounded-lg">
                      <img src="/images/f1img.jpg" className="h-200 w-screen rounded-lg"/>
                  </div>

                  <div className="flex items-center justify-between bg-gray-100 h-70 w-80vw mx-5 my-1 space-x-2 px-5 rounded-lg">

                    <button className="flex flex-col items-center align-center cursor-pointer rounded-lg hover:scale-95">
                      <img src="images/f1img.jpg" className="h-60 rounded-lg"/>
                    </button>
                    <button className="flex flex-col items-center align-center cursor-pointer rounded-lg hover:scale-95">
                      <img src="images/f1img.jpg" className="h-60 rounded-lg"/>
                    </button>
                    <button className="flex flex-col items-center align-center cursor-pointer rounded-lg hover:scale-95">
                      <img src="images/f1img.jpg" className="h-60 rounded-lg"/>
                    </button>
                    <button className="flex flex-col items-center align-center cursor-pointer rounded-lg hover:scale-95">
                      <img src="images/f1img.jpg" className="h-60 rounded-lg"/>
                    </button>
                  </div>

                  <div className="flex h-90 bg-gray-200 my-10 mx-5 rounded-lg">
                    <img src="images/f1img.jpg" className="rounded-lg"/>
                  </div>
                </div>
            </div>
            <Footer/>
        </div>
  );
}
