import React, { useEffect, useRef } from 'react';

export const AcfCustomHtml = ({ customHtml }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.querySelector('iframe');
      if (iframe) {
        iframe.onload = () => {
          console.log('Iframe is loaded and should be visible now.');
          // If you need to perform any action after the iframe loads
        };
      }
    }
  }, []);

  return (
    <div ref={iframeRef} className="p-4 overflow-auto rounded-lg shadow-lg" style={{ minHeight: '500px' }}>
      <div dangerouslySetInnerHTML={{ __html: customHtml }} />
    </div>
  );
};

// import React, { useEffect, useRef } from 'react';

// export const AcfCustomHtml = ({ src }) => {
//   const iframeRef = useRef(null);


//   useEffect(() => {
//     const handleResizeMessage = (event) => {
//       console.log(event.origin, event.data);
//       // For development purposes, temporarily allow local origin or remove check
//       if (event.origin.startsWith('http://localhost:3002')) {
//         if (event.data && event.data.type === 'setHeight') {
//           iframeRef.current.style.height = `${event.data.height}px`;
//         }
//       }
//     };
    
    
  
//     window.addEventListener('message', handleResizeMessage);
  
//     return () => {
//       window.removeEventListener('message', handleResizeMessage);
//     };
//   }, []);
  

//   useEffect(() => {
//     // Handler to post message or resize iframe after loading
//     const handleIframeLoad = () => {
//       setTimeout(() => {
//         iframeRef.current.contentWindow.postMessage(
//           { type: 'adjustHeight', value: 'desiredHeight' },
//           '*'
//         );
//       }, 1000); // Delay of 1000ms (1 second)
//     };
    

//     if (iframeRef.current) {
//       iframeRef.current.addEventListener('load', handleIframeLoad);
//     }

//     return () => {
//       if (iframeRef.current) {
//         iframeRef.current.removeEventListener('load', handleIframeLoad);
//       }
//     };
//   }, []);

//   return (
//     // <div style={{ minHeight: '539px', overflow: 'hidden' }}>
//     <div style={{ minHeight: '539px', overflow: 'hidden', width: '100%' }}>

//       <iframe
//         ref={iframeRef}
//         src={src}
//         id="JotFormIFrame-71946782144969"
//         title="FMA Contact Us Form"
//         allowFullScreen={true}  // Not allowfullscreen="true"
//         allow="geolocation; microphone; camera"
//         frameBorder="0"
//         style={{ width: '100%', height: '539px', border: 'none' }}
//         scrolling="no"
//         onLoad={() => console.log('Iframe loaded.')} // Optionally handle onload event
//       ></iframe>
//     </div>
//   );
// };


