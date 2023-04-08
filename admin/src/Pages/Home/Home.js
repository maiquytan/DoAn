import ChartGender from '../../Share/Components/ChartGender/ChartGender'
import ChartIncome from '../../Share/Components/ChartIncome/ChartIncome'
import './home.css'

export default function Home() {
  return (
    <div className='admin-page'>
        
        <div className='home'>
            <div className='container'>
                <div className='admin-page-title'>
                    Dashboard
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div className='feature-card'>
                            <div className='feature-item space-between'>
                                <div className='feature-container'>
                                    <span className='feature-title'>Thu nhập (Tháng gần nhất)</span>
                                    <div className='feature-data'> 10.902.000 vnd</div>
                                    <div className='feature-compare'>
                                        <strong>Tăng</strong> <strong style={{color: 'green'}}>50%</strong> so với tháng trước
                                    </div>
                                </div>
                                <div className='feature-icon center-box'>
                                    <i className='fa fa-dollar'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='feature-card' style={{borderLeft: 'solid 5px orange'}}>
                            <div className='feature-item space-between'>
                                <div className='feature-container'>
                                    <span className='feature-title'>Thu nhập (Tháng gần nhất)</span>
                                    <div className='feature-data'> 10.902.000 vnd</div>
                                    <div className='feature-compare'>
                                        <strong>Tăng</strong> <strong style={{color: 'green'}}>50%</strong> so với tháng trước
                                    </div>
                                </div>
                                <div className='feature-icon center-box' style={{ color: 'orange'}}>
                                    <i className='fa fa-money'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='feature-card' style={{borderLeft: 'solid 5px blue'}}>
                            <div className='feature-item space-between'>
                                <div className='feature-container'>
                                    <span className='feature-title'>Thu nhập (Tháng gần nhất)</span>
                                    <div className='feature-data'> 10.902.000 vnd</div>
                                    <div className='feature-compare'>
                                        <strong>Tăng</strong> <strong style={{color: 'green'}}>50%</strong> so với tháng trước
                                    </div>
                                </div>
                                <div className='feature-icon center-box' style={{ color: 'blue'}}>
                                    <i className='fa fa-eur'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='feature-card' style={{borderLeft: 'solid 5px yellow'}}>
                            <div className='feature-item space-between'>
                                <div className='feature-container'>
                                    <span className='feature-title'>Thu nhập (Tháng gần nhất)</span>
                                    <div className='feature-data'> 10.902.000 vnd</div>
                                    <div className='feature-compare'>
                                        <strong>Tăng</strong> <strong style={{color: 'green'}}>50%</strong> so với tháng trước
                                    </div>
                                </div>
                                <div className='feature-icon center-box' style={{ color: 'yellow'}}>
                                    <i className='fa fa-cubes'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <div className='chart-card'>
                            <div className='chart-title'>
                                Biểu đồ thu nhập
                            </div>
                            <div className='chart-content'>
                                <ChartIncome/>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='chart-card'>
                            <div className='chart-title'>
                                Phân loại đối tượng mua hàng
                            </div>
                            <div className='chart-content'>
                                <ChartGender/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
