import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { LogicContext } from "@/context/LogicContext"

const Output = () => {

    const {theme} = useContext(ThemeContext)
    const {logic} = useContext(LogicContext)
    return (
        <div className="border-4 border-gray-600 transform hover:scale-101 transition-transform duration-200 p-2 w-230 h-180 m-5 mr-20 mt-8 flex flex-col  space-y-8 font-proj justify-center">
            <div className="flex space-x-2 items-center">
               {theme ?<svg width="50px" height="50px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M13.5 6L10 18.5" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg> :<svg width="50px" height="50px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#57e389"><path d="M13.5 6L10 18.5" stroke="#57e389" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="#57e389" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="#57e389" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
                <div className="flex flex-col">
                    <h1 > OUTPUT</h1>
                    <h2 className="text-lg text-gray-500 "> RESPONSE DATA </h2>
                </div>
            </div>
            <div className="border-3 border-gray-400 w-190 mx-10 mb-5 h-full  text-sm  p-5 font-mono ">
{JSON.stringify(logic.response)}
            </div>
        </div>
    )
}

export default Output