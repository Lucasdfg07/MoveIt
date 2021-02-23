import styles from '../styles/ExperienceBar.module.css';

const ExperienceBar = () => {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            
            <div>
                <div style={{ width: '50%' }} />

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>

            <span>900 xp</span>
        </header>
    )
}

export default ExperienceBar;