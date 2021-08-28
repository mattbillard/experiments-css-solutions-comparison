
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';




// NOTE: traditional CSS
import './traditional.css';

// NOTE: Bootstrap is a popular CSS framework
import 'bootstrap/dist/css/bootstrap.min.css';

// NOTE: multiple CSS-in-JS solutions
import { emotionStyle, Button, useStyles } from './css-in-js';

// NOTE: typed CSS prevents CSS conflicts even if different teams choose the same names for CSS classes
import styles from './typed.module.css';




const App = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>CSS Solutions Comparison:</h1> 
      <h2>CSS vs CSS-in-JS vs Typed CSS Modules</h2>
      <br />
      <br />

      <h2>Instructions:</h2>
      <p>Inspect the buttons' classes in the HTML, and then look at the code in...</p>
      <ul>
        <li>README.md</li>
        <li>app.tsx</li>
        <li>traditional.css versus typed.module.css</li>
        <li>webpack.config.js</li>
      </ul>
      <br />

      <h4>1) Traditional approaches</h4>
      <button className="traditional-button"> Traditional CSS button</button> <br /><br />
      <button className="btn btn-primary">    Bootstrap CSS framework button</button> <br /><br />
      
      <br /><br />

      <h4>2) CSS in JS solutions</h4>
      <button className={emotionStyle}>       Emotion button</button> <br /><br />
      <Button>                                Styled Components button</Button> <br /><br />
      <button className={classes.jssButton}>  JSS button</button> <br /><br />

      <br /><br />

      <h4>3) Typed CSS modules (best solution)</h4>
      <button className={styles.typedButton}> Typed CSS Module button</button> <br /><br />
    </div>
  );
}

export default hot(App);
