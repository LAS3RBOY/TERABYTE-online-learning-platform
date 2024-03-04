import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { CgArrowsExpandRight, CgCompressRight } from "react-icons/cg";

import { Controlled as ControlledEditor } from 'react-codemirror2'

const Boxes = (props) => {
  const {
    language,
    displayName,
    value,
    onChange
  } = props

  const [open, setOpen] = useState(true)
  const handleChange = (editor, data, value) => {
    onChange(value)
  }
  return (
    <>
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button onClick={() => setOpen(prevOpen => !prevOpen)} className=' bg-transparent border-0 ms-1'>
            {open ? <CgCompressRight color='white'/> : <CgArrowsExpandRight color='white'/>}
          </button>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className='code-mirror-wrapper rounded-bottom-5 '
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true
          }}
        />
      </div>
    </>
  )
}

export default Boxes