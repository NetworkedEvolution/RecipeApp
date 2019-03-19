import React, { Component } from 'react';


class Response extends Component{
    constructor(props) {
        super(props);
        this.state = {
            food:"",
            data : null
        }
    }
    
    
    render(){
        return(
            <div id="response-container">


                        
                        <div className="response-IMG"><img src={this.props.food}></img><div className="response">{this.props.label}</div></div> 
                
                        <div className="response-IMG"> <img src={this.props.food2}></img><div className="response">{this.props.label2}</div> </div> 
                    
                        <div className="response-IMG"> <img src={this.props.food3}></img><div className="response">{this.props.label3}</div> </div> 
                        <div className="response-IMG"> <img src={this.props.food4}></img><div className="response">{this.props.label4}</div> </div> 

                        <div className="response-IMG"><img src={this.props.food5}></img><div className="response">{this.props.label5}</div></div> 

                        <div className="response-IMG"> <img src={this.props.food6}></img><div className="response">{this.props.label6}</div> </div> 
                        <div className="response-IMG"> <img src={this.props.food7}></img><div className="response">{this.props.label7}</div> </div> 
                        <div className="response-IMG"> <img src={this.props.food8}></img><div className="response">{this.props.label8}</div> </div>
                        <div className="response-IMG"> <img src={this.props.food9}></img><div className="response">{this.props.label9}</div> </div>

            </div>
        )
    }
}

export default Response;