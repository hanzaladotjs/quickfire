import Output from "./Output"
import Param from "./Param"
import Request from "./Request"

const Body = () => {
    return (
        <div className="flex space-x-10">
            <div className="flex flex-col space-y-7">
                <Request/>
                <Param/>
            </div>
           <Output/>
        </div>
    )
}

export default Body