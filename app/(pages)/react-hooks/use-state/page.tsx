import StateHookClient from "@/app/_components/hooksComponents/StateHookClient/StateHookClient"
import styles from './page.module.scss'

const page = () => {
    return (
        <div className={`container ${styles.pageContainer}`}><StateHookClient /></div>
    )
}

export default page 