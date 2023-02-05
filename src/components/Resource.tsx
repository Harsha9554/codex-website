import styles from '../styles/resource.module.css'
import Image from "next/image";
const Resource =(props)=>{
    console.log(props.image);
    return(
    <div className={styles.box}>
            <Image src={props.image} alt='front-end' className={styles.img1}/>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
            <Image src={props.desg} alt='rec' className={styles.img2}/>
    </div>
);
};
export default Resource;