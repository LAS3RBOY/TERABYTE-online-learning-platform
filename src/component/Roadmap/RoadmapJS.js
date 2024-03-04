import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import './Roadmap.css'
import { FaHtml5 } from "react-icons/fa";
const RoadmapJS = () => {

  return (
    <>
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Basics</h3>
          <hr />
          <p>
            <ol>
              <li>Introduction to JavaScript</li>
              <li>JavaScript Syntax</li>
              <li>How to add JavaScript in HTML document?</li>
              <li>HTML Comments</li>
              <li>JavaScript Versions</li>
              <li>Variables and DataTypes in JavaScript</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Statement</h3>
          <p>
            <ol>
              <li>JavaScript Break Statement</li>
              <li>JavaScript Continue Statement </li>
              <li>JavaScript return Statement</li>
              <li>JavaScript if-else</li>
              <li>JavaScript switch Statement</li>
              <li>JavaScript Errors Throw and Try to Catch</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Loops</h3>
          <p>
            <ol>
              <li>JavaScript For Loop</li>
              <li>JavaScript While Loop</li>
              <li>JavaScript for in Loop</li>
              <li>JavaScript for...of Loop</li>
              <li>JavaScript do...while Loop</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Operator</h3>
          <p>
            <ol>
              <li>JavaScript Arithmetic Operators</li>
              <li>JavaScript Assignment Operators</li>
              <li>JavaScript Comparison Operators</li>
              <li>JavaScript Logical Operators</li>
              <li>JavaScript Bitwise Operators</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* ----------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Built-in Objects</h3>
          <p>
            <ol>
              <li>JavaScript Array</li>
              <li>JavaScript String</li>
              <li>JavaScript Numbers</li>
              <li>JavaScript Math Object</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Functions</h3>
          <p>
            <ol>
              <li>Introduction to Functions</li>
              <li>Function Declarations vs Expressions</li>
              <li>Anonymous Functions</li>
              <li>Arrow Functions</li>
              <li>Function Parameters and Return</li>
            </ol>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Objects</h3>
          <p>
            <ol>
              <li>Object Properties and Methods</li>
              <li>Object Constructors</li>
              <li>Prototypes and Inheritance</li>
              <li>Object Destructuring</li>
              <li>ES6 Object Methods</li>
            </ol>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript DOM Manipulation</h3>
          <p>
            <ol>
              <li>Introduction to the DOM</li>
              <li>Selecting DOM Elements</li>
              <li>Manipulating DOM Elements</li>
              <li>Creating and Removing Elements</li>
              <li>Event Handling in JavaScript</li>
            </ol>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript AJAX and APIs</h3>
          <p>
            <ol>
              <li>Introduction to AJAX</li>
              <li>XMLHttpRequest and Fetch API</li>
              <li>Working with JSON Data</li>
              <li>Consuming APIs</li>
              <li>Asynchronous JavaScript</li>
            </ol>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </>
  )
}

export default RoadmapJS