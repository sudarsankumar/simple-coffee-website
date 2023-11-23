import React, { useState } from 'react'
import './Coffee.css'
import Data from '../../../data/data.json'
import Individual from './Individual/Individual'

const Coffee = () => {
    const [all, setAll] = useState(true)
    const [avail, setAvail] = useState(false)
    const [isSelective, setIsSelective] = useState(false)
    function workAll(){
        setAll(true)
        setAvail(false)
        setIsSelective(false)
    }
    function workSelective(){
        setAll(false)
        setAvail(true)
        setIsSelective(true)
    }
    return (
        <div className="container">
            <div className="top">
                <div className="heading">
                    <div className="heading-text">
                        Our Collection
                    </div>
                </div>
                <div className="description">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</div>
            </div>
            <div className="middle">
                <div className={all ? 'mid-text active' : 'mid-text'} onClick={workAll}>All Products</div>
                <div className={avail ? 'mid-text active' : 'mid-text'} onClick={workSelective}>Availabe Now</div>
            </div>
            <div className="bottom">
                {
                    Data.map(data => {
                        return <Individual data={data} selective={isSelective} />
                    })
                }
            </div>
        </div>
    )
}

export default Coffee