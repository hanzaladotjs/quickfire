import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import DropdownMenuRadioGroupDemo from "./ui/radiogroup"
import { LogicContext } from "@/context/LogicContext"
import { Fire } from "@/lib/request"


const Request = () => {

    const { theme } = useContext(ThemeContext)
    const {setLogic, logic} = useContext(LogicContext)
    return (

        <div className="border-4 border-gray-600 py-2 md:w-170 w-80 ml-25 mt-8 transform hover:scale-105 transition-transform duration-200">

            <div className="flex mt-5 mx-10 space-x-5 h-17">
                {/* <select className="bg-gray-300 text-black w-30 text-xl text-center">
                    <option value="get" >GET</option>
                    <option value="post" >POST</option>
                    <option value="put">PUT</option>
                    <option value="delete" >DELETE</option></select> */}
                  <DropdownMenuRadioGroupDemo/>
                <input type="text" value={logic.url} onChange={(e) => setLogic((prev) => ({...prev, url: e.target.value}))} placeholder="https://api.example.com/endpoint" className={theme ? "border-3 text-lg pl-1 placeholder-sm w-120 border-gray-400 font-mono hover:border-black focus:outline-none focus:ring-0"
                    : "border-3 w-130 border-gray-400 hover:border-emerald-400 focus:outline-none placeholder-gray-600 pl-1 text-lg font-mono focus:ring-0"} />
            </div>

            <button onClick={() => {
              if( !logic.url ){return}Fire(logic, setLogic)}}className="bg-gray-700 text-gray-400 py-4 my-3 mx-10 w-150 transform hover:scale-105 transition-transform duration-100 flex space-x-2 justify-center items-center">
          <svg width="29px" height="29px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#c0bfbc" stroke-width="1.9"><rect x="16" y="3" width="5" height="18" rx="2" fill="#c0bfbc"></rect><rect x="9.5" y="9" width="5" height="12" rx="2" fill="#c0bfbc"></rect><rect x="3" y="16" width="5" height="5" rx="2" fill="#c0bfbc"></rect></svg> <p> FIRE REQUEST </p></button>
        </div>
    )
}

export default Request