

export const Fire = async (logic: any, setLogic: any) => {


    const url = new URL(logic.url)

    logic.params.forEach((param: any) => {
        if (param.enabled) {
            url.searchParams.append(param.key, param.value)
        }
    })

    const objectHeader = logic.headers.reduce((acc: any, head: any) => {
        if (
            head.enabled &&
            typeof head.key === "string" &&
            typeof head.value === "string" &&
            head.key.trim() !== "" &&
            head.value.trim() !== ""
        )
            acc[head.key.trim()] = head.value.trim()
        return acc
    }, {})

    const response = await fetch(url, {
        method: logic.reqType,
        headers: objectHeader,
        body: logic.reqType !== "GET" && logic.body
  ? logic.body
  : undefined
    })

    const data = await response.json()



    setLogic((prev: any) => ({ ...prev, response: data }))

}