import React, {Component} from 'react'
import './blocks.css';
import './status.css';
import './clickstatus.css';
export default class BlockStyle extends  Component {
    state = {
        done: false
    };
    onLabelClick = () => {
      this.setState({
          done: true
      });
    };

    render() {
        const {done} = this.state;

        let className = 'style ';
        if (done) {
            className += 'Status';
        }
        console.log({className})
        return (

            <div className="list">
            <div>
                <button className={className} onClick={this.onLabelClick}>    Главная    </button>
                <button className="block-2 ">    Тарифы     </button>
                <button className="block-3">    Платежи    </button>
                <button className="block-4">     Инфо      </button>
            </div>
        </div>
        )
    };
}
