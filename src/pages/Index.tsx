import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import { setPageTitle } from '../store/themeConfigSlice';
import { useEffect } from 'react';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconEye from '../components/Icon/IconEye';
import IconBitcoin from '../components/Icon/IconBitcoin';
import IconEthereum from '../components/Icon/IconEthereum';
import IconLitecoin from '../components/Icon/IconLitecoin';
import IconBinance from '../components/Icon/IconBinance';
import IconTether from '../components/Icon/IconTether';
import IconSolana from '../components/Icon/IconSolana';
import ReactApexChart from 'react-apexcharts';

import IconCircleCheck from '../components/Icon/IconCircleCheck';
import IconInfoCircle from '../components/Icon/IconInfoCircle';
import IconPlus from '../components/Icon/IconPlus';
import IconCaretDown from '../components/Icon/IconCaretDown';

const Index = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Direct',
                data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
            },
            {
                name: 'Organic',
                data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };

    return (
        <div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/*  Favorites  */}
                <div>
                    <div className="flex items-center mb-5 font-bold">
                        <span className="text-lg">Favorites</span>
                        <button type="button" className="ltr:ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark">
                            See All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:mb-5">
                        {/*  Bitcoin  */}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <IconBitcoin />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">BTC</h6>
                                    <p className="text-white-dark text-xs">Bitcoin</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $20,000 <span className="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>
                        {/*  Ethereum*/}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 bg-warning rounded-full grid place-content-center p-2">
                                    <IconEthereum />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">ETH</h6>
                                    <p className="text-white-dark text-xs">Ethereum</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $21,000 <span className="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>
                        {/*  Litecoin*/}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <IconLitecoin />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">LTC</h6>
                                    <p className="text-white-dark text-xs">Litecoin</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $11,657 <span className="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Prices  */}
                <div>
                    <div className="flex items-center mb-5 font-bold">
                        <span className="text-lg">Live Prices</span>
                        <button type="button" className="ltr:ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark">
                            See All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                        {/*  Binance */}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <IconBinance />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">BNB</h6>
                                    <p className="text-white-dark text-xs">Binance</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $21,000 <span className="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>
                        {/*  Tether  */}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                                    <IconTether />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">USDT</h6>
                                    <p className="text-white-dark text-xs">Tether</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $20,000 <span className="text-success font-normal text-sm">+0.25%</span>
                            </div>
                        </div>
                        {/*  Solana */}
                        <div className="panel">
                            <div className="flex items-center font-semibold mb-5">
                                <div className="shrink-0 w-10 h-10 bg-warning rounded-full p-2 grid place-content-center">
                                    <IconSolana />
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2">
                                    <h6 className="text-dark dark:text-white-light">SOL</h6>
                                    <p className="text-white-dark text-xs">Solana</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center font-bold text-base">
                                $21,000 <span className="text-danger font-normal text-sm">-1.25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="panel">
                    <div className="mb-5 text-lg font-bold">Recent Transactions</div>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th className="ltr:rounded-l-md rtl:rounded-r-md">ID</th>
                                    <th>DATE</th>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th className="text-center ltr:rounded-r-md rtl:rounded-l-md">STATUS</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="font-semibold">#01</td>
                                    <td className="whitespace-nowrap">Oct 08, 2021</td>
                                    <td className="whitespace-nowrap">Eric Page</td>
                                    <td>$1,358.75</td>
                                    <td className="text-center">
                                        <span className="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">#02</td>
                                    <td className="whitespace-nowrap">Dec 18, 2021</td>
                                    <td className="whitespace-nowrap">Nita Parr</td>
                                    <td>-$1,042.82</td>
                                    <td className="text-center">
                                        <span className="badge bg-info/20 text-info rounded-full hover:top-0">In Process</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">#03</td>
                                    <td className="whitespace-nowrap">Dec 25, 2021</td>
                                    <td className="whitespace-nowrap">Carl Bell</td>
                                    <td>$1,828.16</td>
                                    <td className="text-center">
                                        <span className="badge bg-danger/20 text-danger rounded-full hover:top-0">Pending</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">#04</td>
                                    <td className="whitespace-nowrap">Nov 29, 2021</td>
                                    <td className="whitespace-nowrap">Dan Hart</td>
                                    <td>$1,647.55</td>
                                    <td className="text-center">
                                        <span className="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">#05</td>
                                    <td className="whitespace-nowrap">Nov 24, 2021</td>
                                    <td className="whitespace-nowrap">Jake Ross</td>
                                    <td>$927.43</td>
                                    <td className="text-center">
                                        <span className="badge bg-success/20 text-success rounded-full hover:top-0">Completed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">#06</td>
                                    <td className="whitespace-nowrap">Jan 26, 2022</td>
                                    <td className="whitespace-nowrap">Anna Bell</td>
                                    <td>$250.00</td>
                                    <td className="text-center">
                                        <span className="badge bg-info/20 text-info rounded-full hover:top-0">In Process</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="grid gap-6 xl:grid-flow-row">
                    <div className="panel h-full p-0 lg:col-span-2">
                        <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                            <h5 className="font-semibold text-lg ">Unique Visitors</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View</button>
                                        </li>
                                        <li>
                                            <button type="button">Update</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>

                        <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} className="overflow-hidden" />
                    </div>
                </div>

                {/*  Recent Transactions  */}
            </div>
        </div>
    );
};

export default Index;
