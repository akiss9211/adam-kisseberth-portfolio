import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsArrowBarDown } from 'react-icons/bs';

function Card({ items, setInventory, inventory, filter, setfilter }) {
    const downarrow = <BsArrowBarDown id="down-arrow"/>
    //add items to inventory state making sure to not overide previous state by using the spread operator 
    const updateInventory = (invItem) => {
            setInventory([
                ...inventory, 
                {
                    uuid: uuidv4(),
                    name: invItem,
                }
            ]);
    }

  return (
    // Input detects change of state with onChange and checks to make sure input isnt empty.
    // If empty it sets filtered state to null so nothing is rendered.
    // If it contains characters its held in state and passed to the rendering method
    // as a parameter for .includes() to filter through the API item index names.
    // only rendering by mapping out index names that include the current value of the input text
    <div className='card-container'>
        <div className='search-container'>
            <div className='inputs-container'>
                <h1 className='search-h1'>Search Items</h1>
                <input className='input-box' placeholder={'Type to search...'} type="text" 
                value={filter} onChange={(e) => {e.target.value==='' ? setfilter(null):setfilter(e.target.value.toLowerCase())}}></input>
            </div>
            <div className='show-all-items-button' onClick={(e) => {
                let arrow = document.getElementById('down-arrow')
                if(filter === null){
                    setfilter('');
                    arrow.style.transform="scaleY(-1)";
                } else {
                    setfilter(null);
                    arrow.style.transform="scaleY(1)";
                }
                }}>{downarrow}</div> 
            <div className='search-area'>
                {items.filter(item => item.index.includes(filter)).map(myItem => {
                    //When the card is rendered we set the value of the button to the current myItem.name being mapped
                    // so that we can update the items in the inventory state
                return  <div className='cards'>
                            <div className='search-item-name'>{myItem.name}</div>
                            <button className='add-item' value={myItem.name} type="submit" onClick={(e) => updateInventory(e.target.value)}>Add</button>
                        </div>
                
                })}
            </div>
        </div>
    </div>
  )
}

export default Card