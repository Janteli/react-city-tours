import React, { useState } from 'react';
import './Tour.scss';

function Tour(props) {

    const [state, setState] = useState(false)

    function handleInfo() {
        setState(!state)


    }

    // console.log(props.tour.img)
    return (
        <article className="tour">
            <div className="img-container">
                <img src={props.tour.img} alt='' />
                <span className='close-btn' onClick={props.removeTour}>
                    <i className='fas fa-window-close' />
                </span>
            </div>
            <div className='tour-info'>
                <h3>{props.tour.city}</h3>
                <h3>{props.tour.name}</h3>
                <h5>
                    info{" "}
                    <span onClick={handleInfo}><i className='fas fa-caret-square-down' /></span>
                </h5>
                {!state &&
                    <p>
                        {props.tour.info}
                    </p>}

            </div>

        </article>
    )
}

export default Tour;
