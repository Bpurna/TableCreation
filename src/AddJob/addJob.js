import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Job from '../job/job';


export default class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{
        backgroundImage: 'url(' + require('../components/assets/pf.jpg') + ')',
        position: 'fixed',
        height: '100%',
        backgroundSize: 'cover',
        width: '100%',
        overflow: 'hidden',
      }}>
        <div style={{ justifyContent: 'center', margin: 'auto', textAlign: 'center', margintop: '15px' }} >
          <h3>Add a new Job to the table:</h3>
          <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="name">
              Name:<br />
              <input id="name" value={this.props.name}
                type="text" name="name"
                onChange={this.props.onChangeText} />
            </label><br />
            <label for="imageUrl">
              ImageUrl:<br />
              <input id="photo-upload" value={this.props.imageUrl}
                type="file" name="imageUrl"
                onChange={this.props.onChangeText} />
            </label><br />
            <label for="description">
              Description:<br />
              <input id="description" value={this.props.description}
                type="text" name="description"
                onChange={this.props.onChangeText} />
            </label><br />
            <button type="submit" value="Submit" >Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}
