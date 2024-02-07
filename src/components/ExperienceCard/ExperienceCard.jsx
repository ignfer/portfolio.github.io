import { useState } from 'react';
import Badge from '../Badge/Badge';
import '../Modal/Modal.css'
import './ExperienceCard.css'

export default function ExperienceCard({index,experience}){

  /* each experience card has a dialog which work as a modal
  the ID is autogenerated given by the prefix experienceModal and the index
  of the card*/

  const modalId = 'experienceModal' + index

  const openModal = () => {
    const modalInstance = document.querySelector('#' + modalId);
    modalInstance.showModal();
  }

  const closeModal = () => {
    const modalInstance = document.querySelector('#' + modalId);
    modalInstance.close();
  }
  
  return(
    <>
    
    <dialog className='modal' id={modalId}>
      <div className='modal-banner'>
      <img src={experience.imagepath}></img>
      </div>
      
      <div className='modal-container'>
        <h1>{experience.title}</h1>
        <h3>Role: {experience.modalRole}</h3>
        <p>{experience.modalDescription}</p>
        
        <button>Go to the project repo</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </dialog>

      <div className='experience-card' onClick={openModal}>
        <h2 className='experience-card-title'>{experience.title}</h2>
        
        <div className='experience-card-preview'>
          <img src={experience.imagepath}></img>
        </div>

        <div className='experience-card-badges'>
          {experience.badges.map((badge,index) => {
              return(<Badge key={index} content={badge}/>)
          })}
        </div>
        
        <div className='experience-card-description'>
          <p>
            {experience.description}
          </p>
        </div>
      </div>
    </>
  );
}