import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast , Slide} from 'react-toastify';
import { FaTemperatureHigh as Ticon } from 'react-icons/fa';
import { GiGasMask as Gicon } from 'react-icons/gi';
import { ImBell as Bellicon } from 'react-icons/im';
import { AiOutlineAlert as Mvticon } from 'react-icons/ai';
import './BlockNotification.css';
toast.configure(
)
function notification(){
    /////////////////Temperature//////////
    const TemperatureToastContainer = () => {
        return(
        <div className="Temperature-Toast-Container" >
            <div><div>temperature alert</div></div>
            <div><Ticon></Ticon></div>
        </div>
        )};
    const TemperatureToast = () => {
        toast(<TemperatureToastContainer></TemperatureToastContainer> , { position : toast.POSITION.TOP_RIGHT })
      };
      ////////////////////Gaz////////////////////
    const GazToastContainer = () => {
        return(
        <div className="Gaz-Toast-Container" >
            <div><div>Gaz alert</div></div>
            <div><Gicon></Gicon></div>
        </div>
        )};
    const GazToast = () => {
        toast(<GazToastContainer></GazToastContainer>, { position : toast.POSITION.TOP_RIGHT })
      };
    ///////////////////////Bell//////////////////////////
    const BellToastContainer = () => {
        return(
        <div className="Bell-Toast-Container" >
            <div>
                    <div>Bell alert</div>
                    <Link to="/streaming">click here to get streaming video</Link>
                    </div>
            <div><Bellicon></Bellicon></div>
        </div>
        )};
    const BellToast = () => {
        toast(<BellToastContainer></BellToastContainer>, { position : toast.POSITION.TOP_RIGHT })
      };
    ///////////////////////mouvmetn//////////////////////////
        const MvtToastContainer = () => {
            return(
            <div className="Mvt-Toast-Container" >
                <div>
                    <div>Mouvement alert</div>
                    <Link to="/streaming">click here to get streaming video</Link>
                </div>
                
                <div><Mvticon></Mvticon></div>
            </div>
            )};
        const MvtToast = () => {
            toast(<MvtToastContainer></MvtToastContainer>, { position : toast.POSITION.TOP_RIGHT })
          };
	return (

        <div className="block_notifiaction">
            <div>
                <button onClick={TemperatureToast}>Temperature notif!</button>
                <button onClick={GazToast}>Gaz notif!</button>
                <button onClick={BellToast}>Bell notif!</button>
                <button onClick={MvtToast}>Mvt notif!</button>
                <div><ToastContainer 
                position="top-center" 
                autoClose={false} 
                pauseOnHover></ToastContainer>
                </div>
            </div>
        </div>

	);
}
export default notification ;