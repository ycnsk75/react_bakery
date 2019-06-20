import React from 'react';

class List extends React.Component {
  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return (
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.6rem',
            letterSpacing: 5,
            margin: 30,
          }}
        >Pas encore de produit..
          <span
            style={{
              display: 'block',
              textAlign: 'center',
              fontWeight: 'bold',
              margin: 10,
              fontSize: 80,
            }}
          >=
          </span> 
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
        >Liste des produits
        </p>

        <ul className="list-group">
          {items.map(({price, name}, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index} onClick={() => this.props.onRemoveFn(index)}>
                <em
                  style={{
                    letterSpacing: 0,
                    fontStyle: 'normal',
                    width: 30,
                  }}>
                  {index + 1}° 
                </em> 
                <span 
                  className='titleItem'
                  style={{
                  }}>
                  {name}
                </span>
                <span className="badge badge-primary badge-pill">{price} €</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;