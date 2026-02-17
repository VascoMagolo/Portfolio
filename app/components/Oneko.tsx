"use client";

import { useEffect, useRef } from "react";

const Oneko = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    const script = document.createElement("script");
    
    script.src = "/oneko.js"; 
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const canvas = document.getElementById("oneko");
      if (canvas) canvas.remove();
      isLoaded.current = false;
    };
  }, []);

  return null;
};

export default Oneko;