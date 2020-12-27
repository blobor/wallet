import React, { ReactElement, useEffect, useRef, useState } from 'react';

import './ScanScreen.css'

export const ScanScreen = (): ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (videoRef.current == null) {
      return () => {}
    }

    const videoElement = videoRef.current

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: {
          ideal: 'environment',
        },
      },
    }).then(mediaStream => {
      videoElement.srcObject = mediaStream
    }).catch((error: DOMException) => {
      setErrorMessage(`${error.name}: ${error.message}`)
    })

    return () => {
      if (videoElement.srcObject == null) {
        return;
      }

      const stream = videoElement.srcObject
      if (stream === null || !(stream instanceof MediaStream)) {
        return
      }

      for (const videoTrack of stream.getTracks()) {
        videoTrack.stop()
      }
    }
  }, [])

  if (errorMessage.length > 0) {
    return (
      <div>{errorMessage}</div>
    )
  }

  return (
    <div className='scanner__container'>
      <video ref={videoRef} className='scanner__video' autoPlay muted playsInline />
    </div>
  );
}
