// Co 1 the input va the button Add
// Sau khi nhap vao input and click Add
// Gan gia tri vao bien va in ra man hinh
// And xoa du lieu cu trong input
import TestDelete from "./TestDelete"
import { useState } from "react"
const TestThird = () => {
    const [list, setList] = useState([{name : '', mssv :''}])
    const [value, setValue] = useState('')

    const onChange = (k) => {
        const newValue = k.target.value
        setValue(newValue)
    }

    const onCreate = () => {
        if (value !== '') {
            const unique = list.find((item) => {
                return item === value
            })
            if (!unique) {
                setList([
                    ...list,
                    value
                ])
                setValue('')
            }
        }

    }
    const deleteItem = (text) => {
        const newList = list.filter((k) => {
            return k !== text
        })
        setList(newList)
    }
    return (
        <div class="form-test">

            Input : <input style={{width : 200}} placeholder="input here " value={value} onChange={onChange} />
            <button onClick={onCreate}>Add</button>
            {list.map((item) => {
                return (
                    <div key={item}>
                        {item}
                        <TestDelete items={item} deleteItem={deleteItem} onChange={onChange} />
                    </div>
                )
            })}
            <br />

        </div>
    )
}
export default TestThird