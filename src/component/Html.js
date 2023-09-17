import React from 'react'
import './Html.css'

// import { Link } from 'react-router-dom'

export default function Html() {


    return (
        <>
            <div class="accordion container mt-5" id="accordionExample">
                <div class="accordion-item" >
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }}>
                            HTML Intro
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Intro</h1>
                                <hr />
                                <p>HTML is the standard markup language for creating Web pages.</p>
                                <hr />
                                <h3 className='mt-2'>What's HTML</h3>
                                <li>HTML stands for Hyper Text Markup Language</li>
                                <li>HTML is the standard markup language for creating Web pages</li>
                                <li>HTML describes the structure of a Web page</li>
                                <li>HTML consists of a series of elements</li>
                                <li>HTML elements tell the browser how to display the content</li>
                                <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            HTML Editor
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow-lg mb-5 mt-4'>
                                <h1 className='text-center mt-3'>HTML Editor</h1>
                                <hr />
                                <p>A simple text editor is all you need to learn HTML.</p>
                                <hr />
                                <h3 className='mt-4'>Learn HTML Using Notepad or TextEdit</h3>
                                <p>Web pages can be created and modified by using professional HTML editors.</p>
                                <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
                                <p>We believe that using a simple text editor is a good way to learn HTML.</p>
                                <p>We believe that using a simple text editor is a good way to learn HTML.</p>
                                <hr />
                                <h3 className='mt-3'>Step 1: Open Notepad (PC)</h3>
                                <p className='fw-bold '>Windows 8 or later:</p>
                                <p>Open the <span className='fw-bold'> Start Screen </span>(the window symbol at the bottom left on your screen). <span className='fw-bold'>Type Notepad.</span> </p>
                                <p className='fw-bold'>Windows 7 or earlier:</p>
                                <p className='fw-bold'>Open Start &gt; Programs &gt; Accessories &gt; Notepad</p>
                                <hr />
                                <h3 className=''>Step 1: Open TextEdit (Mac)</h3>
                                <p className='fw-bold '>Open Finder &gt; Applications &gt; TextEdit</p>
                                <p>Also change some preferences to get the application to save files correctly. In Preferences &gt; Format &gt; choose "Plain Text"</p>
                                <p className=''>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>
                                <p className='fw-bold'>Open Start &gt; Programs &gt; Accessories &gt; Notepad</p>
                                <hr />
                                <h3 className=''>Step 2: Write some HTML</h3>
                                <p className=''>Write or copy the following HTML code into Notepad:</p>
                                <code>
                                    <span>&lt;</span>html<span>&gt;</span>  <br />
                                    <span>&lt;</span>head<span>&gt;</span>  <br />
                                    <span>&lt;</span>title<span>&gt;</span><span>Page title</span><span>&lt;</span>/title<span>&gt;</span>  <br />
                                    <span>&lt;</span>/head<span>&gt;</span>  <br />
                                    <span>&lt;</span>body<span>&gt;</span>  <br />
                                    <span>&lt;</span>h1<span>&gt;</span><span>This is a heading</span><span>&lt;</span>/h1<span>&gt;</span>  <br />
                                    <span>&lt;</span>p<span>&gt;</span><span>This is a paragraph</span><span>&lt;</span>/p<span>&gt;</span>  <br />
                                    <span>&lt;</span>/body<span>&gt;</span>  <br />
                                    <span>&lt;</span>/html<span>&gt;</span>  <br />
                                </code> <br />
                                <img src="https://www.w3schools.com/html/img_notepad.png" alt="" />
                                <hr />
                                <h3 className=''>Step 3: Save the HTML Page</h3>
                                <p className='fw-bold '>Save the file on your computer. Select File &gt; Save as in the Notepad menu.</p>
                                <p>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</p>
                                <img src="https://www.w3schools.com/html/img_saveas.png" alt="" />
                                <hr />
                                <h3 className=''>Step 4: View the HTML Page in Your Browser</h3>
                                <p className='fw-bold '>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
                                <p>The result will look much like this:</p>
                                <img src="https://www.w3schools.com/html/img_chrome.png" alt="" />
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold  " style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            HTML Basic
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow-lg mb-5 mt-4'>
                                <h1 className='text-center'>HTML Basic</h1>
                                <hr />
                                <p>In this chapter we will show some basic HTML examples. </p>
                                <p> Don't worry if we use tags you have not learned about yet.</p>
                                <hr />
                                <h3 className='mt-5'>HTML Documents</h3>
                                <p>All HTML documents must start with a document type declaration: <code><span>&lt;</span>!DOCTYPE html<span>&gt;</span> </code>  </p>
                                <p>The HTML document itself begins with <code><span>&lt;</span>html<span>&gt;</span></code> and ends with <code><span>&lt;</span>/html<span>&gt;</span></code> </p>
                                <p>The visible part of the HTML document is between <code><span>&lt;</span>body<span>&gt;</span></code> and <code><span>&lt;</span>/body<span>&gt;</span></code></p>
                                <span className='mt-1 fw-bolder '>Example</span> <br />
                                <code>
                                    <span>&lt;</span>html<span>&gt;</span>  <br />
                                    <span>&lt;</span>head<span>&gt;</span>  <br />
                                    <span>&lt;</span>title<span>&gt;</span><span>Page title</span><span>&lt;</span>/title<span>&gt;</span>  <br />
                                    <span>&lt;</span>/head<span>&gt;</span>  <br />
                                    <span>&lt;</span>body<span>&gt;</span>  <br />
                                    <span>&lt;</span>h1<span>&gt;</span><span>This is a heading</span><span>&lt;</span>/h1<span>&gt;</span>  <br />
                                    <span>&lt;</span>p<span>&gt;</span><span>This is a paragraph</span><span>&lt;</span>/p<span>&gt;</span>  <br />
                                    <span>&lt;</span>/body<span>&gt;</span>  <br />
                                    <span>&lt;</span>/html<span>&gt;</span>  <br />
                                </code>
                                <hr />
                                <h3 className='mt-3'>The &lt;!DOCTYPE&gt; Declaration</h3>
                                <p>The <code><span>&lt;</span>!DOCTYPE<span>&gt;</span></code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
                                <p>It must only appear once, at the top of the page (before any HTML tags).</p>
                                <p>The <code><span>&lt;</span>!DOCTYPE<span>&gt;</span></code> declaration is not case sensitive.</p>
                                <hr />
                                <h3 className='mt-3'>HTML Headings</h3>
                                <p>HTML headings are defined with the <code><span>&lt;</span>h1<span>&gt;</span></code> to <code><span>&lt;</span>h6<span>&gt;</span></code> tags</p>
                                <p><code><span>&lt;</span>h1<span>&gt;</span></code> defines the most important heading. <code><span>&lt;</span>h6<span>&gt;</span></code>defines the least important heading.</p>
                                <hr />
                                <h3 className='mt-3'>HTML Paragraphs</h3>
                                <p>HTML paragraphs are defined with the <code><span>&lt;</span>p<span>&gt;</span></code> tag</p>
                                <hr />
                                <h3 className='mt-3'>HTML Links</h3>
                                <p>HTML links are defined with the <code><span>&lt;</span>a<span>&gt;</span></code> tag</p>
                                <hr />
                                <h3 className='mt-3'>HTML Images</h3>
                                <p>HTML images are defined with the<code><span>&lt;</span>img<span>&gt;</span></code> tag</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold " style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            HTML Elements
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow-lg mb-5 mt-4'>
                                <h1 className='text-center'>HTML Elements</h1>
                                <hr />
                                <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                                <hr />
                                <h3 className='mt-5'>HTML Elements</h3>
                                <p>The HTML <b>element</b> is everything from the start tag to the end tag:</p>
                                <p><span>&lt;</span>tagname<span>&gt;</span> Content goes here... <span>&lt;</span>/tagname<span>&gt;</span> </p>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Start Tag</th>
                                            <th scope="col">Element Content</th>
                                            <th scope="col">End Tag</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&lt;h1&gt;</td>
                                            <td>My First Heading</td>
                                            <td>&lt;/h1&gt;</td>
                                        </tr>
                                        <tr>
                                            <td>&lt;p&gt;</td>
                                            <td>My First Paragraph</td>
                                            <td>&lt;/p&gt;</td>
                                        </tr>
                                        <tr>
                                            <td>&lt;br&gt;</td>
                                            <td>none</td>
                                            <td>none</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <code>
                                    <span>&lt;</span>html<span>&gt;</span>  <br />
                                    <span>&lt;</span>head<span>&gt;</span>  <br />
                                    <span>&lt;</span>title<span>&gt;</span><span>Page title</span><span>&lt;</span>/title<span>&gt;</span>  <br />
                                    <span>&lt;</span>/head<span>&gt;</span>  <br />
                                    <span>&lt;</span>body<span>&gt;</span>  <br />
                                    <span>&lt;</span>h1<span>&gt;</span><span>This is a heading</span><span>&lt;</span>/h1<span>&gt;</span>  <br />
                                    <span>&lt;</span>p<span>&gt;</span><span>This is a paragraph</span><span>&lt;</span>/p<span>&gt;</span>  <br />
                                    <span>&lt;</span>/body<span>&gt;</span>  <br />
                                    <span>&lt;</span>/html<span>&gt;</span>  <br />
                                </code>
                                <hr />
                                <h3 className='mt-3'>The &lt;!DOCTYPE&gt; Declaration</h3>
                                <p>The <code><span>&lt;</span>!DOCTYPE<span>&gt;</span></code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
                                <p>It must only appear once, at the top of the page (before any HTML tags).</p>
                                <p>The <code><span>&lt;</span>!DOCTYPE<span>&gt;</span></code> declaration is not case sensitive.</p>
                                <hr />
                                <h3 className='mt-3'>HTML Headings</h3>
                                <p>HTML headings are defined with the <code><span>&lt;</span>h1<span>&gt;</span></code> to <code><span>&lt;</span>h6<span>&gt;</span></code> tags</p>
                                <p><code><span>&lt;</span>h1<span>&gt;</span></code> defines the most important heading. <code><span>&lt;</span>h6<span>&gt;</span></code>defines the least important heading.</p>
                                <hr />
                                <h3 className='mt-3'>HTML Paragraphs</h3>
                                <p>HTML paragraphs are defined with the <code><span>&lt;</span>p<span>&gt;</span></code> tag</p>
                                <hr />
                                <h3 className='mt-3'>HTML Links</h3>
                                <p>HTML links are defined with the <code><span>&lt;</span>a<span>&gt;</span></code> tag</p>
                                <hr />
                                <h3 className='mt-3'>HTML Images</h3>
                                <p>HTML images are defined with the<code><span>&lt;</span>img<span>&gt;</span></code> tag</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold " style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            HTML Attributes
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow-lg mb-5 mt-4'>
                                <h1 className='text-center'>HTML Attributes</h1>
                                <hr />
                                <p>HTML attributes provide additional information about HTML elements.</p>
                                <hr />
                                <h3 className='mt-2'>HTML Attributes</h3>
                                <li>All HTML elements can have attributes</li>
                                <li>Attributes provide additional information about elements</li>
                                <li>Attributes are always specified in the start tag</li>
                                <li>Attributes usually come in name/value pairs like: name="value"</li>
                                <hr />
                                <h3 className='mt-2'>The href Attribute</h3>
                                <p>The <code><span>&lt;</span>a<span>&gt;</span></code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link.</p>
                                <hr />
                                <h3 className='mt-2'>The src Attribute</h3>
                                <p>The <code><span>&lt;</span>img<span>&gt;</span></code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed.</p>
                                <hr />
                                <h3 className='mt-2'>The width and height Attributes</h3>
                                <p>The <code><span>&lt;</span>img<span>&gt;</span></code> tag should also contain the <code>width</code> and <code>height</code> attributes, which specify the width and height of the image (in pixels).</p>
                                <hr />
                                <h3 className='mt-2'>The alt Attribute</h3>
                                <p>The required <code>alt</code> attribute for the <code><span>&lt;</span>img<span>&gt;</span></code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the <code>src</code> attribute, or if the user uses a screen reader.</p>
                                <hr />
                                <h3 className='mt-2'>The style Attribute</h3>
                                <p>The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
                                <hr />
                                <h3 className='mt-2'>The lang Attribute</h3>
                                <p>You should always include the <code>lang</code> attribute inside the <code><span>&lt;</span>html<span>&gt;</span></code> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.</p>
                                <hr />
                                <h3 className='mt-2'>The title Attribute</h3>
                                <p>The <code>title</code> attribute defines some extra information about an element.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            HTML Heading
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Heading</h1>
                                <hr />
                                <p>HTML headings are titles or subtitles that you want to display on a webpage.</p>
                                <hr />
                                <span className='mt-1 fw-bold'>Example</span>
                                <h1 className='mt-3'>Heading 1</h1>
                                <h2>Heading 2</h2>
                                <h3>Heading 3</h3>
                                <h4>Heading 4</h4>
                                <h5>Heading 5</h5>
                                <h6>Heading 6</h6>
                                <hr />
                                <h3 className='mt-2'>HTML Headings</h3>
                                <p>HTML headings are defined with the <code><span>&lt;</span>h1<span>&gt; </span></code> to <code><span>&lt;</span>h6<span>&gt; </span></code>tags.</p>
                                <hr />
                                <span className='mt-1 fw-bold'>Example</span> <br />
                                <code>
                                    <span>&lt;</span>h1<span>&gt;</span>Heading 1<span>&lt;</span>/h1<span>&gt;</span> <br />
                                    <span>&lt;</span>h2<span>&gt;</span>Heading 2<span>&lt;</span>/h2<span>&gt;</span> <br />
                                    <span>&lt;</span>h3<span>&gt;</span>Heading 3<span>&lt;</span>/h3<span>&gt;</span> <br />
                                    <span>&lt;</span>h4<span>&gt;</span>Heading 4<span>&lt;</span>/h4<span>&gt;</span> <br />
                                    <span>&lt;</span>h5<span>&gt;</span>Heading 5<span>&lt;</span>/h5<span>&gt;</span> <br />
                                    <span>&lt;</span>h6<span>&gt;</span>Heading 6<span>&lt;</span>/h6<span>&gt;</span> <br />
                                </code>

                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            HTML Paragraphs
                        </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Paragraphs</h1>
                                <hr />
                                <p>A paragraph always starts on a new line, and is usually a block of text.</p>
                                <hr />
                                <h3 className='mt-2'>HTML Paragraphs</h3>
                                <p>The HTML <code><span>&lt;</span>p<span>&gt;</span></code>  element defines a paragraph.</p>
                                <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
                                <span className='mt-1 fw-bold'>Example</span> <br />
                                <code><span>&lt;</span>p<span>&gt;</span></code>This is a paragraph.<code><span>&lt;</span>/p<span>&gt;</span></code> <br />
                                <code><span>&lt;</span>p<span>&gt;</span></code>This is another paragraph.<code><span>&lt;</span>/p<span>&gt;</span></code> <br />
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            HTML Text Formatting
                        </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Text Formatting</h1>
                                <hr />
                                <p>HTML contains several elements for defining text with a special meaning.</p>
                                <hr />
                                <span className='mt-1 fw-bold'>Example</span> <br />
                                <p className='fw-bold mt-3'>This text is bold</p>
                                <p style={{ fontStyle: "italic" }}>This text is italic</p>
                                <hr />
                                <h3 className='mt-2'>HTML Formatting Elements</h3>
                                <p>Formatting elements were designed to display special types of text:</p>
                                <li> <code> <span>&lt;</span>b<span>&gt;</span> </code> - Bold text</li>
                                <li> <code> <span>&lt;</span>strong<span>&gt;</span> </code> - Important text</li>
                                <li> <code> <span>&lt;</span>i<span>&gt;</span> </code> - Italic text</li>
                                <li> <code> <span>&lt;</span>em<span>&gt;</span> </code> - Emphasized text</li>
                                <li> <code> <span>&lt;</span>mark<span>&gt;</span> </code> - Marked text</li>
                                <li> <code> <span>&lt;</span>small<span>&gt;</span> </code> - Smaller text</li>
                                <li> <code> <span>&lt;</span>del<span>&gt;</span> </code> - Deleted text</li>
                                <li> <code> <span>&lt;</span>ins<span>&gt;</span> </code> - Inserted text</li>
                                <li> <code> <span>&lt;</span>sub<span>&gt;</span> </code> - Subscript text</li>
                                <li> <code> <span>&lt;</span>sup<span>&gt;</span> </code> - Superscript text</li>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            HTML Quotation and Citation Elements
                        </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Quotation</h1>
                                <hr />
                                <p>In this chapter we will go through the <code> <span>&lt;</span>blockquote<span>&gt;</span> </code>,<code> <span>&lt;</span>q<span>&gt;</span> </code>,<code> <span>&lt;</span>abbr<span>&gt;</span> </code>,<code> <span>&lt;</span>address<span>&gt;</span> </code>,<code> <span>&lt;</span>cite<span>&gt;</span> </code>, and <code> <span>&lt;</span>bdo<span>&gt;</span> </code>HTML elements..</p>
                                <hr />
                                <span className='mt-1 fw-bold'>Example</span> <br />
                                <p>Here is a quote from WWF's website:</p>
                                <blockquote cite="http://www.worldwildlife.org/who/index.html">
                                    For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
                                </blockquote>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>blockquote<span>&gt;</span></code> for Quotations</h3>
                                <p>The HTML <code><span>&lt;</span>blockquote<span>&gt;</span></code> element defines a section that is quoted from another source.</p>
                                <p>Browsers usually indent <code><span>&lt;</span>blockquote<span>&gt;</span></code>elements.</p>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>q<span>&gt;</span></code> for Short Quotations</h3>
                                <p>The HTML <code><span>&lt;</span>q<span>&gt;</span></code> tag defines a short quotation</p>
                                <p>Browsers normally insert quotation marks around the quotation.</p>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>abbr<span>&gt;</span></code> for Abbreviations</h3>
                                <p>The HTML <code><span>&lt;</span>abbr<span>&gt;</span></code> tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
                                <p>Marking abbreviations can give useful information to browsers, translation systems and search-engines.</p>
                                <p><strong>Tip</strong> : Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element. </p>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>address<span>&gt;</span></code> for Contact Information</h3>
                                <p>The HTML <code><span>&lt;</span>address<span>&gt;</span></code> tag defines the contact information for the author/owner of a document or an article.</p>
                                <p>The contact information can be an email address, URL, physical address, phone number, social media handle, etc.</p>
                                <p>The text in the <code><span>&lt;</span>address<span>&gt;</span></code> element usually renders in <i>italic</i>, and browsers will always add a line break before and after the <code><span>&lt;</span>address<span>&gt;</span></code>  element.</p>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>cite<span>&gt;</span></code> for Work Title</h3>
                                <p>The HTML <code><span>&lt;</span>cite<span>&gt;</span></code> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.)</p>
                                <p><strong>Note</strong> : A person's name is not the title of a work.</p>
                                <p>The text in the <code><span>&lt;</span>cite<span>&gt;</span></code> element usually renders in <i>italic</i></p>
                                <hr />
                                <h3 className='mt-2'>HTML <code><span>&lt;</span>bdo<span>&gt;</span></code> for Bi-Directional Override</h3>
                                <p>BDO stands for Bi-Directional Override.</p>
                                <p>The HTML <code><span>&lt;</span>bdo<span>&gt;</span></code>tag is used to override the current text direction</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            HTML Comments
                        </button>
                    </h2>
                    <div id="collapseTen" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Comments</h1>
                                <hr />
                                <p>HTML comments are not displayed in the browser, but they can help document your HTML source code.</p>
                                <hr />
                                <h3 className='mt-2'>HTML Comment Tag</h3>
                                <p>You can add comments to your HTML source by using the following syntax:</p>
                                <p>&lt;!-- Write your comments here --&gt;</p>
                                <p> <strong>Note</strong>: Comments are not displayed by the browser, but they can help document your HTML source code.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                            HTML Colors
                        </button>
                    </h2>
                    <div id="collapseEleven" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Colors</h1>
                                <hr />
                                <p>HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.</p>
                                <hr />
                                <h3 className='mt-2'>Text Color</h3>
                                <h4 style={{ color: "red" }}>Hello World</h4>
                                <p><code><span>&lt;</span>h1 style="color:Tomato;"<span>&gt;</span></code>Hello World<code><span>&lt;</span>/h1<span>&gt;</span></code></p>
                                <hr />
                                <h3 className='mt-2'>Background Color</h3>
                                <h4 className='text-center' style={{ backgroundColor: "dodgerblue" }}>Hello World</h4>
                                <p><code><span>&lt;</span>h1 style="background-color:DodgerBlue;"<span>&gt;</span></code>Hello World<code><span>&lt;</span>/h1<span>&gt;</span></code></p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                            HTML Links
                        </button>
                    </h2>
                    <div id="collapseTwelve" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Links</h1>
                                <hr />
                                <p>Links are found in nearly all web pages. Links allow users to click their way from page to page.</p>
                                <hr />
                                <h3 className='mt-2'>HTML Links - Hyperlinks</h3>
                                <p>HTML links are hyperlinks.</p>
                                <p>You can click on a link and jump to another document.</p>
                                <p>When you move the mouse over a link, the mouse arrow will turn into a little hand.</p>
                                <p><strong>Note:</strong> A link does not have to be text. A link can be an image or any other HTML element!</p>
                                <hr />
                                <h3 className='mt-2'>HTML Links - Syntax</h3>
                                <p>The HTML <code><span>&lt;</span>a<span>&gt;</span></code> tag defines a hyperlink. It has the following syntax:</p>
                                <code><span>&lt;</span>a href="url"<span>&gt;</span></code>link text<code><span>&lt;</span>/a<span>&gt;</span></code>
                                <p>The most important attribute of the <code><span>&lt;</span>a<span>&gt;</span></code> element is the <code>href</code> attribute, which indicates the link's destination.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                            HTML Images
                        </button>
                    </h2>
                    <div id="collapseThirteen" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Images</h1>
                                <hr />
                                <p>Images can improve the design and the appearance of a web page.</p>
                                <hr />
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className="col"><img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" style={{ width: "100%" }} /></div>
                                    <div className="col"><img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" style={{ width: "100%" }} /></div>
                                    <div className="col"><img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="" style={{ width: "100%" }} /></div>
                                </div>
                                <hr />
                                <span className='mt-1 fw-bold'>Example</span>
                                <p><code><span>&lt;</span>img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"<span>&gt;</span></code></p>
                                <hr />
                                <h3 className='mt-2'>HTML Images Syntax</h3>
                                <p>The HTML <code><span>&lt;</span>img<span>&gt;</span></code> tag is used to embed an image in a web page.</p>
                                <p>Images are not technically inserted into a web page; images are linked to web pages. The <code><span>&lt;</span>img<span>&gt;</span></code> tag creates a holding space for the referenced image.</p>
                                <p>The <code><span>&lt;</span>img<span>&gt;</span></code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
                                <p>The <code><span>&lt;</span>img<span>&gt;</span></code> tag has two required attributes:</p>
                                <li>src - Specifies the path to the image</li>
                                <li>alt - Specifies an alternate text for the image</li>
                                <hr />
                                <h3 className='mt-2'>The src Attribute</h3>
                                <p>The required <code>src</code> attribute specifies the path (URL) to the image.</p>
                                <hr />
                                <h3 className='mt-2'>The alt Attribute</h3>
                                <p>The required <code>alt</code> attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed fw-bold" type="button" style={{ backgroundColor: "#fbe8fc", border: "1px solid #da33e6" }} data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                            HTML Favicon
                        </button>
                    </h2>
                    <div id="collapseFourteen" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <section className='border p-5 shadow mb-2 mt-4'>
                                <h1 className='text-center mt-1'>HTML Favicon</h1>
                                <hr />
                                <p>A favicon is a small image displayed next to the page title in the browser tab.</p>
                                <hr />
                                <h3 className='mt-2'>How To Add a Favicon in HTML</h3>
                                <p>You can use any image you like as your favicon. You can also create your own favicon on sites like https://www.favicon.cc.</p>
                                <p><strong>Tip:</strong> A favicon is a small image, so it should be a simple image with high contrast.</p>
                                <p>A favicon image is displayed to the left of the page title in the browser tab, like this:</p>
                                <img src="https://www.w3schools.com/html/img_favicon.png" alt="" className='mb-2' />
                                <p>To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder. A common name for a favicon image is "favicon.ico".</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
