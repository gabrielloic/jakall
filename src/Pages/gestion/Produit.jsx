import { Search } from "lucide-react"
import  { Input }  from "./input"
import { Checkbox } from "./Checkbox"
import "bootstrap"

const Produits=[
    {categorie: "BOLIDE" , prix: "2.000.000", stocked: true , noms: "MERCEDES-BENZ"},
    {categorie: "BOLIDE" , prix: "25.000.000", stocked: true , noms: "TOYOTA"},
    {categorie: "BOLIDE" , prix: "13.000.000", stocked: false , noms: "YARIS"},
    {categorie: "BOLIDE" , prix: "67.000.000", nstocked: true , noms: "PAJEROT"},
    {categorie: "BOLIDE" , prix: "200.000.000", stocked: false , noms: "POISSON"},
    {categorie: "LUXE" , prix: "70.000.000", stocked: true , noms: "MBOMBI"},
    {categorie: "BOLIDE" , prix: "290.000.000", stocked: true , noms: "TOUAREG"},
    {categorie: "SPORT" , prix: "123.000.000", stocked: false , noms: "PEUGEOT"},
    {categorie: "BOLIDE" , prix: "743.000.000", stocked: false , noms: "607"},
]

export function Searchbar(){
    return <div>
        <div className="mb-3"></div>
        <Input value="" onChange={() => null} placeholder="Rechercher..."/>
        <Checkbox checked={false} onChange={() => null} label="N'afficher que les voitures disponibles" />
    </div>

    
}