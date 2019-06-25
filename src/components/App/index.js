import React from 'react';
import './styles.css';

import HelmetComponent from '../HelmetComponent';
import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const App = ({ data }) => {

    const { contentfulSeo, header, main } = data;

    const jsx = (
        <div 
        className='App'
        >

            <HelmetComponent
            contentfulSeo={contentfulSeo}
            ></HelmetComponent>

            <Nav></Nav>

            <Header
            header={header}
            ></Header>

            <Main
            main={main}
            ></Main>

            <Footer></Footer>

        </div>
    )

    return jsx;
}

export default App;
