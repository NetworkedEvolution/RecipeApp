import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
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
            source:"",
            calories:"",
            response:false,
            loadingPicture:false,
            show:false,
        }
    }

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
        const MAX_RESULTS = 100; // Change for performance
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
                source:json.hits,
                calories: json.hits,
                url: json.hits,
                noResponse: json.count
            })
        });
        
    }
    

    
    // componentDidMount() {
  
    //   }

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
                <div id="source">{this.state.source[i].recipe.source}</div>
                <div id="calories">Calories: {Math.floor(this.state.calories[i].recipe.calories)}</div>
                </a>
                </div>
            )}))
            
    }



    Modal = () => {
        if(this.state.show === false){
            return null
        }else
       return(<div >
        <div id="modal-container"><div id="modal">
        Search any food or drink in the box above.<br/><br/>
        You can search for a specific food website like bonappetit or Taste of Home <br/>
        Then follow that with the food or drink item to get website specific results.<br/><br/>
        Get Searching!
        <div id="close" onClick={this.showModal}>X</div></div>
        </div>
        </div>)
        }

    showModal = () => {
        this.setState({
            show: this.show = !this.show
        })
        }

        noResponse = () => {
                if(this.state.noResponse == 0){
                    return this.noResponseClear()
                }
                
        }
        noResponseClear = () => {
            alert("Could not find any results.. Please try again.")
            this.setState({
                noResponse: 1
            })
            
          
        }

    
    render() {
        if (this.state.loadingPicture) {
            return <div id="loading-container"><img id="loading-icon" src="./food.gif"/></div>;
        }else
       {
           return (
                <div className="App">

                <MetaTags>
                    <title>Recipe App</title>
                    <meta name="theme-color" content="#78c455"/>
                    <meta id="meta-description" name="description" content="Some description." />
                </MetaTags>

                   <Header searchRecipes={this.searchRecipes} onFoodChange={this.onFoodChange} onsubmit={this.onsubmit} showModal={this.showModal}/> {/* Header COMPONENT */}
                    <div>{this.Modal()}</div>
                    
                    
                      <div className="app-container">
                        <div className="sub-title">Your Food:<br/>{this.state.Food}<br/></div>
                        <div className="response-container">{this.noResponse()}</div>
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