import React, { useEffect } from 'react';
import YouTubePlayer from '../components/YtApi';
import { useNavigate } from 'react-router-dom';
import { handleMouseMove } from '../utils/MousseMoves';
import Footer from '../components/Footer';



const Home: React.FC = () => {
    const navigate = useNavigate();
    const message = `
    import Video from 'next-video' ;\nimport myVideo from '/videos/my-video.mp4' ;\n\nexport default function Page(){\n  return <Video src={myVideo} />; `
    const messageArr = message.trim().split(" ");
    const colors = ["#fff", "#d13d8a", "#3d85d1"];


    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);


  return (
    <div className="App">
       {/* Hero Section */}
       <section className="hero" id='Home'>
        <div className="img-container">
          <img src="https://dropsearn.fra1.digitaloceanspaces.com/static/drops_foundation/img/icons/ico_drops_en.jpg" className="logo-img" alt="Logo" />
          <img src='https://media.istockphoto.com/id/671334212/es/vector/agregar-signo-icono-ilustraci%C3%B3n-dise%C3%B1o.jpg?s=170667a&w=0&k=20&c=li3hh8KJOnjsOF6jHIRiBCJ4fiWkMa4YLQnNWDjrbBI=' className='logo-img-plus'></img>
          <img src="https://dropsearn.fra1.digitaloceanspaces.com/static/drops_foundation/img/icons/ico_drops_en.jpg" className="logo-img" alt="Logo" />
        </div>
        <div className='text-container'>
          <h1 className="title">Add high-performance
            <span> video to your Next.js app</span>
          </h1>
          <p className='paragraph'>
            <span className='span1'>next-video</span> video to your Next.js app<span className='paragraph1'> embedding, storing, streaming, and customizing video.</span>
          </p>
          <div className='button-container'>
            <button
              className='get-started'
              onClick={() => {
                const section = document.getElementById('get-started');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              GET STARTED
            </button>
            <button
              className='Doc'
              onClick={() => navigate('/documentation')} 
            >
              DOCUMENTATION
            </button>
          </div>
        </div>
      </section>
     
      {/* Includes Section */}
      <section className="Includes">
        <h1 className="title-includes">What’s included</h1>
        <p className='subtitle-Includes'>Everything you need to add beautiful video to your Next.js application</p>
        <div className='Card-Container'>
          <div className='card'>
            <img className="icon-card" src="https://static.vecteezy.com/system/resources/previews/000/582/568/non_2x/globe-earth-icon-vector-illustration.jpg" alt="Icon" />
            <h2 className='card-title'>Off-repo storage</h2>
            <p className='card-content'>Local videos are transferred outside of your version control system to avoid storage limits and slow cloning.</p>
          </div>
          <div className='card'>
            <img className="icon-card" src="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-cloud-settings-icon-png-image_847821.jpg" alt="Icon" />
            <h2 className='card-title'>Optimized video streaming</h2>
            <p className='card-content'>Videos are converted and compressed for highly-performant, cost-effective video delivery.</p>
          </div>
          <div className='card'>
            <img className="icon-card" src="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-cloud-settings-icon-png-image_847821.jpg" alt="Icon" />
            <h2 className='card-title'>BYO player, or don’t</h2>
            <p className='card-content'>The built-in video player is customizable and accessible. Or you can bring your own player.</p>
          </div>
          <div className='card'>
            <img className="icon-card" src="https://static.vecteezy.com/system/resources/previews/000/582/568/non_2x/globe-earth-icon-vector-illustration.jpg" alt="Icon" />
            <h2 className='card-title'>Adaptive streaming</h2>
            <p className='card-content'>Prevents buffering and poor experiences on slow networks by creating multiple sizes of the video.</p>
          </div>
          <div className='card'>
            <img className="icon-card" src="https://static.vecteezy.com/system/resources/previews/000/582/568/non_2x/globe-earth-icon-vector-illustration.jpg" alt="Icon" />
            <h2 className='card-title'>Placeholder posters</h2>
            <p className='card-content'>Prevents layout shift and improves perceived load times with placeholder images</p>
          </div>
          <div className='card'>
            <img className="icon-card" src="https://png.pngtree.com/png-vector/20190319/ourmid/pngtree-vector-cloud-settings-icon-png-image_847821.jpg" alt="Icon" />
            <h2 className='card-title'>Timeline hover thumbnails</h2>
            <p className='card-content'>Generates the images needed for previewing other parts of the video while hovering over the video progress bar.</p>
          </div>
        </div>
      </section>

    
          {/* Get Started Section */}
          <section className='Get-started' id='get-started'>
            <h2 className='title-includes'>Get Started</h2>
            <div className="video-section">
              <div className='card-vd'>
                <div className="video-wrapper">
                     <YouTubePlayer videoId="8guP6F56TPk" />
                </div>
                <div className="text-wrapper">
                  <h5 className="vd-title">Follow the video tutorial</h5>
                  <p className="vd-subtitle">Watch a quick walkthrough video showing how to set up and use next-video</p>
                </div>
              </div>
              
              <div className='card-vd'>
                <div className='text-container'>
                <p className='text-paragraph'>1.  < span className='text-span' >npx -y next-video init</ span > to get started</p>
                <p className='text-paragraph'>2.  Add a video tote your < span className='text-span'>/videos</span> folder</p>
                <p className='text-paragraph'>3. Add the component to your app</p>
                </div>
               
                <pre >
          
            {messageArr.map((word, i) => (
              <span key={i} style={{ color: colors[i % colors.length] }}>
                {word + (i !== messageArr.length - 1 ? ' ' : '')}
              </span>
            ))}
        </pre>
                
                <p className="summary" >Or check out the <a className='Docs' onClick={() => navigate('/documentation')} >docs </a> for manual configuration.</p>
              </div>
            </div>
          </section>

          <section className='video-streaming'>
            <div className='videost-container'>
              <div className='text-container1'>
                <div className='div1'>
                  Built on high-performance video streaming infrastructure
                </div>
                <div className='div2'>
                  Plug in your own video infrastructure provider, or use the default provider, Mux. Mux’s developer video tools are used on the largest streaming sites and live events in the world.
                </div>
              </div>
              <div className='image-container'>
                <div className='div3'>
                  <img className='video-log' src='https://videoschangereality.com/wp-content/uploads/2023/03/MUX-1.png' alt='MUX Logo' />
                </div>
                <div className='div4'>
                  <img className='video-log' src='https://ecoawordpress.usuarios.rdc.puc-rio.br/wp-content/uploads/2023/03/DATA-SCIENCE-ANALYTICS.png' alt='Data Science Analytics' />
                </div>
                <div className='div5'>
                  <img className='video-log' src='https://videoschangereality.com/wp-content/uploads/2023/03/MUX-1.png' alt='Infrastructure Icon' />
                </div>
              </div>
              
            </div>
           
          </section>
          <Footer style={{ backgroundColor: 'black' }} />

    
            
        </div>
      );
    }
    


export default Home
