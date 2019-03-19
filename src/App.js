import React, { Component } from 'react';
import './App.css';
import './styles/title.css';
import Header from './components/Header';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            ingredients:"",
            food:"",
            label:"",
            response:false,
            loadingPicture:false,
        }
    }

    

    // componentDidMount() {
    //     this.setState({
    //         isLoaded: true,
    //     })
    // }
 
     onsubmit = event =>{
        const keyCode = event.keyCode || event.which;
                    if (keyCode === 13) {
                    this.searchRecipes();
                    }
                 }

    

    onFoodChange = event => {
        this.setState({ Food: event.target.value});
    }

    loadingSpinner = () =>{
        this.setState({
            loadingPicture:true
        })
    }

    

    
    searchRecipes = () => {
        this.loadingSpinner()
        const  {Food}  = this.state;
        const MAX_RESULTS = 100; // Change for performance reasons
        const API_KEY = "414c4ae5cd2446bda63bcb12231722cf";
        //RECIPE APP ID
        const API_ID = "3800b0d1";
        const API_CALL = `https://api.edamam.com/search?q=${Food}&app_id=${API_ID}&app_key=${API_KEY}&from=${0}&to=${MAX_RESULTS}`;
        console.log(Food);
        
        fetch(API_CALL)
        .then(res => res.json())
        .then(json  => {
            
            this.setState({
                isLoading:false,
                loadingPicture:false,
                items:json,
                Food:Food, 
                label:  json.hits,
                food: json.hits,
                url: json.hits,
            })
        });
        
    }
    

    //     createElement = () =>{
        
    //         for(let i=0;i<10;i++){
    //     <div>{this.state.label[i]}</div>
    //     }
    // }
    
    
    
    componentDidMount() {
        this.setState({
        isLoaded:true          
        })
        
      }

      renderImages = () => {
          
        if (!this.state.food) {
            return null;
        } 
        return(
            this.state.food.map ((food,i) => {return (
                <div className="response-image">
                <a href={this.state.url[i].recipe.url} target="_blank">
                <img  src={food.recipe.image} /> 
                <div>{this.state.label[i].recipe.label}</div>
                </a>
               {/* {this.state.label.map((label,i)  => <div key={i}>{label.recipe.label}</div>)}  */}
                </div>
            )}))
    }

    // renderDescription = () => {
    //     if (!this.state.label) {
    //         return null;
    //     } 
    //     return this.state.label.map(label => <div>{label.recipe.label}</div>);
    // }
    
    render() {
        if (this.state.loadingPicture) {
            return <div id="loading-container"><img id="loading-icon" src="./food.gif"/></div>;
        }else
       {
           return (
                <div className="App">

                   <Header searchRecipes={this.searchRecipes} onFoodChange={this.onFoodChange} onsubmit={this.onsubmit}/> {/* Header COMPONENT */}

                      <div className="app-container">
                        <div className="sub-title">Your Food:<br/>{this.state.Food}<br/></div>
                            <div className="response-container">{this.renderImages()}</div>
                     
                      </div>
                      <script src="https://developer.edamam.com/attribution/badge.js"></script>
                      <div id="footer">Trevor Meyers - 2019<div id="edamam-badge" data-color="white"></div></div>
                </div>

                
            )
    
           
        }

        
        
    }

    
   
        }


        
export default App;