import styles from './page.module.scss'
import LineChartContainer from '@/app/_components/charts/LineChartContainer/LineChartContainer'

const page = () => {
    return (
        <div className={styles.pageContainer}>
            <LineChartContainer />
        </div>
    )
}

export default page