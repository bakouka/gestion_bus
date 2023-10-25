import React from 'react';

import './Aside2.css'; // Assurez-vous de créer un fichier CSS pour les styles

const Aside2 = ({ formData2}) => {

  return (
    <aside>
<div className='partie3'>
  <div className='partie8'>
  <p className='partie9'>نهج المدينة</p>
    <p className='partie10'>الخطوط الدولية</p>
   
  </div>
  <div>
  {formData2 && (
<div className='com'>
<div className='partie4'>
    
<p > من: {formData2.dep}</p>
<p>رقم الرحلة</p>
</div>
<div className='partie6'>
<p>إلى: {formData2.arr}</p>
<p>اليوم: {formData2.jour}</p> 
</div>
</div>
  )}
<p className='partie5'>جهة الحجز</p>
</div>
<div className='partie7'>
    <div className='com2'>
<p className='position'>حالة </p>
<p className='position'>التذكرة</p>
</div>
<div>
<p>الأمتعة</p>
</div>
<div>
<p className='position'>رقم</p> <p className='position'>الهاتف</p>
</div>
<div>
<p className='position'>رقم </p><p className='position'>التذكرة</p>
</div>
<div>
<p className='position'>رقم </p><p className='position'>المقعد</p>
</div>
<div>
<p className='position' >رقم </p><p className='position'>الجواز</p>
</div>

</div>
<div className='footer12'>
<p className='footer2'>رفاهية تتخطى الحدود</p>
<p className='footer1'>الرجاء الإحتفاظ بالتذكرة مع إحترام موعد الإنطلاق</p>

</div>
</div>
    </aside>
  );
};

export default Aside2;
