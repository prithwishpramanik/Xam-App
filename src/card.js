import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import test from './Test';
class Card extends Component {
    state = {  } 
    render() { 
        return (
            <div class="card text-center">
  <div class="card-header">
   <h5> {this.props.name}</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">{this.props.brief}</h5>
    <p class="card-text">{this.props.title}</p>
    <Link to={"/test/"+this.props.id} class="btn btn-primary">Launch quiz</Link>
  </div>
  
</div>
        );
    }
}
 
export default Card;