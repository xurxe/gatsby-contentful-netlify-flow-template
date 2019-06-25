import React from 'react';
import './styles.css';

import { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import ReactResizeDetector from 'react-resize-detector';

class Nav extends Component {

    state = {
        desktop: true,
        closed: true,
        classNameNav: 'Nav Nav___desktop',
    };

    renderDesktop = () => {
        this.setState(() => ({
            desktop: true,
            closed: true,
            classNameNav: 'Nav Nav___desktop',
        }));
    };

    renderClosed = () => {
        this.setState(() => ({
            desktop: false,
            closed: true,
            classNameNav: 'Nav Nav___closed',
        }));
    };

    renderOpen = () => {
        this.setState(() => ({
            desktop: false,
            closed: false,
            classNameNav: 'Nav Nav___open',
        }));
    };

    componentDidMount = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            this.renderClosed();
        }

        else {
            this.renderDesktop();
        }
    };

    handleWindowResize = () => {

        if (
            this.state.desktop
            && window.matchMedia('(max-width: 600px)').matches
        ) {
            this.renderClosed();
        }

        else if (
            !this.state.desktop 
            && !window.matchMedia('(max-width: 600px)').matches
        ) {
            this.renderDesktop();
        }
    };

    handleClick = () => {

        if (
            !this.state.desktop 
            && this.state.closed
        ) {
            this.renderOpen();
        }

        if (
            !this.state.desktop 
            && !this.state.closed
        ) {
            this.renderClosed();
        };
    };

    render() {
        const { contentfulNavigationBar, allContentfulPage } = this.props.data;

        const { id } = contentfulNavigationBar;

        const jsx = (

            <ReactResizeDetector
            handleWidth
            onResize={this.handleWindowResize}
            refreshMode='throttle'
            refreshRate={100}
            >

                <nav 
                className={this.state.classNameNav}
                >
                    <button 
                    className='Nav_button hvr-outline-out___nav'
                    onClick={this.handleClick}
                    >
                        Button
                    </button>

                    <Link
                    to='/'
                    ></Link>

                    {allContentfulPage.edges.map(page => {
                        <Link
                        key={page.id}
                        to={page.slug}></Link>
                    })}

                    Navigation: {id}

                </nav>
            </ReactResizeDetector>
        )

        return jsx;
    }
    
};

export default props => (
    <StaticQuery
        query={query}
        render={data => <Nav data={data} {...props}></Nav>}
    />
);

export const query = graphql`
{
    contentfulNavigationBar {
        id
    }
    allContentfulPage {
        edges {
            node {
                id
                slug
            }
        }
    }
}
`;
