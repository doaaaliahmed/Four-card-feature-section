import Header from "./Components/Header";
import Card from './Components/Card';
import karma from './images/icon-karma.svg';
import caluolator from './images/icon-calculator.svg';
import supervisor from './images/icon-supervisor.svg';
import teamBuilder from './images/icon-team-builder.svg';
import React from "react";
import style from './App.module.css';


function App() {
  const card = [
    {id: "supervisor" , title:'Supervisor' , info:'Monitors activity to identify project roadblocks' , img:supervisor , imgAlt :'supervisor' , borderColor:'hsl(180, 62%, 55%)'},
    {id: "teambuilder",  title:'Team Builder' , info:'Scans our talent network to create the optimal team for your project' , img:teamBuilder , imgAlt :'team builder',borderColor:'hsl(0, 78%, 62%)'},
    {id: "karma" , title:'Karma' , info:'Regularly evaluates our talent to ensure quality' , img:karma , imgAlt :'karma', borderColor:'hsl(34, 97%, 64%)'},
    {id: "calculator" , title:'Calculator' , info:'Uses data from past projects to provide better delivery estimates',img : caluolator , imgAlt :'calculator' ,borderColor: 'hsl(212, 86%, 64%)'}
  ];

  return (
    <div className={style.App}>
      <Header></Header>
    <main className={style.container}>
    <Card border={card[0].borderColor} key={card[0].id} title={card[0].title} info={card[0].info} img={card[0].img} alt={card[0].imgAlt}></Card>
    <div>
    <Card border={card[1].borderColor} key={card[1].id} title={card[1].title} info={card[1].info} img={card[1].img} alt={card[1].imgAlt}></Card>
    <Card border={card[2].borderColor} key={card[2].id} title={card[2].title} info={card[2].info} img={card[2].img} alt={card[2].imgAlt}></Card>
    </div>
    <Card border={card[3].borderColor} key={card[3].id} title={card[3].title} info={card[3].info} img={card[3].img} alt={card[3].imgAlt}></Card>
    </main>
     
    </div>
  );
}

export default App;

