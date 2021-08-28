import { css } from '@emotion/css';
import { createUseStyles } from 'react-jss';
import styled from 'styled-components';

// NOTE: moved this code into a separate file to keep app.tsx less cluttered

/*
NOTE: Emotion
- Pros
  - Tradional CSS syntax
- Cons 
  - CSS is mixed in JS files
  - You have to make a new variable for each HTML element
*/
export const emotionStyle = css`
  background-color:  dodgerblue;
  border-radius: 0.25rem;
  border: 0px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  padding: .375rem .75rem;
`;

/*
NOTE: Styled Components
- Pros 
  - Tradional CSS syntax
- Cons 
  - CSS is mixed in JS files
  - You have to make a new variable for each HTML element
*/
export const Button = styled.button`
  background-color:  dodgerblue;
  border-radius: 0.25rem;
  border: 0px;
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  padding: .375rem .75rem;
`;



/*
NOTE: JSS
- Pros
  - Easy to apply classes to HTML tags
- Cons
  - CSS is mixed in JS files
  - Can't just write regular CSS. Have to write CSS as a JS hashmap
*/
export const useStyles = createUseStyles({
  jssButton: {
    backgroundColor:  'dodgerblue',
    borderRadius: '0.25rem',
    border: '0px',
    color: '#fff',
    fontSize: '1rem',
    lineHeight: '1.5',
    padding: '.375rem .75rem',
  }
});