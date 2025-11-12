import React, {useState} from 'react'
import Hero from '../Components/Hero/Hero'
import DispositionVoitures from '../Components/DispositionVoitures/DispositionVoitures';
import './CSS/Accueil.css'
import ExplorerCategories from '../Components/ExplorerCategories/ExplorerCategories';

const Accueil = () => {
    const [category,setCategory] = useState("All");
    return (
        <div>
            <Hero/>
            <ExplorerCategories category={category} setCategory={setCategory}/>
            <DispositionVoitures category={category} />
        </div>
    )
}

export default Accueil