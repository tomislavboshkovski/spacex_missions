import React from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem/LaunchItem';


const GET_LAUNCHES_QUERY = gql`
    {
        launchesPast(limit: 30) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            links {
                article_link
                flickr_images
            }
            id
        }
    }
`;

const Launches = () => {
    const { data, loading, error } = useQuery(GET_LAUNCHES_QUERY);

    if (loading) return <h1>Loading 🚀</h1>;
    if (error) return <h5>An error has occurred</h5>;

    //Filtering the Launches with available images
    const launches = data.launchesPast.filter(
    launch => launch.links.flickr_images.length > 0
    );

    const renderedList = launches.map(launch => {
        return <LaunchItem key={launch.id} launch={launch} />;
    });

    return (
        <div>
            <h1>SpaceX Missions</h1>
            <div>
                {renderedList}
            </div>    
        </div>
    );
};


export default Launches;