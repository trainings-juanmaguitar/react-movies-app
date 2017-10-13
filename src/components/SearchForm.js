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
    console.log('componentWillReceiveProps...')
    this.setState({ 
      value: '',
      fireRedirect: false
    })
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
    return (
      <form  className="SearchForm" onSubmit={ this.handleSubmit }>
        <FormGroup>
          <InputGroup bsSize={this.props.size}>
            <FormControl 
              type="text" 
              onChange={this.handleChange}
              value={this.state.value}
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