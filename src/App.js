import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import  Descplogo from './descplogo'
import Card from './card'
import TextDescription from './text-description'
import Globalcomp from './globalcomp'
import Helthcare from './helthcare'
import Descountry from './descountry'
import Destination from './destination'
import Footer from './footer'


const menu=[{title:"About us" }, 
{title:"Career"},
{title:"Departements" , contenu:["Marketing & PR" , "Customer Success & Sales" , "IT, Product, Design & UX" , "Finance & Administration" , "HR & more"]}]

const card = [{title:"For patients" , 
 parag:"Find a doctor, book a visit and slove any health-related doubt",
  img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
   country:["CHOOSE COUNTRY","Italy","France","Argentina","Mexico","Poland"] ,class:"bgcb", classimg:"cardimg1"},
{title:"For doctors" ,
 parag:"Save a time managing visits and cut no-shows by half" , 
 img: "https://www.docplanner.com/img/screen-saas@2x.png", 
 class:"bgcg", classimg :"cardimg2"}]   


 const forcarte = [{img:"https://www.docplanner.com/img/flag.png" , title:"Leader in 10 countries" , parag:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile" ,classcart:"carte-2"},
 {img: "https://www.docplanner.com/img/visits.png", title:" 1.5 million appointments" , parag:"booked last month ", classcart:"carte-1"},
 {img: "https://www.docplanner.com/img/patients.png", title:"30 million unique patients" , parag:"visit us every month", classcart:"carte-2"},
 {img:"https://www.docplanner.com/img/doctors.png" , title:"2 million active doctors" , parag:"trust in our solutions", classcart:"carte-1"}]

 
 const listdestion =[{img:"https://www.docplanner.com/images/warsaw.png" ,namedest:"Warsaw"},
  {img:"https://www.docplanner.com/images/barcelona.png" , namedest:"Barcelona" },
  {img:"https://www.docplanner.com/images/istanbul.png", namedest:"Istanbul"},
  {img:"https://www.docplanner.com/images/rome.png" , namedest:"Rome" },
  {img:"https://www.docplanner.com/images/mexico-city.png" , namedest:"Mexico-city"},
  {img:"https://www.docplanner.com/images/curitiba.png" , namedest:"Curitiba"}]
 

  function App() {

  return (

  <div className="App">
     <Nav menu={menu}/>
     <Descplogo/>
     <TextDescription />
     <Card card={card}/>
     <Globalcomp /> 
      <Helthcare forcarte={forcarte} />
      <Descountry/>
      <Destination listdestion ={listdestion}/>
      <Footer/>
    </div>
  );
}

export default App;


