import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const App = () => {

const [num, setNum] = useState(0);

const incNum = () => {
    setNum(num+1);
}

const decNum = () => {
    if (num > 0) {
    setNum(num-1);
    }
    else {
        alert('0 is the limit');
        setNum(0);
    }
}
return (
    <>
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="btn_div">

                    <button onClick={incNum}> <AddIcon /> </button>
                    <button onClick={decNum}> <RemoveIcon /> </button>
                </div>
            </div>
        </div>
    </>
)
}

export default App;