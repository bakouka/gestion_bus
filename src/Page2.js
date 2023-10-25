import Navbar from "./components/Navbar"
import React from "react"
import "./Page2.css"
import  { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import "./Page3.js"



export default function Page2() {
 

const [formData, setFormData]=useState({

nom:'',

nationalite:''


});
const [formData2, setFormData2]=useState({

 
  dep:'',
  arr:'',
  jour:''
  
  
  
  
  });

const [tableData, setTableData]=useState([]);
const handleInputChange =(e)=>{
  const{name,value}=e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
const handleInputChange2 =(e)=>{
  const{name,value}=e.target;
  setFormData2((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
// Gère la soumission du formulaire
const handleSubmit = (e) => {
  e.preventDefault();
  // Ajoute les données actuelles du formulaire aux données du tableau
  setTableData((prevTableData) => [...prevTableData, formData]);
  
};
//form1
const handleSubmit1 = (e) => {
  e.preventDefault();

  // Ajoutez les données actuelles du formulaire à un objet
  const formDataObject = {
    nom: formData.nom,
    nationalite: formData.nationalite,
   
  };

  // Convertissez l'objet en chaîne JSON
  const formDataJSON = JSON.stringify(formDataObject);

  // Stockez la chaîne JSON dans la session storage
  sessionStorage.setItem('formData', formDataJSON);

  
};



// Utilisez un effet pour récupérer les données de la session storage au chargement du composant
useEffect(() => {
  const storedData = sessionStorage.getItem('formData');
console.log(storedData);
  // Si des données sont stockées, les parsez en tant qu'objet JSON
  if (storedData) {
    const parsedData = JSON.parse(storedData);

    // Mettez à jour l'état du formulaire avec les données récupérées
    setFormData(parsedData);
  }
}, []); // Le tableau vide des dépendances garantit que cet effet est exécuté une seule fois après le rendu initial.

// form2
const handleSubmit2 = (e) => {
  e.preventDefault();

  // Ajoutez les données actuelles du formulaire à un objet
  const formDataObject = {
    dep: formData2.dep,
    arr: formData2.arr,
    jour: formData2.jour,
   
  };

  // Convertissez l'objet en chaîne JSON
  const formDataJSON = JSON.stringify(formDataObject);

  // Stockez la chaîne JSON dans la session storage
  sessionStorage.setItem('formData2', formDataJSON);

  
};
// Utilisez un effet pour récupérer les données de la session storage au chargement du composant
useEffect(() => {
  const storedData = sessionStorage.getItem('formData2');
console.log(storedData);
  // Si des données sont stockées, les parsez en tant qu'objet JSON
  if (storedData) {
    const parsedData = JSON.parse(storedData);

    // Mettez à jour l'état du formulaire avec les données récupérées
    setFormData2(parsedData);
  }
}, []); // Le tableau vide des dépendances garantit que cet effet est exécuté une seule fois après le rendu initial.








  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);}

   
    

  return (
    
    <div>
      <Navbar />
     
      <div className='les_bouttons'>
    
      <button className='b'> قائمة الامتعة</button>
     
        <button className='b' onClick={openModal2}>قائمة الركاب</button>
        <button  className='b' onClick={openModal} >تذكرة جديدة</button>
       
    
  
        <div className="recherche ">
       <form id="form1">
       <input className="depart" type='text' placeholder='من' id="dep"  name="dep" value={formData2["dep"] } onChange={handleInputChange2}></input>
        <input className="depart" type='text' placeholder='إلى' id="arr" name="arr" value={formData2["arr"] } onChange={handleInputChange2}></input>
        <input className="depart1" type='text' placeholder='التاريخ' id="jour" name="jour" value={formData2["jour"] } onChange={handleInputChange2}></input>
        <button className="depart1" type="submit" onClick={handleSubmit2} >بحث</button>
       
        </form>
        </div>

      
       
       
      </div>
      <img  className="fond"src="logo1.png"/>
   
      {isModalOpen && (
 <div className="modal-overlay">
 <div className="modal-content">
   <button className="modal-close" onClick={closeModal}>
   إغلاق
   </button>
   <div className="modal-container">
   <div className="additional-info">
    <h2 className="section-title">معلومات إضافية</h2>
    <div className="form-container">
      <form id="form3">
        <input type="text" placeholder="رقم البطاقة الشخصية" id="cin" />
        <input type="text" placeholder="تاريخ الميلاد" id="datenai" />
        <input type="text" placeholder="المرافق" id="accom" name="accom" />
        <input type="text" placeholder="الجنس" id="genre" />
        <input type="text" placeholder="البريد الإلكتروني" id="mail" />
        <input type="text" placeholder="الركاب الإضافيين" id="nbr" />
      </form>
    </div>
  </div>
  <div className="passenger-info">
    <h2 className="section-title">معلومات الركاب</h2>
    <div className="form-container">
      <form id="form2">
        <input
          type="text"
          placeholder="الإسم"
          id="prenom"
          name="nom"
          value={formData["nom"]}
          onChange={handleInputChange}
        />
        <input type="text" placeholder="اسم العائلة" id="nom" />
        <input
          type="text"
          placeholder="رقم الهاتف"
          id="numero"
          name="tlf"
          value={formData["tlf"]}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="الجنسية"
          name="nationalite"
          id="nationalite"
          value={formData["nationalite"]}
          onChange={handleInputChange}
        />
       <a   href="Page3">
         <button onClick={handleSubmit1}>
          طباعة الحجز
        </button>
        </a> 
       <button type="submit" onClick={handleSubmit}>
          تأكيد الحجز
        </button>
        
       
      </form>
    </div>
  </div>
  
</div>

 </div>
  </div>
)}

{isModalOpen2 && (
      <div>
        <div className="modal-overlay">
 <div className="modal-content">
   <button className="modal-close" onClick={closeModal2}>
   إغلاق
   </button>
      <h2>قائمة الركاب</h2>
      <table className="custom-table">
        <thead>
          <tr>
          
           
           
           
            <th>المرافق</th>
            <th>الوجهة</th>
            <th>الانطلاق</th>
            <th>الجنسية</th>
            <th>الإسم</th>
          
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
          
              <td>{data["accom"]}</td>

              <td></td>
                  <td></td>
                  <td>{data["nationalite"]}</td>
                  <td>{data["nom"]}</td>
           
            </tr>
          ))}
        </tbody>
      </table>  
      </div>
      </div>
      </div>
 )}


    </div>


  );


}
