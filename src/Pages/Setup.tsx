import React from 'react';
import '../index.css';

const Setup: React.FC = () => {
  const message = `
  npx -y next-video init
  `;

  const messageArr = message.trim().split(" ");
  const colors = ["#fff", "#d13d8a", "#3d85d1"];

  return (
    <section className='Setup'>
      <h2 className='Setup-title'>Setup</h2>
      <h3 className='Setup-title'id='automatic-setup'>Automatic Setup</h3>
      <p className='paragraph-12'>In the root of your Next.js project, run:</p>

      <div className='Code-card-1'>
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

      <p className="paragraph-12">This will (with prompting):</p>
      <div className='main-content'>
        <p>▫️ install <span className='span3'>next-video</span> as a dependency</p>
        <p>▫️ update your <span className='span3'>next.config.js</span> file</p>
        <p>▫️ if you're using TypeScript, add types for your video file imports</p>
        <p>▫️ create a <span className='span3'>/videos</span> directory in your project where you will place all video source files</p>
      </div>

      <p className="paragraph-1">
        It will also update your <span className='span3'>.gitignore</span> file to ignore video files in the <span className='span3'>/videos</span> directory. Videos, particularly any of reasonable size, shouldn't be stored/tracked by git. Alternatively, if you'd like to store the original files you can remove the added gitignore lines and install git-lfs.
      </p>
      
      <h3 className='Setup-title' id='remote-storage'>Remote storage and optimization</h3>
    </section>
  );
};

export default Setup;
