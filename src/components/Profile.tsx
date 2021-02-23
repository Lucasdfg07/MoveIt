import styles from '../styles/Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Lucasdfg07.png" alt="Lucas Fernandes" />

            <div>
                <strong>Lucas Fernandes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}

export default Profile;