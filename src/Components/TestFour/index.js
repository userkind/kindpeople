// Xây dụng 1 object 
// Form để nhập Name , MSSV
import { useState, useMemo } from 'react'
import './style.css'
import Form from './Form'
import List from './List'
import { createUsers, getUsers, editUsers, deleteUsers } from '../../apis/users'
import ModalView from './ModalView'
// neu chua nhap gi cho button create | edit se bi disabled di
// sau khi click submit thi ktr trung nhau
// ktr trung cho create , edit

const DEFAULT_FORM_DATA = { email: '', password: '' }


const TestFour = () => {

    const [formData, setFormData] = useState(DEFAULT_FORM_DATA)
    const [selectedId, setSelectedId] = useState()
    const [list, setList] = useState([])
    // const [resultList, setResultList] = useState([])
    const [search, setSearch] = useState('')
    const fetchData = () => {
        setIsloading(true)
        getUsers()
            .then(response => {
                setList(response.data)
                    setIsloading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const [error,setError]= useState(false)
    // useEffect(() => {
    //     if (search) {
    //         const newResultList = list.filter(item => {
    //             return item.name.includes(search) || item.email.includes(search)
    //         })
    //         setResultList(newResultList)
    //     } else {
    //         setResultList(list)
    //     }
    // }, [search, list])

    const [isLoading,setIsloading]=useState()
    const resultList = useMemo(() => {
        if (search) {
            const newResultList = list.filter(item => {
                return item.email.includes(search) || item.password.includes(search)
            })
            return newResultList
        }
        return list

    }, [search, list])
    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const deleteItem = (id) => {
        deleteUsers(id)
            .then((response) => {
                fetchData()
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const myModalshow = () => {
        const element = document.querySelector('.modal-form-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show()
    }
    const onSubmit = () => {
        //Create
        if (!formData.id) {
            createUsers(formData)
                .then((response) => {
                    fetchData()
                    setFormData(DEFAULT_FORM_DATA)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        // Edit
        if (formData.id) {
            editUsers(formData.id, formData)
                .then((response) => {
                    fetchData()
                    setFormData(DEFAULT_FORM_DATA)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        if (formData.id) {
            deleteUsers(formData.id, formData)
                .then((response) => {
                    fetchData()
                    setFormData(DEFAULT_FORM_DATA)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    const onCreate = () => {
        setFormData(DEFAULT_FORM_DATA)
        myModalshow();
    }
    const editItem = (data) => {
        setFormData(data)
        myModalshow();
    }
    const onView = (id) => {
        setSelectedId(id)
        const element = document.querySelector('.modal-view-user')
        const modal = window.bootstrap.Modal.getOrCreateInstance(element)
        modal.show()
    }
    const onSearch = (e) => {
        const value = e.target.value
        setSearch(value)
    }
  
    return (
        <div className='form-test'>
            <header className='header row'>
                <h2 className='col'>
                    <span
                        style={{ color: 'lightpink' }}>
                        NancyLe
                    </span>
                </h2>
                <div className='col-4'>
                    <input
                        className='form-control'
                        value={search}
                        onChange={onSearch}
                        placeholder='Search...'
                    />
                </div>
                <div className='col-2'>
                    <button
                        type='button'
                        className='btn btn-outline-secondary'
                        onClick={onCreate}
                    >...Continue login
                    </button><br /><br />
                </div>

                {isLoading && (
                    <div className='spinner-border' role='status'>
                        <span className='visually-hidden'>Loading..</span>
                    </div>
                )}
                {!isLoading && (
                    <div>
                        {resultList.length === 0 && <div>No data found </div>}
                        <List
                            onView={onView}
                            list={resultList}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                    </div>
                )}
                <Form
                    formData={formData}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />

                <ModalView
                    id={selectedId}
                />
            </header>
        </div>
    )
}
export default TestFour;