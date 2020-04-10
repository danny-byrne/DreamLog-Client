import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import classes from './Input.module.css';
import axios from 'axios';

class Event extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      view: 0,
      event: this.props.event,
      description: this.props.description,
      date: this.props.date,
      type: this.props.type,
      id: this.props.id
    }
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.switchView = this.switchView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  delete (id) {
    axios.delete('http://localhost:5000/events/delete/')
      .then(res => console.log(res))

      this.updateParent();
  }

  update () {
    const event = {
      event: this.state.event,  
      date: this.state.date,
      description: this.state.description,
      type: this.state.type,
      id: this.state.id
    }
    axios.post('http://localhost:5000/events/update/', event)
      .then(res => console.log(res.data))

    this.updateParent();
  }

  updateParent(){
    this.props.updateParent();
  }

  capitalize (input) {
    return input[0].toUpperCase().concat(input.subString(1))
  }

  switchView(){
    console.log('switching view')
    let newView = !this.state.view;
    this.setState({view: newView});
  }

  render() {

    const { event, type, description, date } = this.state;
    // const params =  [event, type, description, date];
    const { id } = this.state;
    // const look = 

    let look = ( <div>Event:{event}Type:{type}Description:{description}Date:{date}
                  <button onClick = {this.switchView}>Edit</button>
                  <button onClick={this.delete(id)}>Delete</button>
                </div> )

    

    let touch = ( <form onSubmit={this.update}>
                    <label>Event</label>
                      <input type="text"
                        required  
                        className={classes.input}
                        name="event"
                        value={this.state.event}
                        onChange={this.handleChange}/>

                    <label>Type</label>
                      <input type="text"
                        required  
                        className={classes.input}
                        name="type"
                        value={this.state.type}
                        onChange={this.handleChange}/>
                      
                    <label>Description</label>
                      <input type="text"
                        required  
                        className={classes.input}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}/>

                    <label>Date </label>
                      <DatePicker 
                        className={classes.input}
                        selected={Date.parse(this.state.date)}
                        required  
                        name="date"
                        onChange={newDate => this.setState({date: newDate})}/>

                      <input type="submit" value="Save Event" className={classes.button} />
                  </form> );   

    let view = !this.state.view ? look : touch;
    // console.log('view is,', view)

    return (
      <div>
         {view}
      </div>
    )
  }
}

export default Event;