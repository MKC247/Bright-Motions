import React, { Fragment } from "react";
import AdminInput from "./adminInput/adminInput";
import Adminform from "./adminform/adminform";

const Adminpage = () => {
    return (
        <Fragment>
        <div className="adminform">
        <AdminInput />
        <Adminform />
        </div>
        </Fragment>
    )
}
export default Adminpage;