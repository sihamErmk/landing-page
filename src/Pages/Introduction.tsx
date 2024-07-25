import React from 'react';
import YouTubePlayer from '../components/YtApi'; 
import '../index.css';

const Introduction: React.FC = () => {
  const videoId = '8guP6F56TPk'; 
  const message = `
  import Video from 'next-video';
  import getStarted from '/videos/get-started.mp4';

  export default function Page() {
    return <Video src={getStarted} />;
  }
`;

  const messageArr = message.split(" ");
  const colors = ["#fff", "#d13d8a", "#3d85d1"];

  return (
    <section id="introduction" className="intro-section">
      <div className="video-container">
        <YouTubePlayer videoId={videoId} />
      </div>
      <div className="downloads-links">
        <a href="https://www.npmjs.com/package/next-video" className="link">
          <span className="badge">npm</span>
          <span className="badge-version">v1.1.1</span>
        </a>
        <a href="https://www.npmjs.com/package/next-video" className="link">
          <span className="badge">npm</span>
          <span className="badge-usage">24k/month</span>
        </a>
        <a href="https://bundlephobia.com/package/next-video@1.1.1" className="link">
          <span className="badge">size</span>
          <span className="badge-size">4.54 kB</span>
        </a>
      </div>
      <p className="paragraph-12">
        Next video is a React component for adding video to your Next.js application. It extends both the 
        <span className="text-span">&lt;video&gt;</span> element and your Next app with features for automatic video optimization.
      </p>
      <div className='main-content'>
        <p>▫️ <span className='span2'>Smart storage:</span> Store large video files outside of your git repo</p>
        <p>▫️ <span className='span2'>Auto optimized:</span> Optimize video files and deliver via CDN for better playback performance and quality</p>
        <p>▫️ <span className='span2'>Customizable UI:</span> Choose from themes or build your own player controls</p>
        <p>▫️ <span className='span2'>Posters & Previews:</span> Zero-config placeholder images and timeline hover thumbnails</p>
        <p>▫️ <span className='span2'>Wider compatibility:</span> Use videos that aren’t supported natively by all browsers</p>
        <p>▫️ <span className='span2'>Analytics built-in (optional):</span> See how often videos get watched and track video performance</p>
        <p>▫️ <span className='span2'>AI-powered:</span> Add auto-generated captions to your videos and use transcripts</p>
      </div>
      <div className='Code-card'>
        <pre className='code-content'>
          <code>
            {messageArr.map((word, i) => (
              <span key={i} style={{ color: colors[i % colors.length] }}>
                {word + (i !== messageArr.length - 1 ? ' ' : '')}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Introduction;
