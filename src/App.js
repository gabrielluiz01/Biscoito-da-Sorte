import React, { Component } from 'react';
import Biscoito from './assets/biscoito.png';
import './index.css'

class App extends Component {

  state = {
    text: '',
    phrases: [ 
      'A vida trará coisas boas se tiveres paciência',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você',
      'Não compense na ira o que lhe falta na razão',
      'Defeitos e virtudes são apenas dois lados da mesma moeda',
      'A maior de todas as torres começa no solo',
      'Não há que ser forte. Há que ser flexível',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida',
      'A juventude não é uma época da vida, é um estado de espírito',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos',
    ]
  }

  componentDidMount() {
    this.sortear();
  }

  sortear = () => {
    let aleatory = Math.random();
    aleatory = Math.floor(aleatory * 5)
      this.setState({
        text: this.state.phrases[aleatory]
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Tire sua sorte !</h1>
        <div className="box-text">
          <p className="phrases">{this.state.text}</p>
        </div>
        <button onClick={this.sortear} className="button">
          <img src={Biscoito}/>
        </button>

      </div>
    );
  }
}

export default App;
