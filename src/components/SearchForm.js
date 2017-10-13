import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      fireRedirect: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps() {
    this.setState({ fireRedirect: false })
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ fireRedirect: true })
    console.log(this.state.value);
  }

  render() {
    const { fireRedirect, value: query } = this.state
    console.log(fireRedirect)
    console.log(query)
    return (
      <form  onSubmit={ this.handleSubmit }>
        <FormGroup>
          <InputGroup bsSize='lg'>
            <FormControl 
              type="text" 
              onChange={this.handleChange}
              autoFocus
            />
            <InputGroup.Button>
              <Button>Find Movie!</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        {
          fireRedirect && query &&
          <Redirect to={`/search/${query}`} push/>
        }
      </form>
    );
  }
}


export default SearchForm;