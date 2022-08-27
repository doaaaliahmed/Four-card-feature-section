import style from './Card.module.css';


const Card = (props)=>{

    return (
        <div style={{borderTop : `4px solid ${props.border}`}} className={style.cardContainer}>
        <h2 className={style.cardTitle}>{props.title}</h2>
        <p className={style.cardInfo}>{props.info}</p>
        <img className={style.cardImg} src={props.img} alt={props.alt}/>
        </div>
    )

}

export default Card;