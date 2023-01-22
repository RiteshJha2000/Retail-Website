import React from 'react'
import p1 from "../img/pulse1.jpg" 
import p2 from "../img/pulse2.jpg" 
import p3 from "../img/pulse3.jpg" 
import p4 from "../img/pulse4.jpg" 
import m from "../img/m3.jfif" 
import "./Product.css"

export default function Products() {
  return (
    <div className='Product' id='products'>
        <div className="spices">
            <h3 id='sname'>Spices</h3>
            <div className="pics_spices" >
                <div className="pic_up" data-aos="fade-right">
                    <div className="pic1 spice_pics"><h3>Turmeric Powder</h3></div>
                    <div className="pic2 spice_pics"><h3>Red Chilli Powder</h3></div>
                </div>
                <div className="pic_down" data-aos="fade-left">
                    <div className="pic3 spice_pics"><h3>Correinder Powder</h3></div>
                    <div className="pic4 spice_pics"><h3>Garam Masala</h3></div>
                </div>
            </div>
        </div>

        <div className="pulses">
            <h3 id='sname'>Pulses and Cereals</h3>
            <div className="pics_pulses" data-aos="fade-up">
                <div className="up">
                    <div className="pulse1">
                        <img src={p1} alt="" />
                        <h4>Rajma</h4>
                    </div>
                    <div className="pulse2">
                        <img src={p2} alt="" />
                        <h4>Chola</h4>
                    </div>
                </div>
                <div className="down">
                    <div className="pulse3">
                        <img src={p3} alt="" />
                        <h4>Chana</h4>
                    </div>
                    <div className="pulse4">
                        <img src={p4} alt="" />
                        <h4>Dal</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="makhan" >
            <div className="makhan_pic" data-aos="fade-right">
                <img src={m} alt="" />
            </div>
            <div className="info" data-aos="fade-left">
                <h3 id='mname'>Makhana</h3>
                <p>We at SWAAD produces very high quality Makhana , which is grown with full care. It is grown and imported from the Bihar</p>
            </div>
        </div>
    </div>
  )
}
