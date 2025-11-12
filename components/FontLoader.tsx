'use client';

import { useEffect } from 'react';

export default function FontLoader() {
  useEffect(() => {
    // Add preconnect for Fontshare
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://api.fontshare.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);

    // Add Satoshi font stylesheet
    const link = document.createElement('link');
    link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount (optional)
      document.head.removeChild(preconnect);
      document.head.removeChild(link);
    };
  }, []);

  return null;
}

