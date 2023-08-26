import React from "react"
// component to render items saved in inventory state passed down by props
// mapping it with a button and rendering the button and item name in JSX
// button to filter out the item with the corresponding UUID saved to in its value to remove it from the rendered inventory
function Inventory({ inventory, setInventory }) {
  return (
    <div className='inventory-container'>
        <h1 className='inv-h1'>Inventory</h1>
        <div className='inv-items-div'>
            {inventory.map(invItem => {
                return <div className='rendered-items'>
                    <div className='item-count-group'>
                      <button className='minus-count-button'value={invItem.uuid} onClick={(e) => setInventory(inventory.map(item => {
                        if(item.uuid === e.target.value && item.total > 1) {
                          return {...item, total: item.total - 1}
                        } else {
                          return item
                        }}))}>-</button>
                      <div className='item-counter'>{invItem.total}</div>
                      <button className='plus-count-button' value={invItem.uuid} onClick={(e) => setInventory(inventory.map(item => {
                        if(item.uuid === e.target.value) {
                          return {...item, total: item.total + 1}
                        } else {
                          return item
                        }}))}>+</button>
                    </div>
                    <div className='display-item'>{invItem.name}</div>
                    <button className='inv-button' value={invItem.uuid} onClick={(e) => setInventory(inventory.filter(item => item.uuid !== e.target.value))}>X</button>
                </div>
            })}
        </div>
    </div>
  )
}

export default Inventory