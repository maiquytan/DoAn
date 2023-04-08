import React, { useEffect, useRef } from 'react';

function useOutsideAlerter(ref, onClickOutSide) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutSide && onClickOutSide();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default function ClickOutSide(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onClickOutSide);

  return <div ref={wrapperRef} className={props.className}>{props.children}</div>;
}
