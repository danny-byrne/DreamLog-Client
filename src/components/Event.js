import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import classes from './Input.module.css';

class Event extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      view: 0,
      event: this.props.event,
      description: this.props.description,
      date: this.props.date,
      type: this.props.type,
      id: this.props._id
    }
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.switchView = this.switchView.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  delete (id) {

  }

  update (id) {
    
  }

  capitalize (input) {
    return input[0].toUpperCase().concat(input.subString(1))
  }

  switchView(){
    let newView = !this.state.view;
    this.setState({view: newView});
  }

  render() {

    const { event, type, description, date } = this.state;
    const params =  [event, type, description, date];
    const { id } = this.state;
    // const look = 

    let look = <div>Event:{event}Type:{type}Description:{description}Date:{date}
                  <button oncLick = {this.switchView}>Edit</button>
                  <button onclick={this.delete(id)}>Delete</button>
                </div>

    

    let touch = <form onSubmit={this.update(id)}>
                  {...params.map(e => {
                    return (
                      <React.Fragment>
                      <label>{this.capitalize(e)}</label>
                      <input type="text"
                            required
                            className={classes.input} 
                            name={this.capitalize(e)}
                            value={this.state[e]}
                            onChange={this.handleChange}/> 
                      </React.Fragment> 
                    )
                  })}

              <DatePicker 
                className={classes.input}
                selected={this.state.date}
                required  
                name="date"
                onChange={date => this.setState({date: date})}/>

                  <input type="submit" value="Save Event" className={classes.button} />
              </form> ;   

    let view = this.state.view ? look : touch;

    return (
      {view}
    )
  }
}

export default Event;