import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const LatestNews = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return 'Loading . . .';

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 pb-24">
        <div className="mb-10 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-bold text-gray-600 sm:text-3xl">
            Latest News
          </h1>
        </div>
        {!simplified && (
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="search"></label>
                  <select
                    onChange={(e) => setNewsCategory(e.target.value)}
                    className="mb-10 w-full rounded-full border border-gray-300 py-2 px-5 text-base leading-6 text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  >
                    <option value="Cryptocurrency">Cryptocurrency</option>
                    {data?.data?.coins.map((coin) => (
                      <option key={coin.name} value={coin.name}>
                        {coin.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="-m-4 flex flex-wrap">
          {cryptoNews.value.map((news, i) => (
            <div key={i} className="p-4 md:w-1/2">
              <div className="h-full overflow-hidden rounded-2xl shadow shadow-indigo-500/20 transition duration-300 hover:shadow-xl">
                <img
                  className="w-full object-cover object-center md:h-56 lg:h-56"
                  src={
                    news?.image?.thumbnail?.contentUrl ||
                    'https://dummyimage.com/720x400'
                  }
                  alt="crypto news"
                />
                <div className="p-6">
                  <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                    Crypto News
                  </h2>
                  <h1 className="title-font mb-3 text-xl font-bold text-gray-600">
                    {news.name}
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    {news.description > 15
                      ? `${news.description.substring(0, 15)}...`
                      : news.description}
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={news.url}
                      className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                      <img
                        className="h-7 w-7"
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          'https://dummyimage.com/720x400'
                        }
                        alt="news"
                      />
                      <p className="ml-2">{news.provider[0]?.name}</p>
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-400">
                      <p>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {simplified && (
            <Link to="/news" className="w-full p-2">
              <button className="mx-auto mt-10 flex rounded-full border-0 bg-indigo-500 py-2 px-10 text-lg font-bold text-white transition hover:bg-indigo-600">
                Show More
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
