import styles from './page.module.scss'
import DoughnutChartContainer from '@/app/_components/charts/DoughnutChartContainer/DoughnutChartContainer'

const page = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.doughnutChartContainer}>
                <DoughnutChartContainer />
            </div>
        </div>
    )
}

export default page