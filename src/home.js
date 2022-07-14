
import React, { Component } from 'react';
import Card from './card';

class Home extends Component {
    state = {  
        
    } 
    
    render() { 
        return (
            <div>
                <div className='container mt-5'>
                <div className='row'>
                <div className='col-md-4'><Card id={21} name={"sports"} brief={"Sports Quiz"} title={"Trivia Quiz on Sports from all around the world"} /></div>
                <div className='col-md-4'>
                <Card id={9} name={"General Knowledge"} brief={"General Knowledge Quiz"} title={"Trivia Quiz on General Knowledge from all around the world"}/>
                </div>
                <div className='col-md-4'><Card id={17} name={"Science & Nature"} brief={"Science & Nature Quiz"} title={"Trivia Quiz on Science & Nature from all around the world"} btn={"Launch Quiz"}/></div>
                </div>
                
            </div>
            </div>
        );
    }
}
 
export default Home;