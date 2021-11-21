import './awareness.css'
import './animate.css'
// import Slider from './Slider/Slider'
const Awareness = () => {
    return ( 
      <div className="aws-container">
        {/* <div className='img-banner'>
          <img src={process.env.PUBLIC_URL + `/images/awss-banner1.jpg`}/>
        </div> */}

        {/* <Slider className='slider'></Slider> */}
        <div className='txt-banner'>
          <img  className='icon' src={process.env.PUBLIC_URL + `images/bacteria.png`}/>
          <div className='txt'>
          PROTECT YOURSELF.<br/> AND THOSE YOU LOVE.
          </div>
        </div>


        <div className='card-container'>
          <img className='img1' src={process.env.PUBLIC_URL + `/images/1.png`}></img>
          <img className='img2'src={process.env.PUBLIC_URL + `/images/2.png`}></img>
          <img className='img3'src={process.env.PUBLIC_URL + `/images/3.png`}></img>

        </div>

        
      </div>
    );
  };
  
  export default Awareness;