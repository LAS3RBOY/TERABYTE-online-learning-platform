import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import './Roadmap.css'
import { FaHtml5 } from "react-icons/fa";
const RoadmapHTML = () => {

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
          <h3 className="vertical-timeline-element-title">HTML Basics</h3>
          <hr />
          <p>
            <ol>
              <li>HTML Introduction</li>
              <li>HTML Basics</li>
              <li>HTML Layout</li>
              <li>HTML Editor</li>
              <li>HTML Comments</li>
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
          <h3 className="vertical-timeline-element-title">HTML Basic Elements</h3>
          <p>
            <ol>
              <li>HTML Heading</li>
              <li>HTML Paragraphs</li>
              <li>HTML Style Tag</li>
              <li>HTML Text Formatting Tag</li>
              <li>HTML Color Styles and HSL</li>
              <li>HTML hr Tag</li>
              <li>HTML br Tag</li>
              <li>HTML Block and Inline Elements</li>
              <li>HTML Links</li>
              <li>HTML Images</li>
              <li>HTML Iframes</li>
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
          <h3 className="vertical-timeline-element-title">HTML Attributes</h3>
          <p>
            <ol>
              <li>HTML Class Attribute</li>
              <li>HTML Id Attribute</li>
              <li>HTML title Attribute</li>
              <li>HTML style Attribute</li>
              <li>HTML | height Attribute</li>
              <li>HTML src Attribute</li>
              <li>HTML alt Attribute</li>
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
          <h3 className="vertical-timeline-element-title">HTML Lists</h3>
          <p>
            <ol>
              <li>HTML ol Tag</li>
              <li>HTML ul Tag</li>
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
          <h3 className="vertical-timeline-element-title">HTML Input Field and Forms</h3>
          <p>
            <ol>
              <li>HTML input Tag</li>
              <li>HTML form Tag</li>
              <li>HTML | form attribute</li>
              <li>HTML Forms</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* --------------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">HTML Tables</h3>
          <p>
            <ol>
              <li>HTML Tables</li>
              <li>HTML thead Tag</li>
              <li>HTML Tbody Tag</li>
              <li>HTML td Tag</li>
              <li>HTML tr Tag</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">HTML Graphics</h3>
          <p>
            <ol>
              <li>HTML SVG Basics</li>
              <li>HTML Canvas</li>
            </ol>
          </p>
        </VerticalTimelineElement>
        {/* ------------------------------------------------------------------------------------------------------------ */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#da33e6', color: 'black' }}
          iconStyle={{ background: '#da33e6', color: '#fff' }}
          icon={<FaHtml5 />}
        >
          <h3 className="vertical-timeline-element-title">HTML Media</h3>
          <p>
            <ol>
              <li>HTML media Attribute</li>
              <li>HTML5 video</li>
              <li>HTML audio Tag</li>
            </ol>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </>
  )
}

export default RoadmapHTML