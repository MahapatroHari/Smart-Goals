import styles from './page.module.scss'
import BarChartContainer from '@/app/_components/charts/BarChartContainer/BarChartContainer'

const page = () => {
    return (
        <div className={styles.pageContainer}>
            <BarChartContainer />
        </div>
    )
}

export default page