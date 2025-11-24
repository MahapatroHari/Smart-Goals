import ReducerHookClient from '@/app/_components/hooksComponents/ReducerHookClient/ReducerHookClient'
import styles from './page.module.scss'

const page = () => {
    return (
        <div className={`container ${styles.pageContainer}`}><ReducerHookClient /></div>
    )
}

export default page 