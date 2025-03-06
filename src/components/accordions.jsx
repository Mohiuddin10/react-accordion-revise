import { useState } from "react"
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    console.log(enableMultiSelection);



    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }
    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId)



        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        // else cpyMultiple.splice(findIndexOfCurrentId, 1)
        else {
            cpyMultiple = cpyMultiple.filter(item => getCurrentId !== item)
        }
        setMultiple(cpyMultiple)

    }
    console.log(selected, multiple)

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.qus}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                                <div className="content">{dataItem.ans}</div>
                                : null
                        }
                    </div>)
                    : <div className="">No data found</div>
            }
        </div>

    </div>
}