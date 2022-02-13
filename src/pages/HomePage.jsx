import {
  ChartPieIcon,
  CubeIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { LatestNews, CryptoCurrencies } from "../components";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading . . .";

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 pb-24">
          <div className="mb-10 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-bold text-gray-600 sm:text-3xl">
              Global Crypto Stats
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap text-center">
            <div className="w-full p-4 sm:w-1/2 md:w-1/5">
              <div className="">
                <CubeIcon className="mx-auto h-16 w-16" />
                <h2 className="title-font mt-3 text-2xl font-medium text-gray-600">
                  {globalStats.total}
                </h2>
                <p className="leading-relaxed">Cryptocurrency</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/5">
              <div className="">
                <CurrencyDollarIcon className="mx-auto h-16 w-16" />
                <h2 className="title-font mt-3 text-2xl font-medium text-gray-600">
                  {millify(globalStats.totalExchanges)}
                </h2>
                <p className="leading-relaxed">Exchanges</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/5">
              <div className="">
                <LocationMarkerIcon className="mx-auto h-16 w-16" />
                <h2 className="title-font mt-3 text-2xl font-medium text-gray-600">
                  {millify(globalStats.totalMarketCap)}
                </h2>
                <p className="leading-relaxed">Market Cap</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/5">
              <div className="">
                <ChartPieIcon className="mx-auto h-16 w-16" />
                <h2 className="title-font mt-3 text-2xl font-medium text-gray-600">
                  {millify(globalStats.total24hVolume)}
                </h2>
                <p className="leading-relaxed">24h Volume</p>
              </div>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/5">
              <div className="">
                <PresentationChartLineIcon className="mx-auto h-16 w-16" />
                <h2 className="title-font mt-3 text-2xl font-medium text-gray-600">
                  {millify(globalStats.totalMarkets)}
                </h2>
                <p className="leading-relaxed">Crypto Markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CryptoCurrencies simplified />
      <LatestNews simplified />
    </>
  );
};

export default HomePage;
