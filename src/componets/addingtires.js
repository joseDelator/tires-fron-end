import React, { Fragment, Component} from "react";
import Dash from "../routes/dash";
import Changbar from './Changebar'
class Addtire extends Component {
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
            
            const response = await fetch("https://el-tecolte-tires.herokuapp.com/tires/",{
            method: 'POST', 
            
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
            this.setState({width: '', ratio:'', rim:'', tire:'', show: true})
            console.log(jsonData)

          } catch (err) {
            console.error(err.message);
          }
        };
        
      render(){
         var output= this.state.output
         const conditional= ()=> {
          
          if(this.state.show){
            return <h1> {this.state.output.width }/{this.state.output.ratio} R{this.state.output.rim} :  {this.state.output.quantity}</h1>
          }
        }
        return (
          
            <Fragment>
              <Changbar/>
               <h1>Adding</h1>
               <div className="container">
                <form  onSubmit={this.onSubmitForm}>
                  <h3>Width</h3>
                <input 

                    type='NUMBER' 
                    max="500"
                    name="width" 
                    value={this.state.width} 
                    step="5" 
                    pattern="[0-9]*"
                    onChange= {this.onChange1}
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
                
                    <h3>Numbrer added</h3>
                       
                  <input 
                    type="number"
                    min ="1"
                    max="45"
                    name="tire"
                    pattern="[0-9]*"
                    value={this.state.tire}
                    onChange={this.onChange1}
                    required/>
                     <button >add</button>    
                </form>
                </div>
           {conditional()}
        
          </Fragment>
      
        
        )
    }
  }


export default Addtire