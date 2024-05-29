import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Upcoming = () => {
    const [endPoint, setEndPoint] = useState('movie');
    const [tab, setTab] = useState('Movies');

    const apiUrl = tab === 'Movies'
        ? `/${endPoint}/upcoming?language=en-US`
        : `/${endPoint}/on_the_air?language=en-US`;

    const { data, loading } = useFetch(apiUrl);

    const onTabChange = (selectedTab) => {
        setTab(selectedTab);
        setEndPoint(selectedTab === 'Movies' ? 'movie' : 'tv');
    };

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Upcoming</span>
                <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endPoint={endPoint} />

        </div>
    );
};

export default Upcoming;
