import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Param = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="border-3 ml-25 ">
            <div className="flex space-x-5 mx-10 text-black h-14 my-5 justify-center text-2xl ">
                <button className="bg-gray-300 w-45 flex space-x-2 justify-center items-center" >
                    <svg width="25px" height="25px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p> PARAMS</p>
                </button>
                <button className="bg-gray-300 w-50 flex space-x-2 justify-center items-center">
                    <svg width="25px" height="25px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 15.5H21.3704" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 8.5H21.3704" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>HEADERS</p>
                </button>
                <button className="bg-gray-300 w-45 flex space-x-2 justify-center items-center" >
                    <svg width="25px" height="25px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p> BODY</p>
                </button>
            </div>
            <div className="justify-center">
                <button className={theme ? "  transform hover:scale-105 transition-transform duration-200 mx-10 w-150 h-15 border-2 border-dashed border-black mb-5" : "  transform hover:scale-105 transition-transform duration-200 mx-10 w-150 h-15 border-2 border-dashed border-emerald-400 mb-5"}>
                    ADD PARAMETER
                </button>
            </div>
        </div>
    )
}

export default Param