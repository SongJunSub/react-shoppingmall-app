import {useState, useTransition} from "react";

const arrayPerformanceTest = new Array(10000).fill(0);

const UseTransition = () => {

    const [name, setName] = useState("");
    const [isPending, startTransition] = useTransition();

    return (
        <div>
            <input onChange={(e) => {
                startTransition(() => {
                    setName(e.target.value);
                })
            }}/>
            <br/>
            {
                isPending ? "Loading..." :
                arrayPerformanceTest.map(() => {
                    return <div>{name}</div>
                })
            }
        </div>
    )

}

export default UseTransition;