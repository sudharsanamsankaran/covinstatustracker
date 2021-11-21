import React from 'react';
import './firstpage.css';
import { useHistory } from "react-router-dom"
function Firstpage()
{    
    const history = useHistory()
    return(
        <>
         <div className="navbar1">
        <button className="button1" onClick={()=>{
        history.push("/login")
        }}>LOGIN</button>
        
        <button button className="button2" onClick={()=>{
        history.push("/register")
        }}>SIGN UP</button>
           
        </div>
        <br />
         <div className="moto">
        <div className="head1">
        <h1>Be INFORMED</h1>
        <h1>Be PREPARED</h1>
        <h1>Be SMART</h1>
        <h1>Be SAFE</h1>
        <h1>Be READY to fight</h1>
        <h1 className="moto1">#COVID-19</h1>
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="para"><p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. </p>

<p>The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</p>

<p>The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.</p></div>
<div className="covaccine"></div>       
            </>
     
    )
}
export default Firstpage;