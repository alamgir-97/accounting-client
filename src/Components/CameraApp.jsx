import { useState, useRef } from 'react';

const CameraApp = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);

  const startRecording = () => {
    const stream = videoRef.current.srcObject;
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      // Handle recorded video data
      const blob = new Blob([e.data], { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      // Stream the recorded video
      const videoElement = document.createElement('video');
      videoElement.src = url;
      videoElement.controls = true;
      document.body.appendChild(videoElement);
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleStartClick = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setStream(stream);
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  const handleStopClick = () => {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  };

  return (
    <div className='border m-8 p-4 flex gap-4 rounded-md justify-center'>
      <video ref={videoRef} autoPlay />
      {!isRecording ? <button onClick={startRecording} className='text-white bg-fuchsia-600'>Start Recording</button> : <button onClick={stopRecording} className='text-white bg-fuchsia-600'>Stop Recording</button>}
      <button onClick={handleStartClick} className='text-white bg-fuchsia-400'>Start Camera</button>
      <button onClick={handleStopClick} className='text-white bg-fuchsia-600'>Stop Camera</button>
    </div>
  );
};

export default CameraApp;