import React, {Component} from 'react';
import axios from 'axios'
const context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'Search_tires':
        return{
            ...state,
            player: action.payload
        };
        default:
            return state;
    }
}
class Provider extends Component{
    state = {
        player:[],
        dispatch: action => this.setState(state => reducer(state, action ))
    };

    componentDidMount(){
        
        axios.get('http//:localhost:5000/tires')

        .then(res => {
        
            this.setState({player: res.data});
            })
        .catch(err => console.log(err))
    

}

    render(){
        return(
            <context.Provider value ={this.state}>
            {this.props.children}
            </context.Provider>
        )
    }
}
const ProductConsumer = context.Consumer;
export {Provider, ProductConsumer}
