import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import './style.css'

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    if (!items || items.length === 0) {
        return <p>No items available</p>
    }

    return (
        <>
        <h1>Accordion</h1>
        <div className='accordion'>
            {items.map((item, index) => (
                <div className='accordion-item'
                    onClick={() => handleClick(index)}
                    key={index}
                >
                    <button className='accordion-title'>
                        {item.title}

                        {activeIndex === index ? 
                            <FaChevronUp style={{ float: 'right' }} /> : <FaChevronDown style={{ float: 'right' }}/>
                        }
                    </button>
                    {activeIndex === index && (
                        <div className='accordion-content'>
                            <p>{item.content}</p>
                        </div>
                    )}
                   
                </div>
            ))}

        </div>
        </>
    );
}

export default Accordion;