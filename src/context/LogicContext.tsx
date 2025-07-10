import { createContext, useState } from "react";





interface LogicObject {
    reqType: string
    url: string,
    params: Array<Object>,
    headers: Array<Object>,
    body: string,
    response: string
}

interface LogicContextType {
    logic: any;
    setLogic: React.Dispatch<React.SetStateAction<LogicObject>>;
}

export const LogicContext = createContext<LogicContextType>({
  logic: {
    reqType: "GET",
    url: "",
    params: [],
    headers: [],
    body: "",
    response: ""
  },
    setLogic: () => { }
})



const LogicProvider = ({ children }: any) => {




    const [logic, setLogic] = useState<LogicObject>({
        reqType: "GET",
        url: "",
        params: [],
        headers: [],
        body: "",
        response: ""
    })

    const LogicValue = {
        logic,
        setLogic
    }

    return (
        <LogicContext.Provider value={LogicValue}>
            {children}
        </LogicContext.Provider>
    )
}


export default LogicProvider

