import React, { useState } from 'react';

const NameComponent = () => {
    const [name, setName] = useState('')
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <h1>Enter Name</h1>
            <div className="card">
                <input name='inputName' onChange={handleNameChange} value={name} />
                {name && (<h3 className='logo'> Hi {name} </h3>)}
            </div>
        </>
    );
};

export default NameComponent;