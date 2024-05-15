// import { useState, useRef } from 'react';

// const CameraCapture = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const startCamera = async () => {
    
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
//       videoRef.current.srcObject = stream;
//       setIsVideoPlaying(true);
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const captureImage = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     // Draw the current frame from the video on the canvas
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Stop the video stream
//     const stream = video.srcObject;
//     const tracks = stream.getTracks();
//     tracks.forEach(track => track.stop());

//     // Hide the video and display the canvas
//     video.style.display = 'none';
//     canvas.style.display = 'block';
//   };

//   return (
//     <div>
//       {isVideoPlaying ? (
//         <>
//           <video ref={videoRef} width="640" height="480" autoPlay />
//           <button onClick={captureImage}>Capture</button>
//         </>
//       ) : (
//         <button onClick={startCamera}>Start Camera</button>
//       )}
//       <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
//     </div>
//   );
// };

// export default CameraCapture;

// import React, { useState, useRef } from 'react';

// const CameraCapture = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         setIsVideoPlaying(true);
//       } else {
//         console.error('Video reference is null.');
//       }
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const captureImage = () => {
//     if (!videoRef.current || !canvasRef.current) {
//       console.error('Video or canvas reference is null.');
//       return;
//     }

//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');

//     // Draw the current frame from the video on the canvas
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Stop the video stream
//     const stream = video.srcObject;
//     const tracks = stream.getTracks();
//     tracks.forEach(track => track.stop());

//     // Hide the video and display the canvas
//     video.style.display = 'none';
//     canvas.style.display = 'block';
//   };

//   return (
//     <div>
//       {isVideoPlaying ? (
//         <>
//           <video ref={videoRef} width="640" height="480" autoPlay />
//           <button onClick={captureImage}>Capture</button>
//         </>
//       ) : (
//         <button onClick={startCamera}>Start Camera</button>
//       )}
//       <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
//     </div>
//   );
// };

// export default CameraCapture;

import { useState, useRef } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsVideoPlaying(true);
      } else {
        console.error('Video reference is null.');
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) {
      console.error('Video or canvas reference is null.');
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Draw the current frame from the video on the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Stop the video stream
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());

    // Hide the video and display the canvas
    video.style.display = 'none';
    canvas.style.display = 'block';
  };

  return (
    <div>
      {isVideoPlaying ? (
        <>
          <video ref={videoRef} width="640" height="480" autoPlay />
          <button onClick={captureImage}>Capture</button>
        </>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
    </div>
  );
};

export default CameraCapture;
