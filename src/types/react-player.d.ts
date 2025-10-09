declare module 'react-player/youtube' {
  import React from 'react';
  
  interface YouTubeConfig {
    playerVars?: {
      autoplay?: 0 | 1;
      controls?: 0 | 1;
      rel?: 0 | 1;
      showinfo?: 0 | 1;
      modestbranding?: 0 | 1;
      origin?: string;
      [key: string]: any;
    };
  }

  interface ReactPlayerProps {
    url: string;
    playing?: boolean;
    controls?: boolean;
    width?: string | number;
    height?: string | number;
    config?: {
      youtube?: YouTubeConfig;
    };
    [key: string]: any;
  }

  const ReactPlayer: React.FC<ReactPlayerProps>;
  export default ReactPlayer;
}
