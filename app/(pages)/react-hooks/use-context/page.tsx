import ContextHookClient from '@/app/_components/hooksComponents/ContextHookClient/ContextHookClient'
import styles from './page.module.scss'

const page = () => {
    return (
        <div className={`container ${styles.pageContainer}`}><ContextHookClient /></div>
    )
}

export default page 