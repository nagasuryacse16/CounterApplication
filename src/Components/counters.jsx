import React, { Component } from 'react';
import CountComponent from './countComponent';
import Button from 'react-bootstrap/Button';

 class counters extends Component {
      
    render() { 
        return (
            <div>
              
                <Button onClick={this.props.onReset} variant="primary m-2">Reset</Button>
            {
                this.props.counters.map(count => (
                <CountComponent 
                    key={count.id}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
                    count={count}/>
                ))
            }
            </div>    
        );
    }
 }
  
 export default counters;