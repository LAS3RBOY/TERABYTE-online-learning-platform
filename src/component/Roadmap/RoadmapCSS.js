import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCss3Alt } from "react-icons/fa";
const RoadmapCSS = () => {
  return (
    <>
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Basics</h3>
          <hr />
          <p>
            <ol>
              <li>CSS Introduction</li>
              <li>CSS Syntax</li>
              <li>Type of CSS (Cascading Style Sheet)</li>
              <li>CSS Comments</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Selectors</h3>
          <p>
            <ol>
              <li>CSS #id Selectors</li>
              <li>CSS Class Selector</li>
              <li>CSS * Selector</li>
              <li>CSS Attribute Selector</li>
              <li>CSS Psuedo-classes</li>
              <li>CSS element Selector</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Properties</h3>
          <p>
            <ol>
              <li>CSS Color</li>
              <li>CSS Background</li>
              <li>CSS Border</li>
              <li>CSS Margins and Padding</li>
              <li>CSS Fonts</li>
              <li>CSS cursor Property</li>
              <li>CSS Combinators</li>
              <li>CSS Pseudo Elements</li>
              <li>CSS Float</li>
              <li>CSS Image Sprites</li>
              <li>CSS Units</li>
              <li>CSS z-index Property</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Designing</h3>
          <p>
            <ol>
              <li>CSS Grid Layout Module</li>
              <li>CSS Tables</li>
              <li>CSS Box Model</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* ----------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Function</h3>
          <p>
            <ol>
              <li>CSS attr() Function</li>
              <li>CSS calc() Function</li>
              <li>CSS env() Function</li>
              <li>CSS hsl() Function</li>
              <li>CSS rgb() Function</li>
              <li>CSS url() Function</li>
              <li>CSS var() Function</li>              
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaCss3Alt />}
        >
          <h3 className="vertical-timeline-element-title">CSS Advanced</h3>
          <p>
            <ol>
              <li>CSS 2D Transforms</li>
              <li>CSS 3D Transforms</li>
              <li>CSS Pagination</li>
              <li>CSS media queries</li>
              <li>CSS Gradients</li>
              <li>CSS Shadow Effects</li>
              <li>CSS Animation</li>
              <li>CSS Border Images</li>
              <li>CSS Buttons</li>
              <li>Advance CSS Layout with flexbox</li>
              <li>CSS Variables</li>
              <li>Adding HTML entities using CSS content</li>
              <li>CSS | Web Fonts</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* ------------------------------------------------------------------------------------------------------- */}
      </VerticalTimeline>
    </>
  )
}

export default RoadmapCSS