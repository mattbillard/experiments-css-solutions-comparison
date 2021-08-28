
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import 'bootstrap';



// NOTE: traditional/untyped CSS
import './untyped.css';

// NOTE: untyped CSS works great for CSS libraries like Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// NOTE: typed CSS prevents CSS conflicts even if different teams choose the same names for CSS classes
import styles from './typed.module.css';



const App = () => {
  return (
    <div>
      <h1>Typed CSS Modules vs Traditional/Untyped CSS</h1> 
      <br />

      <h2>Instructions:</h2>
      <p>Inspect the buttons' classes in the HTML, and then look at the code in...</p>
      <ul>
        <li>app.tsx</li>
        <li>untyled.scss versus typed.module.scss</li>
        <li>webpack.config.js</li>
      </ul>
      <br />

      <button className="traditional-button"> Traditional/Untyped CSS button</button> <br /><br />
      <button className="btn btn-primary">    Bootstrap button</button> <br /><br />
      <button className={styles.typedButton}> Typed CSS Module button</button> <br /><br />
    </div>
  );
}

export default hot(App);
