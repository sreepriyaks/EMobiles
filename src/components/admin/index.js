import React, { Component } from 'react';
import Search from '../search';
import PhoneList from '../phonesList';
class Admin extends Component {
  render() {
    return (
      <div>
        <Search />
        <PhoneList />
      </div>
    );
  }
}
export default Admin;
