import { useParams } from 'react-router-dom';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import millify from 'millify';
import {
  BadgeCheckIcon,
  ChartBarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  FireIcon,
  StopIcon,
} from '@heroicons/react/solid';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return 'Loading . . .';

  const stats = [
    {
      id: 1,
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <CurrencyDollarIcon />,
    },
    {
      id: 2,
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: <BadgeCheckIcon />,
    },
    {
      id: 3,
      title: '24h Volume',
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ChartBarIcon />,
    },
    {
      id: 4,
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <CurrencyDollarIcon />,
    },
    {
      id: 5,
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <FireIcon />,
    },
  ];
  const genericStats = [
    {
      id: 1,
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <CurrencyDollarIcon />,
    },
    {
      id: 2,
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <CurrencyDollarIcon />,
    },
    {
      id: 3,
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? <CheckIcon /> : <StopIcon />,
      icon: <ExclamationIcon />,
    },
    {
      id: 4,
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleIcon />,
    },
    {
      id: 5,
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationIcon />,
    },
  ];

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 pb-24">
        <div className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10">
            <div className="w-full text-center lg:w-2/3">
              <h1 className="title-font mb-4 text-2xl font-bold text-gray-600">
                {cryptoDetails?.name} value statistics
              </h1>
              <p className="mb-8 leading-relaxed">
                An overview showing the stats of {cryptoDetails?.name}
              </p>
              <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
                {stats.map(({ id, icon, title, value }) => (
                  <div key={id} className="mb-3 w-full p-2">
                    <div className="flex h-full items-center justify-between rounded-2xl p-4 shadow shadow-indigo-500/20">
                      <div className="h-10 w-10">{icon}</div>
                      <h3 className="">{title}</h3>
                      <span className="title-font font-bold">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10">
            <div className="w-full text-center lg:w-2/3">
              <h1 className="title-font mb-4 text-2xl font-bold text-gray-600">
                Other statistics
              </h1>
              <p className="mb-8 leading-relaxed">
                An overview showing the stats of all cryptocurrencies
              </p>
              <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
                {genericStats.map(({ id, icon, title, value }) => (
                  <div key={id} className="mb-3 w-full p-2">
                    <div className="flex h-full items-center justify-between rounded-2xl p-4 shadow shadow-indigo-500/20">
                      <div className="h-10 w-10">{icon}</div>
                      <h3 className="">{title}</h3>
                      <span className="title-font font-bold">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5">
            <div className="mb-10 flex w-full flex-col text-center">
              <h1 className="title-font mb-2 text-2xl font-bold text-gray-600">
                {cryptoDetails?.name} Links
              </h1>
            </div>
            <div className="mx-auto w-full overflow-auto rounded-2xl shadow shadow-indigo-500/20 lg:w-2/3">
              <table className="whitespace-no-wrap w-full table-auto text-left">
                <thead className="">
                  <tr>
                    <th className="title-font rounded-tl rounded-bl bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-600">
                      Website
                    </th>
                    <th className="title-font bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider text-gray-600">
                      Link
                    </th>
                  </tr>
                </thead>
                {cryptoDetails?.links.map((link) => (
                  <tbody key={link.name}>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3">
                        {link.type}
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-indigo-500">
                        <a target="_blank" rel="noreferrer" href={link.url}>
                          {link.url}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CryptoDetails;
