import AOS from 'aos';
import 'aos/dist/aos.css';

export const initializeAnimation=()=>{
    AOS.init({
        duration:1000,
        once:false,
        mirror:true
    })
}