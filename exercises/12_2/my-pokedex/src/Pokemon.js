import React from 'react';

class Pokemon extends React.Component {
  render () {
    const { name, type,
      averageWeight: { value, measurementUnit },
      image
    } = this.props.pokemon;
    return (
      <div className="pokemon">
        <h1>Nome: {name}</h1>
        <p>Tipo: {type}</p>
        <p>Peso médio: {value} {measurementUnit}</p>
        <img src={image} />
      </div>
    );
  }
}

export default Pokemon;