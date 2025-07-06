import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


const Request = () => {

    const { theme } = useContext(ThemeContext)
    return (

        <div className="border-3 py-2 w-170 ml-25 mt-5">

            <div className="flex mt-5 mx-10 space-x-5 h-17">
                <select className="bg-gray-300 text-black w-37 text-xl text-center">
                    <option value="get" >GET</option>
                    <option value="post" >POST</option>
                    <option value="put">PUT</option>
                    <option value="delete" >DELETE</option></select>
                <input type="text" placeholder="https://api.example.com/endpoint" className={theme ? "border-3 text-lg pl-1 placeholder-sm w-120 border-gray-400 font-mono hover:border-black focus:outline-none focus:ring-0"
                    : "border-3 w-120 border-gray-400 hover:border-emerald-400 focus:outline-none placeholder-gray-600 pl-1 text-lg font-mono focus:ring-0"} />

            </div>

            <button className="bg-gray-700 text-gray-400 py-4 my-3 mx-10 w-150 transform hover:scale-105 transition-transform duration-100"> FIRE REQUEST </button>
        </div>
    )
}

export default Request