import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        var list = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            list.push (
                <tbody key={data[i].id}>
                    <tr>
                        <td>
                            <a
                                href={"/coffee/" + data[i].id}
                                data-id={data[i].id}
                                onClick={function(e) {
                                    e.preventDefault();
                                    this.props.onChangePage(e.target.dataset.id)
                                }.bind(this)}
                            >
                                {data[i].name}
                            </a>
                        </td>
                        <td>
                            {data[i].price}
                        </td>
                    </tr>
                </tbody>
            );
            i = i + 1;
        }

        return (
            <table>
                {list}
            </table>
        )
    }
}

export default Menu;