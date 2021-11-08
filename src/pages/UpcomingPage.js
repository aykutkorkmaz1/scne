import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import UpcomingEventsItem from '../components/UpcomingEventsItem';
import { Link } from 'react-router-dom';

function UpcomingPage () {
    return (
        <div>

            <Navbar text="Software Conferences and Events" />
            <Link className="link" to="/">
                <div className="back-main">
                    <p>Back To Main Page</p>
                </div>
            </Link>
            <UpcomingEventsItem />

        </div>
    );
}

export default UpcomingPage;