import style from './Header.module.css';

const Header = ()=>{
    return (
        <section  className={style.headerContainer}>
        <h3 className={style.headerTitle}>Reliable, efficient delivery</h3>
        <h1 className={style.headerHeading}>Powered by Technology</h1>
        <p className={style.headerInfo}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
    )
}

export default Header;