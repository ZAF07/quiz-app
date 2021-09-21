import React, {useRef, useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
function Resources() {

    // alan instance
  const alanInstance = useRef(null);
  const currentPage = window.location.pathname

    useEffect(() => {

    if (!alanInstance.current) {

      alanInstance.current =  alanBtn({
        key: '9fa16eb26954d9748df6b4837a7673222e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
  
          if (commandData.command === 'yes') {
            // handleNextQs();
          }
  
          // if (commandData.answer) {
  
          //   /* received the selected answer from ALAN AI, should store this in some state to update the user DB if wrong answer
          //    also use this data to instantly check if answer selected is correct and react accordingly
          //    vvvvvvvvvvvvvvvv
          //    */
  
          //   alert('User selected : ', commandData.answer);
          //   // handleNextQs();
          // }
  
          // auto play alan
          if (commandData.command === 'auto') {
            alert('auto');
          }
        }
      })
      // AUTO ALAN
      alanInstance.current.activate();
      alanInstance.current.playText(`Hello there! This is the resources page`);
      // alanInstance.current.deactivate();
    }
  }, [])

  console.log('alan -> ', alanInstance);

  return (
    <div>
      <h1>Resources page</h1>  
    </div>
  )
}

export default Resources