import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import classes from './Input.module.css';
import Event from './Event';

import "react-datepicker/dist/react-datepicker.css";
 

class EventInput extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      descripion: '',
      type: '',
      event: '',
      date: new Date(),
      events: []
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    // this.setTimeout = this.setTimeout.bind(this);
    this.update = this.update.bind(this);

  }

  componentDidMount(){
    // console.log('in componentDidMount', new Date());
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.events !== this.state.events){
      console.log('something changed')
      // this.fetchData()
    } 
    // this.fetchData();
  }

  async fetchData() {
    // console.log('fetching data')
    const res = await axios.get('http://localhost:5000/events')
    // console.log('res.data is ', res.data)
    this.setState({ events: res.data});
  }

  update(){
    // this.setTimout(() => {
      this.fetchData()
    // }, 500)
  }
    
  

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    const event = {
      event: this.state.event,  
      date: this.state.date,
      description: this.state.description,
      type: this.state.type
    }

    // let newEvents = [...this.state.events, event]
    // console.log('newEvents are', newEvents)


    

    axios.post('http://localhost:5000/events/add', event)
      .then(res => console.log(res.data));
      this.setState({
        description: '',
        type: '',
        event: '',
        date: new Date()
      })

    this.update()
  }


  
  render() {

    let events = this.state.events.map(e => {
      // console.log('e is', e)
      return <Event key={e._id} updateParent={this.update} id={e._id} description={e.description} type={e.type} event={e.event} date={e.date}  />
    })


    // let events = this.state.events.map(e => {
    //   // console.log('e is', e)
    //   return <li key = {e._id}> Event: {e.event} Description: {e.description} Date: {e.date} Type: {e.type}</li>
    // })



    return (
      <div className={classes.container}>
        <h3>Edit Event</h3>
        <form onSubmit={this.handleSubmit}>

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
                selected={this.state.date}
                required  
                name="date"
                onChange={date => this.setState({date: date})}/>

              <input type="submit" value="Create Event" className={classes.button} />

        </form>
        <ul>
          {events}
        </ul>
      </div>
    )
  }
}

export default EventInput;