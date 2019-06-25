import React from 'react';
import './styles.css';

import { Component } from 'react';

class ComponentWithState extends Component {

    state = {
        hello: true,
    };

    function = () => {
        this.setState(() => ({
            hello: false,
        }));
    };

    render() {

        const jsx = (

            <ComponentWithState
            props={this.props}
            >
                Component with state
            </ComponentWithState>
        )

        return jsx;
    }
    
};
