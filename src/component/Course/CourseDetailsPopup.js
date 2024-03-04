import React from 'react';
import './CoursePopup.css'

const CourseDetailsPopup = ({ course, closePopup, isDarkMode }) => {

    return (
        <div className="popup-overlay">
            <div className="popup-content" style={{ background: isDarkMode ? "#fbe8fc" : "#da33e6" }}>
                <span className="popup-close" style={{color: isDarkMode ? "#da33e6" : "#fbe8fc"}} onClick={closePopup}>&times;</span>
                <h2>{course.title}</h2>
                <p>{course.definition}</p>
                <hr />
                <p>{course.info}</p>
                {/* Add other details you want to display */}
            </div>
        </div>
    );
};

export default CourseDetailsPopup;
