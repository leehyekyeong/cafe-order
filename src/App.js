import React, { Component } from 'react';
import Staff from './Staff'
import Menu from './Menu'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {
        name: '어서오세요. 카페 바바라입니다.',
        desc: '오른쪽 메뉴판을 눌러 주문해주세요.'
      },
      ordered_menu_id: 1,
      menu: [
        {id: 1, name: '에스프레소', price: '3500'},
        {id: 2, name: '아메리카노', price: '3500'},
        {id: 3, name: '카페라떼', price: '4000'},
        {id: 4, name: '바닐라라떼', price: '4300'},
        {id: 5, name: '헤이즐넛라떼', price: '4300'},
        {id: 6, name: '카푸치노', price: '3200'},
        {id: 7, name: '카페모카', price: '4800'},
        {id: 8, name: '카라멜마끼야또', price: '4800'},
        {id: 9, name: '롱블랙', price: '3500'},
        {id: 10, name: '플랫화이트', price: '4000'},
        {id: 11, name: '카페콘판나', price: '3800'},
        {id: 12, name: '아인슈페너', price: '4800'},
        {id: 13, name: '아포가토', price: '6000'}
      ]
    }
  }

  render() {
    var _name, _desc = null;
    if (this.state.mode === 'welcome') {
      _name = this.state.welcome.name;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'order') {
      var i = 0;
      while (i<this.state.menu.length) {
        var data = this.state.menu[i];
        if (data.id === this.state.ordered_menu_id) {
          _name = data.name + "를 주문하시겠습니까?";
          _desc = data.price + "원입니다.";
          break;
        }
        i = i + 1;
      }
    }

    return (
      <div className="App">
          <Staff
            name={_name}
            desc={_desc}
            onChangePage={function() {
              this.setState({
                mode: 'welcome'
              });
            }.bind(this)}
          ></Staff>
          <Menu
            data={this.state.menu}
            onChangePage={function(id) {
              this.setState({
                mode: 'order',
                ordered_menu_id: Number(id)
              });
            }.bind(this)}
          ></Menu>
      </div>
    );
  }
}

export default App;