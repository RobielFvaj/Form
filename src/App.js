import React from 'react';

class App extends React.Component {
 
  constructor(){
    super()
    this.state = {
      firstName : '',
      lastName : '',
      isFriendly: true,
      gender: '',
      favColor: 'blue'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
handleChange(event){
  const{name, value, type, checked} = event.target
  type === 'checkbox'?
  this.setState({[name]:checked}):
  this.setState({[name]: value})
}
handleSubmit(event){

}
 render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="First Name"  
            onChange= {this.handleChange}
          /> First Name
        </label><br />
        <label>
        <input 
          type="text" 
          value={this.state.lastName} 
          name="lastName" 
          placeholder="Last Name"  
          onChange={this.handleChange}
        /> Last Name
        </label><br />
        <label>
          <textarea 
          value={"Some value"} 
          onChange={this.handleChange} 
          />
        </label><br />
        <label>
        < input 
          type="checkbox" 
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange} 
        /> Is isFriendly?
        </label><br />
        <label>
          <input 
          type = 'radio'
          name='gender' 
          value='male' 
          checked={this.state.gender === 'male'} 
          onChange={this.handleChange} />
          Male
        </label><br />
        <label>
          <input 
          type = 'radio'
          name='gender' 
          value='female' 
          checked={this.state.gender === 'female'} 
          onChange={this.handleChange} />
          Female
        </label><br />
        <label> Favorite Color: </label>
        <select 
            value= {this.state.favColor}
            onChange={this.handleChange}
            name='favColor'
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
         </select><br />
        <button>Submit</button>
        
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>{this.state.gender}</h2>
        <h2>{this.state.favColor}</h2>
      </form>
    )
  }
}

export default App;
