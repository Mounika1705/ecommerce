import React, { Component } from 'react';
import Search from './search/search';
import Title from './title/title';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <Title />
                    <Search />
                  </div>
                </div>
            </header>
        )
    }
}
