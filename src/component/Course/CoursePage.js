import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Row, Col } from 'reactstrap';
import { useDarkMode } from '../Theme/DarkModeContext';
import CourseDetailsPopup from './CourseDetailsPopup'; // Import your CourseDetailsPopup component

const CoursePage = () => {
    const { isDarkMode } = useDarkMode();
    const [selectedTopic, setSelectedTopic] = useState({ value: 'HTML', label: 'HTML' });
    const [courseData, setCourseData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/course?topic=${selectedTopic.value}`);
                const apiData = await response.json();

                if (apiData.myData && Array.isArray(apiData.myData)) {
                    setCourseData(apiData.myData);
                } else {
                    console.error('Received data is not in the expected format:', apiData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedTopic]);

    const topics = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'Javascript', label: 'Javascript' },
    ];

    const handleTopicChange = (selectedOption) => {
        setSelectedTopic(selectedOption);
    };

    const handleMoreButtonClick = (course) => {
        setSelectedCourse(course);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='body' style={{ background: isDarkMode ? "#160317" : '#fbe8fc' }}>
            <div className="select d-flex justify-content-center align-items-center gap-2 pt-3 mb-4 " >
                <label style={{ fontSize: "18", color: isDarkMode ? "#fbe8fc" : 'black' }}>Select a topic:</label>
                <Select
                    className='w-25'
                    value={selectedTopic}
                    onChange={handleTopicChange}
                    options={topics}
                />
            </div>

            <div className="container">
                <Row className='m-0'>
                    {courseData.map((course, index) => (
                        <Col key={index} md={4}>
                            <div className="card rounded " style={{ width: "18rem", margin: "10px" }}>
                                <div className="card-body" style={{ background: isDarkMode ? "#fbe8fc" : "#da33e6" }}>
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.definition}</p>
                                    <br />
                                    <button
                                        type="button"
                                        className="btn"
                                        style={{ background: isDarkMode ? "#da33e6" : "#fbe8fc", color: isDarkMode ? "#fbe8fc" : "#da33e6" }}
                                        onClick={() => handleMoreButtonClick(course)}
                                    >
                                        More
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Pop-up Div for detailed information */}
            {isPopupOpen && (
                <CourseDetailsPopup
                    course={selectedCourse}
                    closePopup={closePopup}
                    isDarkMode={isDarkMode}
                />
            )}
        </div>
    );
};

export default CoursePage;
