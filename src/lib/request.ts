

export const Fire = async(logic:any, setLogic: any) => {
    

    const url = new URL(logic.url)

    logic.params.forEach((param:any) => {
        if(param.enabled){
            url.searchParams.append(param.key, param.value)
        }
    })

    // const objectHeader = logic.headers.reduce((acc:any, head:any) => {
    //     acc[head.key] = head.value
    //     return acc
    // }, {})

    const response = await fetch(url,  {
        method: logic.reqType,
       
    })

    const data = await response.json()

    console.log("🔥 logic.reqType = ", logic.reqType);
console.log("🧾 typeof logic.reqType = ", typeof logic.reqType);


    setLogic((prev: any) => ({...prev, response: data}))

}