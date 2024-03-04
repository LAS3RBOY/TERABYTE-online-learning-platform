import React, { useState } from 'react';
import Select from 'react-select';
import './Roadmap.css';
import { Row, Col } from 'reactstrap';
import RoadmapHTML from './RoadmapHTML';
import RoadmapCSS from './RoadmapCSS';
import RoadmapJS from './RoadmapJS';
import { useDarkMode } from '../Theme/DarkModeContext';

const Roadmap = () => {
    const { isDarkMode } = useDarkMode();

    const options = [
        { value: '', label: 'Select an Option' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JAVASCRIPT', label: 'JAVASCRIPT' },
    ];

    const [selectOption, setSelectOption] = useState('');

    const handleChange = (selectedOption) => {
        setSelectOption(selectedOption.value);
    };

    return (
        <>
            <div className="" style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
                <div className="container">
                    <Row className=''>
                        <Col md='6' style={{ marginTop: "3rem" }} className=''>
                            <p className='' style={{ fontSize: "20px", textAlign: "justify" }}>Explore the diverse roadmap of programming languages, from the foundational HTML and CSS and JS for web development to the dynamic and expressive languages like JavaScript and Python, guiding you through a journey of skill acquisition and mastery</p>
                        </Col>
                        <Col md='6' className='pt-4'>
                            <div className="mt-4 d-flex justify-content-center">
                                <Select
                                    className="form-select form-select-lg mb-3 pe-2"
                                    aria-label="Large select example"
                                    value={options.find(option => option.value === selectOption)}
                                    onChange={handleChange}
                                    options={options}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="show-roadmap " style={{ background: isDarkMode ? '#160317' : '#fbe8fc', color: isDarkMode ? 'white' : 'black' }}>
                        <div className="roadmap">
                            {selectOption === '' && (
                                <p className='m-0'>Please select an option to view the roadmap.</p>
                            )}
                            {selectOption === 'HTML' && <RoadmapHTML />}
                            {selectOption === 'CSS' && <RoadmapCSS />}
                            {selectOption === 'JAVASCRIPT' && <RoadmapJS />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Roadmap;
