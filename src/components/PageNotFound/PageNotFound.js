import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./PageNotFound.css"

const PageNotFound = () => {
    const history=useHistory()
    const goHome=()=>{
        history.push("/home")
    }
    return (
        <div className="not-found">
            
            <img  src="https://i.ibb.co/Y7thp4c/notfound.png" alt="" />
            <Button onClick={goHome} variant="success">Go to Home</Button>
            <h1 className="text-danger">Page Not Found</h1>
            
        </div>
    );
};

export default PageNotFound;