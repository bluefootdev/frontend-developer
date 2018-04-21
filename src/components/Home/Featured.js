import React, { Component } from 'react';
import '../../styles/featured.css';

export class Featured extends Component {
  render() {
    return (
      <div>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-12'}>
              <div className={'carroussel'} >
                <div className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156458/Imagem_azul.jpg?v=636181042799570000")' }} />
                <div className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156460/Imagem_verde.jpg?v=636181042823770000")' }} />
                <div className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156459/Imagem_amarela.jpg?v=636181042812730000")' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;

// background: 'silver' url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156459/Imagem_amarela.jpg?v=636181042812730000") auto no-repeat;
