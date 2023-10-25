
import React, { useEffect, useState } from 'react';
import './Aside.css'; // Assurez-vous de créer un fichier CSS pour les styles

const Aside = ({ formData }) => {
  
  return (
    <aside >
      <div className='partie1'>
<header className='header1'>تذكرة</header>
<p className='header2'>معلومات الرحلة</p>
<p className='header3'>حجز عن طريق الواب</p>
<div className='partie2'>

{formData && (
            <div>
              <p>الجنسية: {formData.nationalite}</p>
              <p>اسم الراكب: {formData.nom}</p>
              {/* Affichez d'autres données depuis la session storage ici */}
            </div>
          )}

</div>
</div>
    </aside>
  );
};

export default Aside;
