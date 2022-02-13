import millify from 'millify';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return 'Loading . . .';

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 pb-24">
        {!simplified ? (
          <div className="mb-10 flex w-full flex-col text-center">
            <h1 className="title-font text-2xl font-bold text-gray-600 sm:text-3xl">
              Top Cryptocurrencies in the world
            </h1>
          </div>
        ) : (
          <div className="mb-10 flex w-full flex-col text-center">
            <h1 className="title-font text-2xl font-bold text-gray-600 sm:text-3xl">
              Top 10 Cryptocurrencies in the world
            </h1>
          </div>
        )}
        {!simplified && (
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-full p-2">
                <div className="relative">
                  <label htmlFor="search"></label>
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search Crypto . . ."
                    className="mb-10 w-full rounded-full border border-gray-300 py-2 px-5 text-base leading-6 text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="-m-4 flex flex-wrap">
          {cryptos?.map((currency) => (
            <Link
              to={`/crypto/${currency.uuid}`}
              key={currency.uuid}
              className="p-4 lg:w-1/2"
            >
              <div className="flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center shadow shadow-indigo-500/20 transition duration-300 hover:shadow-xl sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-24 w-24 flex-shrink-0 rounded-2xl object-cover object-center sm:mb-0"
                  src={currency.iconUrl}
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-xl font-bold text-gray-600">
                    {currency.name}
                  </h2>
                  <h3 className="mb-3 font-bold text-gray-500">
                    Rank: {currency.rank}
                  </h3>
                  <p className="mb-1">Price: {millify(currency.price)}</p>
                  <p className="mb-1">
                    Market Cap: {millify(currency.marketCap)}
                  </p>
                  <p className="mb-1">
                    Daily Change: {millify(currency.change)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {simplified && (
            <Link to="/cryptocurrencies" className="w-full p-2">
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

export default CryptoCurrencies;
