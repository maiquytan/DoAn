import React, { useEffect, useRef } from 'react';

function ChatWidget() {
  const divRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://uhchat.net/code.php?f=36cec1";
    script.async = true;
    divRef.current.appendChild(script);

    return () => {
      if (divRef.current) {
        divRef.current.removeChild(divRef.current.childNodes[0]);
      }
    };
  }, []);

  return <div ref={divRef} />;
}

export default ChatWidget;
