import React from 'react';
import Slider from './core/Slider';
import Button from './core/Button';

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: 1,
      name: '',
      styleBtnAjouter: {
        color: 'red',
      }
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
  }

  onChangeName(evt) {
    const name = evt.target.value
    this.setState({
      name
    });
  }

  onChangePrice(price) {
    this.setState({
      price
    });
  }

  render() {
    return (
      <div
        id="add"
        style={{
          padding: '0 20px 50px 20px'
        }}>

        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.6rem',
            letterSpacing: 5,
          }}
        >Ajout d'un produit
        </p>
        <input
          style={{
            marginTop: 20,
            backgroundColor: '#efeded',
            border: 'none',
            borderRadius: 30,
            padding: 10,
            paddingLeft: 20,
            fontSize: '1.2rem',
            width: '100%',
            letterSpacing: 5,
          }}
          type="text"
          value={this.state.name}
          placeholder="ex: croissant"
          onChange={this.onChangeName} 
        />
        <div
          style={{
            padding: '0 1em 0 1em',
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
          }}>
          <Slider
            min={1}
            max={10}
            value={this.state.price}
            onChange={this.onChangePrice}
          />
            
          <p
            style= {{
              position: 'relative',
              top: 5,
              textAlign: 'right',
              width: 20,
              fontSize: '10px',
            }}>
            {this.state.price} €
          </p>
        </div>
          <Button 
            onClick={() => this.props.onClick({
              name: this.state.name,
              price: this.state.price
            })}>
            +
            </Button>
      </div>
    );
  }
}
export default Add;