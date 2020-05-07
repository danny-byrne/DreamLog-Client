import React, { Component } from 'react';
import axios from 'axios';

 class EventList extends Component {
  constructor(props){
    super(props)

    this.state = {
      events: []
    }

    this.fetchData = this.fetchData.bind(this)
  }

 
  
  render() {
    console.log(this.state.events)

    let events = this.state.events.map(e => {
      console.log('e is', e)
      return <li key = {e._id}> Description: {e.description} Date: {e.date} Type: {e.type}</li>
    })

    
    console.log('events is' , events)


    return ( <ul>
      {events}
    </ul> )
  }
}

export default EventList;