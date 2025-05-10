import React, { useState } from 'react';
import './style.css'

function Tabs({ tabs }) {
    const [tabId, setTabId] = useState(0)

    if (tabs.length === 0) {
        return <div>No tabs available</div>
    }
    return (
        <div>
        <div className='tab-container'>
            {/* Implement the Tabs component logic here */}
            {tabs.map((tab, index) => (
                <div className='title'
                    style={{borderBottom: index === tabId ? '1px solid blue' : 'none'}}
                    onClick={() => setTabId(index)}>{tab.title || `Tab ${index + 1}`}</div>
            ))}
            </div>
            <div>
            <div className='content'>{tabs[tabId]?.content || 'No content available.'}</div>
            </div>
        </div>
    );
}

export default Tabs;