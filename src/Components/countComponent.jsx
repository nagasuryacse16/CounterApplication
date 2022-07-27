import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class countComponent extends Component {
     
    formatCount=()=>{
        const {value} = this.props.count;
        return value === 0 ? 'Zero' : value; 
    }
    
    render() { 
        const classes= this.props.count.value === 0 ? "warning" : "primary";
        return (
            <div> 
                <span><Badge bg={classes}>{this.formatCount()}</Badge></span>
                <Button onClick={()=>this.props.onIncrement(this.props.count)} variant="secondary m-2">Increment</Button>
                <Button onClick={()=>this.props.onDelete(this.props.count.id)} variant="danger m-2">Delete</Button>
            </div>
        );
    }
}
 
export default countComponent;