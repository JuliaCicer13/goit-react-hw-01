import styles from './FriendListItemModule.css'

export default function friendListItem({ avatar, name, isOnline}) {
 return (
    <li className={styles.item}>
         <span className={isOnline ? styles.online : styles.offline}></span>

           <img className={styles.avatar} src={avatar} alt={name} width="48" />
           <p className={styles.name}></p>
    </li>
 );

}