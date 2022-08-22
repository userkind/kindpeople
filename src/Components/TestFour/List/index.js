import './stylelist.css'
const List = ({ list, deleteItem, editItem,onView }) => {
    return (
        <div className='row'>
            {list.map((item) => {
                return (
                    <div key={item.id}
                        className='col-4'>
                        <div className='user'>
                            <main className='user-main'>
                                <h6>Email :   {item.email}</h6>
                                <div>Password : {item.password}</div>
                            </main>
                            <footer className='user-footer'>

                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => {
                                        onView(item.id)
                                    }}>
                                    View
                                </button>

                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => {
                                        deleteItem(item.id)
                                    }}>
                                    Clear
                                </button>

                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => {
                                        editItem(item)
                                    }}> 
                                    Edit
                                </button>

                            </footer>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default List;