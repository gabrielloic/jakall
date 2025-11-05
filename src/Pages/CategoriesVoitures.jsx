import React, { useState } from 'react'
import DispositionVoitures from '../Components/DispositionVoitures/DispositionVoitures';

const CategoriesVoitures = () => {
  
    const [category] = useState("All");
    return (
    <div>
       <DispositionVoitures category= {category}/>
    </div>
  )
}

export default CategoriesVoitures
