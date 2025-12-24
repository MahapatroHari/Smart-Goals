import { notFound } from 'next/navigation'
import StockLineChart from '@/app/_components/stocks/StocksLineChart/StocksLineChart';
import { stockData } from '@/app/_components/stocks/data';
import styles from './page.module.scss';

const page = async ({ params }) => {
  const { slug } = await params;
  const availableCompanies = ['tcs']

  if (!availableCompanies.includes(slug)) {
    return notFound();
  }
  console.log(stockData);
  return (
    <div className={`container ${styles.stockChartPage}`}>
      <h1 className="text-2xl font-bold mb-4 capitalize">{slug.toUpperCase()} Stock Chart</h1>
      <StockLineChart data={stockData} />
    </div>
  )
}

export default page