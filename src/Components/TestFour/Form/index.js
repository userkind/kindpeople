import '../Form/styleform.css'
import { useMemo } from 'react'
const Form = ({ formData, onChange, onSubmit }) => {
    const disabled = useMemo(() => {
        return formData.email === '' || formData.password === ''
    }, [formData])
    return (
        <div className='modal fade modal-form-user'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>NancyLe Inc.</h5>
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
                                <label
                                    htmlFor='form-email'
                                    className='form-label'>
                                    Your email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='form-email'
                                    className='form-control'
                                    placeholder='Your email...'
                                    value={formData.email}
                                    onChange={onChange} />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='form-password'
                                    className='form-label'>
                                    Your password
                                </label>
                                <input type='password'
                                    name='password'
                                    id='form-password'
                                    className='form-control'
                                    value={formData.password}
                                    placeholder='Your password...'
                                    onChange={onChange} />
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                        >Cancel
                        </button>
                        <button
                            className='btn btn-secondary'
                            disabled={disabled}
                            onClick={onSubmit}>{formData.id ? 'Reset' : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;