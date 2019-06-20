import React from "react";
import logo from './logo.png';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    };

    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
  }

  onAdd(item) {
    const newItems = this.state.items;
    newItems.push(item);
    this.setState({
      items: newItems,
      activeTab: 'list' // change tab on every item added
    });
  }

  onRemove(index) {
    let newItems = this.state.items.slice();
    newItems.splice(index, 1);
    this.setState({items: newItems});
  }

  onClickTabAdd() {
    this.setState({
      activeTab: "add"
    });
  }

  onClickTabList() {
    this.setState({
      activeTab: "list"
    });
  }
  
  onClickTabPay() {
    this.setState({
      activeTab: "pay"
    });
  }

  renderTabs() {
    const { activeTab } = this.state;
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button
          onClick={this.onClickTabAdd}
          isSelected={activeTab === 'add'}>
          Add
        </Button>
        <Button
          onClick={this.onClickTabList}
          isSelected={activeTab === 'list'}>
          List
        </Button>
        <Button
          onClick={this.onClickTabPay}
          isSelected={activeTab === 'pay'}>
          Pay
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div 
        style={{
          width: 400,
          minHeight: 680,
          margin: 'auto',
          marginTop: 60,
          backgroundColor: 'white',
          border: '1px solid darkgrey',
          boxShadow: '0 0 100px darkgrey',
          borderRadius: 30,
          }}>

        <div 
          style={{
            textAlign:"center"
          }}>
          <img src={logo} alt="Logo" />;
        </div>

        <div 
          style={{
            borderBottom: '1px solid darkgrey',
            borderTop: '1px solid darkgrey',
            marginBottom: 30,
          }}>
          {this.renderTabs()}
        </div>

        <div>

          {this.state.activeTab === 'add' && 
            <Add onClick={this.onAdd} />}

          {this.state.activeTab === 'list' && 
            <List
              items={this.state.items}
              onRemoveFn={this.onRemove} />}

          {this.state.activeTab === 'pay' && 
            <Pay items={this.state.items} />}

        </div>
      </div>
    );
  }
}

export default App;
