import React, { useState } from "react";
import './adminInput.css';

const AdminInput = () => {
    const [price, setPrice] = useState('');
    const [partName, setPartName] = useState('');
    const [partDescription, setPartDescription] = useState('');
    const [formIsOpen, setFormIsOpen] = useState(false);


    const openForm = () => {
        setFormIsOpen(true);
    };
    const closeForm = () => {
        setFormIsOpen(false);
    };


    const submitNewPartData = async() =>{
        await fetch('https://carpartdata-default-rtdb.firebaseio.com/alldata.json', 
        {
            method: 'POST',
            body: JSON.stringify({
                description: partDescription,
                name: partName,
                price: +price,
            }),
        });
    }


    const startingHeader = 
    <div>
    <div>
        <div> <button className="back-to-site-button"><a href="/library">BACK TO SITE</a></button>
         </div>
        <div>
        <h2><span className="welcome-span">WELCOME</span> TO THE ADMIN SITE </h2>
        <h3>
           Create a new order for clients. Simply click on the Open Form button to open form and fill in the customer details.
        </h3>
        </div>
    </div>

    </div>
    return (
        <div>
        <div className="adminFormlisting">
            {startingHeader}


           <div className="adminChild">
            {!formIsOpen && (
                <button className="openForm" onClick={openForm}>
                OPEN FORM
                </button>
            )}
            {formIsOpen && (
                <form className="adminInputform">
                <h3>CREATE A NEW ITEM FOR SALE</h3>
                    <div className="adminform12">
                        <label>Enter Item Name</label>
                        <input onChange={(e)=>setPartName(e.target.value)} type="text" placeholder="Enter Item Name" />
                    </div>
                    <div className="adminform12">
                        <label>Enter Item Description</label>
                        <input onChange={(e)=>setPartDescription(e.target.value)} type="text" placeholder="Enter Item Description" />
                    </div>
                    <div className="adminform12">
                        <label>Enter Item Price</label>
                        <input onChange={e=>setPrice(e.target.value)} type="number" placeholder="Enter Item Price" />
                    </div>
                    <div className="adminButton">
                    <button className="openForm" onClick={closeForm} type="button">CLOSE</button>
                    <button onClick={submitNewPartData} className="openForm close">SUBMIT</button>
                    </div>
                </form>
            )}
            </div>
            </div>

        </div>
    )

};
export default AdminInput;