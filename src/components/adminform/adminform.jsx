import React, { useEffect, useState } from "react";
import './adminform.css';
import { Audio } from "react-loader-spinner";

const Adminform = () => {
    const [receivedData, setReceivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://carpartdata-default-rtdb.firebaseio.com/orders.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const receivedData = [];
            console.log(data);

            for (const key in data) {
                receivedData.push({
                    id: key,
                    orderedItems: data[key].orderedItems,
                    user: data[key].user,
                });
            }

            setReceivedData(receivedData);

            setIsLoading(false);

        }
        fetchData().catch((error) => {

        });
    }, []);

    const allData =
        receivedData.map((item) => (
            <div className="data-div">
            <div className="userData-div">
            <h3>CITY: {item.user.city}</h3>
                <h3>POSTAL CODE:{item.user.postal}</h3>
                <h3>STREET NUMBER:{item.user.street}</h3>
                <h3>NAME OF CLIENT:{item.user.name}</h3>
            </div>
                <div className="clientOrderData-div">
                <ul>
                <h3>ITEMS ORDERED</h3>
                            {item.orderedItems.map(item => {
                                return (
                                    <div className="perOrderedItems">
                                    <li className="item-name">{item.name}</li>
                                    <li>{item.price}</li>
                                    <li>Amount ordered: {item.amount}</li>
                                    </div>
                                )
                            }
                            )}
                        </ul>
                </div>


            </div>
        ))
    return (
        <div>
            <div className="adminMaindiv">
                <h2>NEW<span className="welcome-span">ORDERS</span> </h2>
                <h3>All customer orders are listed below. To create a new item for sale click on the open form to submit a new listing.
                    Specific customer order will come soon.</h3>
                <div className="ingridContainer">
                    {isLoading &&
                        <div className='centered'>
                            <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color='blue'
                                ariaLabel='three-dots-loading'
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                    }
                    {allData}

                    {/* {receivedData.forEach((user) => {
                        <div className="data-div">
                            <h3>CITY: {user.user.city}</h3>
                            <h3>POSTAL CODE:{user.user.postal}</h3>
                            <h3>STREET NUMBER:{user.user.street}</h3>
                            <h3>NAME OF CLIENT:{user.user.name}</h3>

                            {user.orderedItems.forEach((item) => {
                                <div>
                                    <h3>{item.name}</h3>
                                    <h3>{item.price}</h3>
                                    <h3>{item.amount}</h3>
                                </div>
                            })};
                        </div>
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default Adminform;