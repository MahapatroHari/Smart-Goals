import EffectHookClient from '@/app/_components/hooksComponents/EffectHookClient/EffectHookClient'
import styles from './page.module.scss'

const page = () => {
    return (
        <div className={`container ${styles.pageContainer}`}><EffectHookClient /></div>
    )
}

export default page 