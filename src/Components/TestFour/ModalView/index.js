import { useEffect, useState } from 'react'
import { getUsers } from '../../../apis/users'

const ModalView = ({ id }) => {
    const [data, setData] = useState({})

    useEffect = (() => {
        if (id) {
            getUsers(id)
                .then(res => {
                    setData(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [id])
    return (
        <div className='modal fade modal-view-user'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            ViewUsers
                        </h5>
                        <button
                            className='btn btn-secondary btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <div className='form-input'>
                            <p>Please enter the information</p>
                            <div className='mb-3'>
                                Email : {data.email}
                            </div>
                            <div className='mb-3'>
                                Password : {data.password}
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalView;