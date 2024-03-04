import React, { useState, useEffect } from 'react'
import './Compiler.css'
import Boxes from './Boxes'

const Compiler = () => {
  const [html, setHTML] = useState('')
  const [css, setCSS] = useState('')
  const [js, setJs] = useState('')
  const [srcDocs, setSrcDocs] = useState('')

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDocs(`
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
      </html>
      `)
    }, 500)

    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Boxes
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHTML} />
        <Boxes
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCSS} />
        <Boxes
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDocs}
          title='output'
          sandbox='allow-scripts allow-modals'
          frameBorder="0"
          width='100%'
          height='100%'
        />
      </div>
    </>
  )
}

export default Compiler