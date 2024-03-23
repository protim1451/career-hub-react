import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;