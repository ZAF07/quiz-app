import React, {useRef, useEffect} from 'react';
import {
  useLocation,
  useParams,
  Redirect,
  Route
} from 'react-router-dom'
import alanBtn from "@alan-ai/alan-sdk-web";
function Learn() {

    // alan instance
  const alanInstance = useRef(null);
  // const currentPage = window.location.pathname

  const location = useLocation().pathname;
  const {topic} = useParams();
  console.log('SLUG -> ', topic);
  console.log(location);

    useEffect(() => {
    if (!alanInstance.current) {

      alanInstance.current =  alanBtn({
        key: '9fa16eb26954d9748df6b4837a7673222e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
  
          if (commandData.command === 'yes') {
            // handleNextQs();
          }
  
          // auto play alan
          if (commandData.command === 'auto') {
            alert('auto');
          }

          //  BACK HOME
          if (commandData.backHome) {
         
            window.location.assign('/');
          }
        }
      })
      // AUTO ALAN
      alanInstance.current.activate();
      alanInstance.current.playText(`lets learn ${topic}`);
    } 
  }, [])

  console.log('alan boy -> ', alanInstance);

  return (
    <div>
      <h1>Learn page</h1>  
    </div>
  )
}

export default Learn;