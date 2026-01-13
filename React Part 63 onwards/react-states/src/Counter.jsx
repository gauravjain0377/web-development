import{ useState } from "react";


//useStte Method
export default function Counter() {
let [count, setCount] = useState(0);    // initialization

    let incCount = () => {
        setCount(count+1);
        count = count + 1;
        console.log(count);
    }
    
    // let count = 0;

    // function incCount() {
    //     count +=1;
    //     console.log(count);
    // }

    return (
        <div>
            <h3 >Count = {count}  </h3>
            <button onClick={incCount}> Increase Count </button>
        </div>
    );
}