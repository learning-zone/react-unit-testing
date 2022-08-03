import React, { Component, Fragment } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'


export default class RestAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {
        results: [],
        columns: [
          { name: 'Name', selector: 'name', sortable: true },
          { name: 'Email', selector: 'email', sortable: true  },
          { name: 'Phone', selector: 'phone', sortable: true, right: true }
        ]
    }
  }
  
  componentDidMount() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        const results = response.data
        //console.log(results)
        this.setState({ results })
      })
      .catch(error => {
        //console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <h1>RestAPI Test</h1>
        <DataTable
          title=''
          columns={this.state.columns}
          data={this.state.results}
        />
      </Fragment>
    )
  }
}
