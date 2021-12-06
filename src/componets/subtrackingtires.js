import React, { Fragment, Component} from "react";

import Changbar from './Changebar'  
class Subtire extends Component {
        state={
          width: '',
          ratio: '', 
          rim: '', 
          tire: '', 
          output: [],
          show:false 
        };
        onChange1= (e) => {
          
          this.setState( { [e.target.name]: e.target.value});
       };
      
        onSubmitForm = async e => {
          
         e.preventDefault();
          try {
            
            console.log(this.state.tire)
            
            const response = await fetch("https://el-tecolte-tires.herokuapp.com/tires",{
            method: 'DELETE', 
            
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                    "width":this.state.width,
                    "ratio":this.state.ratio,
                    "rim":this.state.rim,
                    "quanity": this.state.tire
                })
            });
            
            const jsonData = await response.json();
            this.setState({output: jsonData})
            this.setState({width: '', ratio:'', rim:'', tire:'', show: response.status})
            console.log(jsonData)

          } catch (err) {
            console.error(err.message);
            
          }
        };
        
      render(){
         var output= this.state.output
         const conditional= ()=> {
          
          if(this.state.show === 404 || this.state.show === 400 ){
          return <h1>{output}</h1>
          }else{
            if(this.state.show === 200){
            return <h1> {output.width }/{output.ratio} R{output.rim} :  {this.state.output.quantity}</h1>
            }
        }
        }
        return (
            <Fragment>
              <Changbar/>
               <h1>Subtract</h1>
               <div className="container">
                <form onSubmit={this.onSubmitForm}>
                  <h3>Width</h3>
                <input 
                    type="number" 
                    max="500"
                    name="width" 
                    value={this.state.width} 
                    step="5" 
                    onChange= {this.onChange1}
                    pattern="[0-9]*"
                    required />
                    <h3>Ratio</h3>
                    <input
                    type="number" 
                    max="225" 
                    min="10" 
                    step="5" 
                    value = {this.state.ratio}
                    name="ratio"
                    pattern="[0-9]*"
                    onChange= {this.onChange1} 
                    required/>
                    <h3>rim</h3>
                    <input 
                    type="number" 
                    max="120" 
                    min="3"
                    name="rim"
                    pattern="[0-9]*"
                    value={this.state.rim}
                    onChange= {this.onChange1}
                    required/>
                
                    <h3>Numbrer subtracted</h3>   
                  <input 
                    type="number"
                    min ="0"
                    max="45"
                    name="tire"
                    pattern="[0-9]*"
                    value={this.state.tire}
                    onChange={this.onChange1}
                    required/>
                  
                     <button >Subtract</button>  
                     {conditional()}  
                </form>
                </div>
           
        
          </Fragment>
      
        
        )
    }
  }


export default Subtire