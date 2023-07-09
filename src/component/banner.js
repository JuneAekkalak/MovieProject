import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const BannerShow = () => {
    const images = [
        "https://abartacocacola.com/wp-content/uploads/contact-banner.jpg",
        "https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg",
        "https://img.freepik.com/premium-vector/crunchy-popcorn-snack-ad-poster-with-striped-buckets-grains-sweet-salt-cinema-food-commercial-flying-tasty-popcorn-vector-banner_102902-5464.jpg?w=2000",
    ];

    return (
        <Slide> 
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center center',   }}></div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})`, backgroundSize: 'cover' }}></div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})`, backgroundSize: 'cover' }}></div>
            </div>
        </Slide>
    );
};

export default BannerShow;