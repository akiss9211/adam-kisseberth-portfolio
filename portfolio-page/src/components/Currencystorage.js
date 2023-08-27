import React from 'react'
import './dndinventory.css';
import { useState } from 'react';

function Currencystorage({currency, setCurrency}) {
    const [platCoins, addPlatCoins] = useState(0);
    const [goldCoins, addGoldCoins] = useState(0);
    const [silverCoins, addSilverCoins] = useState(0);
    const [copperCoins, addCopperCoins] = useState(0);
    
    const updateCoins = (type, nums) => {
        if(parseInt(nums) >= 1){
            if(type === "plat"){
                setCurrency({ platinum: currency.platinum+nums, gold: currency.gold, silver: currency.silver, copper: currency.copper})
            } else if(type === "gold") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold+nums, silver: currency.silver, copper: currency.copper})
            } else if(type === "silver") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold, silver: currency.silver+nums, copper: currency.copper})
            } else if(type === "copper") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold, silver: currency.silver, copper: currency.copper+nums })
            }
        }
    }
    const reduceCoins = (type, nums) => {
        if(parseInt(nums) >= 1){
            if(type === "plat"){
                setCurrency({ platinum: currency.platinum-nums, gold: currency.gold, silver: currency.silver, copper: currency.copper})
            } else if(type === "gold") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold-nums, silver: currency.silver, copper: currency.copper})
            } else if(type === "silver") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold, silver: currency.silver-nums, copper: currency.copper})
            } else if(type === "copper") {
                setCurrency({ platinum: currency.platinum, gold: currency.gold, silver: currency.silver, copper: currency.copper-nums })
            }
        }
    }
  return (
    <div className='currency-inv-container'>
        <h1 className='inventory-title-text'>D&D Inventory</h1>
        <div className='all-currencies'>
            <h3 className='sub-headings'>Currency</h3>
            <div className='currencies'>
                <div className='coin-container'>
                    <h5 className='plat-text'>Platinum</h5>
                    <div className='currency-box'>
                        <div>
                            {currency.platinum}
                        </div>
                        <div>
                            <button className='sub-coins-button' value={currency.platinum} onClick={(e) => reduceCoins("plat", parseInt(platCoins))}>-</button>
                            <input className='currency-input' value={platCoins} type="text" placeholder={0} onChange={(e) => addPlatCoins(e.target.value)}></input>
                            <button className='add-coins-button'  value={currency.platinum} onClick={(e) => updateCoins("plat", parseInt(platCoins))}>+</button>
                        </div>
                    </div>
                </div>
                <div className='coin-container'>
                    <h5 className='gold-text'>Gold</h5>
                    <div className='currency-box'>
                        <div>
                            {currency.gold}
                        </div>
                        <div>
                            <button className='sub-coins-button' value={currency.gold} onClick={(e) => reduceCoins("gold", parseInt(goldCoins))}>-</button>
                            <input className='currency-input' value={goldCoins} type="text" placeholder={0} onChange={(e) => addGoldCoins(e.target.value)}></input>
                            <button className='add-coins-button' value={currency.gold} onClick={(e) => updateCoins("gold", parseInt(goldCoins))}>+</button >
                        </div>
                    </div>
                </div>
                <div className='coin-container'>
                    <h5 className='silver-text'>Silver</h5>
                    <div className='currency-box'>
                        <div>
                            {currency.silver}
                        </div>
                        <div>
                            <button className='sub-coins-button' value={currency.silver} onClick={(e) => reduceCoins("silver", parseInt(silverCoins))}>-</button>
                            <input className='currency-input' value={silverCoins} type="text" placeholder={0} onChange={(e) => addSilverCoins(e.target.value)}></input>
                            <button className='add-coins-button' value={currency.silver} onClick={(e) => updateCoins("silver", parseInt(silverCoins))}>+</button>
                        </div>
                    </div>
                </div>
                <div className='coin-container'>
                    <h5 className='copper-text'>Copper</h5>
                    <div className='currency-box'>
                        <div>
                            {currency.copper}
                        </div>
                        <div>
                            <button className='sub-coins-button' value={currency.copper} onClick={(e) => reduceCoins("copper", parseInt(copperCoins))}>-</button>
                            <input className='currency-input' value={copperCoins} type="text" placeholder={0} onChange={(e) => addCopperCoins(e.target.value)}></input>
                            <button className='add-coins-button' value={currency.copper} onClick={(e) => updateCoins("copper", parseInt(copperCoins))}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Currencystorage