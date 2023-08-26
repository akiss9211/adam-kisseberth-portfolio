import React from 'react'
import Fade from 'react-reveal/Fade';
import './dndinventory.css';
import { useState, useEffect } from 'react';
import Card from './Card';
import Inventory from './Inventory';

function Projects() {
 //storing API JavaScript object data into a state managed array
  const [items, setItems] = useState([]);
 //storing selected inventory items in state managed array to be rendered
  const [inventory, setInventory] = useState([]);
 //state to hold and update current filter string from input
  const [filter, setfilter] = useState();
 //gets local storage inventory save and sets inventory state with data
 //by parsing into JS objects
 //checks to see if inventory save exists in local storage before retrieving
  useEffect(() => {
    const localInventory = localStorage.getItem('inventory-items');
    if (localInventory !== null) { 
      setInventory(JSON.parse(localInventory));
    }
  }, []);

 //sends inventory state data to local storage
  useEffect(() => {
    if(inventory.length) {
      localStorage.setItem('inventory-items', JSON.stringify(inventory))
    } else {
      localStorage.clear();
    }
  }, [inventory]);
 
 //API fetch to return items as JS objects in promises
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/equipment')
        // promise that returns json data into JavsScript Objects
        .then(res => res.json())
        // promise takes data and places it into state for direct access
        .then(resJson => {
          setItems(resJson.results)
        })
  }, []) 
 //passing props down to card and inventory child components with state data to be used
  return (
    <div className='project-container' id="projects">
      <Fade cascade>
        <div className='about-title-text'>
            <h1>PROJECTS</h1>
            <div className='about-line-break'/>
            <p>A sample of the apps I've developed</p>
        </div>
        <div className='proj-item-container'>
            <div className='proj-list-container'>
              <div className='proj-info-text'>
                <h1>D&D Inventory App</h1>
                <p>This app was created out of a fun project idea for my D&D group! It starts by fetching the equipment endpoint of the <b>https://www.dnd5eapi.co/</b> API. After the data is fetched, it is then saved to the items state by parsing the data into JSON objects. I store the value from the input box into a different piece of state, to be used as a filter, before mapping out which items need rendered into the search list. These items have a button that allow you to add them to the inventory, onClick, by mapping those objects along side a UUID and storing them in the inventory state. Everytime the inventory updates, the inventory state is saved into local storage so that your items persists through closing out the webpage and refreshing. The items have a button attatched to remove unwanted items by calling the filter method and filtering out the object with the specific UUID value passed to it by the button click. I still have plans to keep developing this app with other improvements as I have already made a list of features I would like to implement!</p>
              </div>
              <div className='component-container-invapp'>
                <Card items={items} setInventory={setInventory} inventory={inventory} filter={filter} setfilter={setfilter} />
                <Inventory inventory={inventory} setInventory={setInventory} />
              </div>
            </div>
        </div>
        <p className='coming-soon-text'>More Coming Soon!</p>
      </Fade>
    </div>
  )
}

export default Projects;