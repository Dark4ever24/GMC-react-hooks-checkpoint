import React from 'react'
import { Form } from "react-bootstrap";

function FilterbyName({inputSearch}) {
    return (
        <div>
         <Form.Control
        type="text"
        placeholder="search"
        onChange={(event) =>inputSearch(event.target.value)}/>  
        </div>
    )
}

export default FilterbyName

