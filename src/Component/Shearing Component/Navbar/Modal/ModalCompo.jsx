import React from 'react';
import App from '../ThemeBtn/src/App';
import sun from './../../../../assets/Octopus/sun-removebg-preview.png'
import './Modal.css'
const ModalCompo = () => {
  return (
    <div>
{/* Open the modal using ID.showModal() method */}
<button  onClick={()=>window.my_modal_2.showModal()}>
<img src={sun} className='w-10 rotate-360 infinite' alt="" />

</button>
<dialog id="my_modal_2" className="modal">

  <form method="dialog" className="modal-box darktheme2 h-[350px]">
<h1> toggle theme</h1>
    <App></App>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>

</dialog>   
 </div>
  );
};

export default ModalCompo;