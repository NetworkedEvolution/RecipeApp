import React, { Component } from 'react';

class Header extends Component{

    constructor(props){
        super(props)

        this.state = {
            show:false,
            hide:true
        }
    }

    

    render(){
       
        return(
            <div id="header">
                 <h1 className="title">Food & Drink Search</h1>
                        <div id="search-field">
                        <div onClick={this.props.showModal} id="help-button">Help</div>
                        <input onKeyUp={this.props.onsubmit} onChange={this.props.onFoodChange}  className="input2"   type="text"  id="food-input" placeholder="Ex: Hot Wings or Vodka" name="Food" />
                        <button type="button" id="submit-btn" className="submit-button wow fadeInDownBig" data-wow-delay="1.5s" onClick={this.props.searchRecipes}>Submit</button>
                        </div>
            </div>
            
        )
        
    }
}

export default Header;