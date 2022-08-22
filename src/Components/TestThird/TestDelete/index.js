const TestDelete = ({items,deleteItem}) => {

    return (
        <div key={items}>
        <button onClick={() => {
            deleteItem(items)
             }}>
          Clear
          </button>
        </div>
    )
}
export default TestDelete;
