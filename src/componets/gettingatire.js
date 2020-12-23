import React, { Fragment, Component} from "react";

   
class Gettire extends Component {
        state={
          
          width: '',
          ratio: '', 
          rim: '', 
          tire: 0
        };
        onChange1= (e) => {
          
          this.setState( { [e.target.name]: e.target.value});
       };
      
        onSubmitForm = async e => {
          this.setState({tire: 0})
          e.preventDefault();
          try {
            

            
            const response = await fetch("https://el-tecolte-tires.herokuapp.com/tires/"+this.state.width+'/'+this.state.ratio+'/'+this.state.rim +'/',
            );
            console.log(this.state.width);
            const jsonData = await response.json();
            
            console.log(jsonData)
            if (jsonData === ''){
              this.setState({tire:0});
            }else{
              this.setState({tire: jsonData.quanity});
            }
          } catch (err) {
            console.error(err.message);
          }
        };
        
        
      render(){
        
        return (
            <Fragment>
                <h1 className="text-center mt-5">Tecolote</h1>
                <div className="container">
               
               <form className="d-flex mt-5" onSubmit={this.onSubmitForm}>
                 <h3>Width</h3>
                <input 
                    type="number" 
                    max="500"
                    name="width" 
                    value={this.state.width} 
                    step="5" 
                    onChange= {this.onChange1} />
                  <h3>ratio</h3>
                  <input type="number" max="225" min="10" 
                  value = {this.state.ratio}
                  name="ratio"
                  onChange= {this.onChange1} />
                  <h3>Rim</h3>
                  <input 
                  type="number" 
                  max="120" 
                  min="3"
                  name="rim"
                  value={this.state.rim}
                  onChange= {this.onChange1}/>
                  
                  <button >Check</button>
                </form>
                </div>
                <h1>Quantity</h1>
        <h1>{this.state.tire}</h1>
          </Fragment>
        )
    }
  }


export default Gettire