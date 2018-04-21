import React, { Component } from 'react';
import Slider from "react-slick";
import '../../styles/featured.css';

let myVar;
export class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myVar:''
    }
  }
  componentDidMount() {
    myVar = setInterval(()=> this.setState({position: 1}), 3000)
  };

  componentWillUnmount() {
    clearInterval(myVar);
  };

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-12'}>
              <Slider {...settings}>
                <div>
                  <a href={'#'} className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156458/Imagem_azul.jpg?v=636181042799570000")' }}>&nbsp;</a>
                </div>
                <div>
                <a className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156460/Imagem_verde.jpg?v=636181042823770000")' }}>&nbsp;</a>
                </div>
                <div>
                <a className={'item'} style={{ backgroundImage:'url("http://agenciabluefoot.vteximg.com.br/arquivos/ids/156459/Imagem_amarela.jpg?v=636181042812730000")' }}>&nbsp;</a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;