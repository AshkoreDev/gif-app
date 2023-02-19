import React, { useEffect, useState, useRef } from 'react';

export function useNearScreen() {

  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {

    let observer;

    const onChange = (entries, observer) => {

      const el = entries[0];
      console.log(el.isIntersecting)

      if(el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
      }
    }

    Promise.resolve(

      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')

    ).then(() => {

      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px'
      })

      observer.observe(fromRef.current);
    })


    return () => observer && observer.disconnect();
  })

  return {isNearScreen, fromRef}
};