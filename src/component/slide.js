import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideShow = () => {
    const images = [
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/last-of-us-road-logan.jpg",
        "https://www.originalfilmart.com/cdn/shop/products/avatar_2009_british_quad_teaser_original_film_art_5000x.jpg?v=1562542844",
        "https://i.ytimg.com/vi/oChUF-NZkDo/maxresdefault.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover' }}></div>
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

export default SlideShow;