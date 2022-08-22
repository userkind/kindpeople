


const TestList = ({ userlist, onDelete }) => {
    return (
        <div key={userlist.id}>
            <div>{userlist.name}</div>
            <div>{userlist.phone}</div>
            <div>{userlist.mssv}</div>
            <button onClick={() => {
                onDelete(userlist.id)
            }}>
                HIDE
            </button>
        </div>
    )
}
export default TestList;