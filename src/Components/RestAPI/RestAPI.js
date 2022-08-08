import React, { Component, Fragment } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios'


export default class RestAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {
        results: [],
        columns: [
          { name: 'Name', selector: row => row.name, sortable: true },
          { name: 'Email', selector: row => row.email, sortable: true  },
          { name: 'Phone', selector: row => row.phone, sortable: true, right: true }
        ]
    }
  }
  
  async componentDidMount() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      const results = response ? response.data : "";
      this.setState({ results })
    } catch (error) { 
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        <h1>RestAPI Test</h1>
        <DataTable
          title=''
          columns={this.state.columns}
          data={this.state.results}
          selectableRows
        />
      </Fragment>
    )
  }
}
