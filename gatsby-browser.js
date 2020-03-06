import React from 'react'
import Transition from './src/components/Transition'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  );
  if (answer === true) {
    window.location.reload();
  }
};



export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}
