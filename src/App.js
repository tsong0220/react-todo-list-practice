import React from 'react';
import AddForm from './AddForm'
import ToDos from './ToDos';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['one', 'two', 'three']
    };
  }

  addItem(item){
    this.setState(
      {
      items : [...this.state.items, item]
      }
    )
  }

  removeItem(){}

  editItem(){}

  render() {
    return (
      <div style={styles}>
        <h2>Welcome to our list! {'\u2728'}</h2>
        <AddForm onSubmit={item => this.additem(item)}/>
        <ToDos items={this.state.items} />
      </div>
    );
  }
}
