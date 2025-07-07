import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Navbar = () => {

    const { setTheme, theme } = useContext(ThemeContext)

    return (
        <div className={theme ? "  flex  px-15 justify-between  h-18 items-center  border-b-[4px]" : " flex  px-15 justify-between  h-18 items-center border-gray-400 border-b-[4px] " }>
            <div className=" space-x-2 flex items-center ">
                <div className= { theme ? "border-3 bg-black w-12 h-12 flex justify-center items-center transform hover:scale-105 transition-transform duration-200" :  "border-3 bg-emerald-400 w-12 h-12 flex justify-center items-center transform hover:scale-105 transition-transform duration-100"}>
                    {theme ? <svg width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="25px" height="25px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
                </div>
                <div className="flex flex-col font-bold text-2xl"><div>
                    QUICKFIRE
                </div>
                    <div className="text-sm font-semibold">
                        Postman for kids.
                    </div>
                </div>

                </div>
            <div className={theme ? "bg-black b w-13 h-12 flex justify-center border-3 items-center transform hover:scale-105 transition-transform duration-100 " : "bg-emerald-400 b w-13 h-12 flex justify-center border-3 items-center transform hover:scale-105 transition-transform duration-100 " }>
              <button onClick={() => theme ? setTheme(false) : setTheme(true)}>{!theme ? <svg width="25px" height="25px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>: <svg width="25px" height="25px" stroke-width="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>} </button></div>
        
        </div>
    )
}

export default Navbar