import React from 'react';


export default class Router extends React.Component {

    constructor() {

        super();

        this.changeRoute = this.changeRoute.bind(this);
        this.history = window.history;

        // Set state based on location path
        this.state = {
            location: window.location.pathname
        };

        window.onpopstate = this.changeRoute;

    }

    changeRoute(route) {


        if(typeof route === 'object') {

            // Change route according to a history back/forward request
            route = (route.state) ? route.state.page || '/' : '/';
            var stateObj = { page: route };
            this.history.replaceState(stateObj, "", route);

        } else {

            // Set route based on link/programmatically
            var stateObj = {page: route};
            this.history.pushState(stateObj, "", route);

        }

        this.setState({location: route});

    }

    render() {

        // Give all children the route props
        let renderChildren = React.Children.map(this.props.children, child => {

            return React.cloneElement(child, {
                route: this.state.location,
                changeRoute: this.changeRoute
            });

        });

        return (

            <div>{renderChildren}</div>

        );

    }

}

