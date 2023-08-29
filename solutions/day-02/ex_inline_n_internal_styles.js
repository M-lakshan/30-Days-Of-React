// Q 01] Create a style object for the main JSX
let style_main = {
  display: 'block',
  border: '1px solid purple',
  color: 'pink',
  fontSize: '18px',
}

// Q 02] Create a style object for the footer and app JSX
let style_app = {
  display: 'block',
  height: '100%',
  width: '100%'
}

let style_footer = {
  display: 'block',
  border: '1px solid yellow',
  color: 'orange',
  fontSize: '16px',
}

// Q 03] Add more styles to the JSX elements
// Q 04] Apply different styles to your JSX elements
style_app['height'] = "100vh";

style_footer['display'] = "flex";
style_footer['alignItems'] = "center";
style_footer['justifyContent'] = "space-around";

// Q 06] Practice how to make JSX element and injecting dynamic data
style_main['color'] = (new Date().getHours() > 12) ? "pink" : "white";

// Q 05] inject styles
// JSX element for the main part of the website
const main = (
  <main style={style_main}>{/*injecting styles*/}
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// JSX element for the footer part of the website
const footer = (
  <footer style={style_footer}>{/*injecting styles*/}
    <p>Copyright 2020</p>
  </footer>
)

// JSX element which contain all, it is a container or parent
const app = (
  <div style={style_app}>{/*injecting styles*/}
    {header}
    {main}
    {footer}
  </div>
)
