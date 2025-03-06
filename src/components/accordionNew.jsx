import { useState } from "react";
import data from "./data";

export default function AccordianNew() {
    const [selected, setSelected] = useState(null);
    const [multipleSelection, setMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    const handleSelect = (id) => {
        setSelected(selected !== id ? id : null)
    }

    const hangleMultipleSelection = (id) => {
        let copyMultiple = [...multiple];
        const isExist = copyMultiple.indexOf(id)
        isExist === -1 ?
            copyMultiple.push(id)
            : copyMultiple = copyMultiple.filter(item => id !== item)
        setMultiple(copyMultiple)

    }
    console.log(multiple);

    return <div className="wrapper">
        <button onClick={() => setMultipleSelection(!multipleSelection)}>{multipleSelection ? "Disable Multiple Selection" : "Enable Multiple Selection"}</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div className="title" onClick={multipleSelection ? () => hangleMultipleSelection(dataItem.id) : () => handleSelect(dataItem.id)}>
                            <h3>{dataItem.qus}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="">{dataItem.ans}</div> : null
                        }
                    </div>)

                    : <div className="">No data found</div>
            }

        </div>
    </div>
}