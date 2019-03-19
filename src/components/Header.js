import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div id="header">
                 <h1 className="title">Search For Cooking Ideas</h1>
                        <div id="search-field">
                        <input onKeyUp={this.props.onsubmit} onChange={this.props.onFoodChange}  className="input2"   type="text"  id="food-input" placeholder="Ex: Chicken" name="Food" />
                        <button type="button" id="submit-btn" className="submit-button wow fadeInDownBig" data-wow-delay="1.5s" onClick={this.props.searchRecipes}>Submit</button>
                        </div>
            
            </div>
            
        )
        
    }
}

export default Header;