    
import React from 'react';
// import Button from './core/Button';
import Card from './product/Card';

class Pay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      totalVat: 0,
      totalEcoTax: 0,
      totalAfterTax: 0,
      basket: {}
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd({ name, price }) {
    const newTotal = this.state.total + price;
    const newBasket = this.state.basket;
    if (newBasket.hasOwnProperty(name) === false) {
      newBasket[name] = 0;
    }
    newBasket[name] = newBasket[name] + 1;

    const totalItems = this.getTotalItems(newBasket);

    const totalEcoTax = parseInt(totalItems * .3 * 100) / 100;

    const totalVat = parseInt(newTotal * .2 * 100) / 100;

    const totalAfterTax = parseInt((newTotal + totalVat + totalEcoTax) * 100) / 100;

    this.setState({
      total: newTotal,
      totalVat,
      totalEcoTax,
      totalAfterTax,
      basket: newBasket
    });
  }

  getTotalItems(basket) {
    const totalItems = Object.values(basket);
    const total = totalItems.reduce((a, b) => a + b);
    console.log("total", total);
    return total;
  }

  renderBasket() {
    const { basket } = this.state;

    console.log("basket", basket);
    const keys = Object.keys(basket);
    return keys.map((key, index) => {
      return (
        <p className="" key={index} style={{
          fontSize: "1.2em"
        }}>
          {key} x {basket[key]}
        </p>
      );
    });
  }

  renderCards() {
    return this.props.items.map((item, index) => {
      return (
        <Card key={index} {...item} onClick={this.onAdd} />
      );
    });
  }

  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return (
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 30,
            fontSize: 80,
          }}
        >$
        </p>      
      );
    }
    return (
      <div 
        id="list"
        style={{
          padding: '0 20px 50px 20px'
        }}>

        <p
          style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.6rem',
              letterSpacing: 5,
              marginBottom: 20,
            }}
          >Quantification
        </p>


        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          >
            <div
              styme={{
                display: 'block',
              }}>
              <div>SubTotal:</div>
              <div>{this.state.total} €</div>
            </div>

            <div>
              <div>VAT:</div>
              <div>{this.state.totalVat} €</div>
            </div>

            <div>
              <div>Eco tax:</div>
              <div>{this.state.totalEcoTax} €</div>
            </div>

            <div>
              <div>Total:</div>
              <div>{this.state.totalAfterTax} €</div>
            </div>
        </div>

        <div
          style={{
            display: 'flex',
          }}>

          <div>
            {this.renderCards()}
          </div>

          <div>
            {this.renderBasket()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;