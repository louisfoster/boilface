import React from 'react';


export default class Link extends React.Component {

    constructor() {

        super();

        this.changePage = this.changePage.bind(this);

    }

    changePage(e) {

        // Propagate the new route
        e.preventDefault();
        let link = this.props.to;
        this.props.changeRoute(link);

    }


    render() {

        return (

            <a href={this.props.to} onClick={this.changePage}>
                {this.props.children}
            </a>

        )

    };

}