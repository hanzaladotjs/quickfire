"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
  
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogicContext } from "@/context/LogicContext"
import { useContext, useState } from "react"

export default function DropdownMenuRadioGroupDemo() {


    const {setLogic} = useContext(LogicContext)

    const [label, setLabel] = useState<string>("GET")
    
  
 

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
<button

  className={
    label == "GET"
      ? "bg-green-400 text-sm text-black w-30"
      : label == "POST"
      ? "bg-blue-400 text-sm text-black  w-30"
      : label == "PUT"
      ? "bg-yellow-400 text-sm text-black  w-30"
      : "bg-red-400 text-sm text-black  w-30"
  }
>
  {label}
</button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-20">

                <DropdownMenuGroup>

                    <DropdownMenuRadioItem value="get" className="bg-green-400 text-black" onClick={() => {setLabel("GET");   setLogic((prev) => ({ ...prev, reqType: "GET" }));} }>GET</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="post" className="bg-blue-400 text-black" onClick={() => {setLabel("POST");   setLogic((prev)=> ({ ...prev, reqType: "POST" })); }}>POST</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="put" className="bg-yellow-400 text-black" onClick={() => {setLabel("PUT");   setLogic((prev) => ({ ...prev, reqType: "PUT" }));}}> PUT</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="delete" className="bg-red-400 text-black" onClick={() =>{ setLabel("DELETE");   setLogic((prev) => ({ ...prev, reqType: "DELETE" }));}}> DELETE</DropdownMenuRadioItem>
                    

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
