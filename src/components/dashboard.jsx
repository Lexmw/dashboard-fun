import React from "react";
import Hello from "./hello.jsx";
import Header from "./header";
import Sidemenu from "./sideMenu";
import ContentArea from "./content-area";

const Dashboard = () =>{

return(
    <div>
        <Hello />
        <Header />
        <Sidemenu />
        <ContentArea />
        
    </div>
)
}

export default Dashboard;