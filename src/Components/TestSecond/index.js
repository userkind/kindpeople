import { useState } from 'react';
import TestList from './TestList'

const TestSecond = () => {
    const [list, setList] = useState([])

    const onCreate = () => {
        setList([
            ...list,
            {
                id: Math.random(),
                name: 'Tên : Nguyễn Anh Khoa ',
                phone: 'SĐT : 0935769312',
                mssv: 'MSSV : 21DH112580'
            }
        ])
    }
    
    const onDelete = (id) => {
        const newList = list.filter((a) => {
            return a.id !== id
        })
        setList(newList)
    }
    return (
        <div>
            <p >THÔNG TIN CÁ NHÂN</p>
            {list.map((use) => {
                return (
                    <TestList
                        key={use.id}
                        userlist={use}
                        onDelete={onDelete}
                    />
                )
            })}
            <button onClick={onCreate}>
                SHOW
            </button>
        </div>
    )
}

export default TestSecond;