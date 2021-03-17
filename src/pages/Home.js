import React from 'react';

import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import FeaturedProduct from '../components/FeaturedProduct';
import Services from '../components/Services';

const Home = () => {
    return(
        <div>
            <Sidebar/>
            <Banner/>
            <FeaturedProduct/>
            <Services/>
        </div>
    )
}
export default Home