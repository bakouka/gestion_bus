
import Navbar from "./components/Navbar"
import React from "react"
import "./Page2.css"
import  { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import "./Page3.js"

export default function Page2() {

const [formData, setFormData]=useState({

الإسم:'',

الجنسية:''


});
const [tableData, setTableData]=useState([]);
const handleInputChange =(e)=>{
  const{name,value}=e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
// Gère la soumission du formulaire
const handleSubmit = (e) => {
  e.preventDefault();
  // Ajoute les données actuelles du formulaire aux données du tableau
  setTableData((prevTableData) => [...prevTableData, formData]);
  // Réinitialise les champs du formulaire après la soumission
  setFormData({
الإسم: '',
   
الجنسية: ''
  });
};


 




  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);}

   


  return (
    
    <div>
      <Navbar />
     
      <div className='les_bouttons'>
    
      <button className='b'> قائمة الامتعة</button>
     
        <button className='b' onClick={openModal}>قائمة الركاب</button>
        <button onClick={openModal} className='b' >تذكرة جديدة</button>
       
    
  
        <div className="recherche ">
       <form id="form1">
       <input className="depart" type='text' placeholder='من' id="depart" ></input>
        <input className="depart" type='text' placeholder='إلى' id="arrive"></input>
        <input className="depart1" type='text' placeholder='التاريخ' id="date"></input>
        <button className="depart1" >بحث</button>
       
        </form>
        </div>

      
       
       
      </div>
      <img  className="fond"src="logo1.png"/>
   
     {isModalOpen&&(
      <div>
      <div className='pack1'>
        <p className="o">معلومات الركاب</p>
      <div className='coordonnées'>

        <form id="form2">
        <input type='text' placeholder='الإسم' id="prenom" name="الإسم" value={formData["الإسم"] }
          onChange={handleInputChange}></input>
        <input type='text' placeholder='اسم العائلة' id="nom" ></input>
        <input type='text' placeholder='رقم الهاتف' id="numero"></input>
        <input type='text' placeholder='الجنسية'name="الجنسية" id="nasionalite"  value={formData["الجنسية"]}
          onChange={handleInputChange}></input>
          <button type="submit" onClick={handleSubmit}>تأكيد الحجز
</button>
<button><a href="Page3">طباعة الحجز </a></button>
</form>

      </div>
      </div>
      <div className='pack2'>
        <p className="o">معلومات إضافية</p>
      <div className='coordonnées2'>
        <form id="form3">
        <input type='text' placeholder='رقم البطاقة الشخصية' id="cin" ></input>
        <input type='text' placeholder='تاريخ الميلاد' id="datenai"></input>
        <input type='text' placeholder='المرافقف' id="accom" ></input>
        <input type='text' placeholder='الجنس ' id="genre"></input>
        <input type='text' placeholder='البريد الإلكتروني' id="mail"></input>
        <input type='text' placeholder='الركاب الإضافيين'id="nbr"></input>
        </form>
      </div>
      </div>
      </div>
     )
  }
      {isModalOpen&&(
      <div>
      <h2>Tableau des données</h2>
      <table>
        <thead>
          <tr>
            <th>الإسم</th>
            <th>الجنسية</th>
          
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data["الإسم"]}</td>
              <td>{data["الجنسية"]}</td>
           
            </tr>
          ))}
        </tbody>
      </table>  
      </div>
      )}
    </div>


  );


}

