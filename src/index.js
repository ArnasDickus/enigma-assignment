import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


   /*
-------------------------------------------------------------------------------------------------------------------------------------------
   Problem that my data is getting overwritten. I need to check it.
   Create a object data where you could put state

   REGISTER FORM
   1) Check out stack overflow answer DONE
   2) I did my example. didn't worked DONE
   3) Watch tutorial about local storage https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2 Not relevant saves only one value
   4) Watch second tutorial https://alligator.io/js/introduction-localstorage-sessionstorage/
   5) Writing stack overflow question I was able to figure it out. Turns out My logic webhelper logic worked.

    LOGIN FORM
    1) Add some margin-top DONE 
    2) Take inputs from login form DONE
    3) Compare inputs to local storage data simple for if statement 
      for localstorage length
      Compare this.state email and password with local storage email password
   4) Looping through if first element is not right i get login failed and then login sucess.
   5) I asked on Stack Overflow time to go to other side.  I got the answer

   DISPLAY
   1) Display values somehow. Check tutorial Watch tutorial about local storage https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2 Not relevant saves only one value
   2) Display values somehow. Check this tutorial https://stackoverflow.com/questions/43668808/render-data-from-localstorage-with-react https://gist.github.com/idjuradj/575ba66981cccbfae23486cc3e047fac Suceeded finally
   3) Stylize buttons. DONE
   4) If I click button Delete delete Item
      4.1) Problem is my DisplayList component is stateless. I need to convert it 
      with classes. So that I could use states for it. Success
      4.2) Select button delete. Done
      4.3) Select data from local storage. Compare it with current data and delete it. Done
      4.4) Delete button. data.splice(index, 1) It works, but I need to refresh to see effect. DONE
      4.5) Delete button that effect would be immediate. 1) Tried this.state = {data: data} and setState but didn't worked
      4.6) Couldn't figure it out. Asked on stackOverflow. Found answer thanks stack overflow  https://stackoverflow.com/questions/54805428/re-render-react-component-after-i-deleted-from-local-storage/54805729#54805729
   5) If I click button Edit Modal appears. Allows me to input data, and save it.    
      5.1) If I click on Edit show modal. DONE https://react-bootstrap.github.io/components/modal/
      5.2) Create Form inputs where you could input data. DONE
      5.3) Compare local storage data with current data.
         We have 3 values:
          Local storage values. Have access to it.
          Edited values: have access to it no problem.
          Current values: no access.
          If I click edit. and save changes how to know which local storage
          value to change.
      5.4) Overwrite local storage data input data


-------------------------------------------------------------------------------------------------------------------------------------------
  */