import React, { useState, useCallback, ChangeEvent } from 'react';
import getApiData from '../utils/getApiData';
import useDebounce from '../utils/debounce';

type ResponseHerosProps = {
  id: number;
  name: string;
};

type ResponseApi = {
  results: ResponseHerosProps[];
};

const Home = () => {
  const debounce = useDebounce();
  const [responseHeros, setResponseHeros] = useState<ResponseHerosProps[]>([]);

  const getSearch = useCallback(async (heroName: string) => {
    const response = await getApiData<ResponseApi>({
      endpoint: 'characters',
      nameStartsWith: heroName,
    });

    setResponseHeros(response.results);
    console.log(response.results);
  }, []);

  const handleSearchHero = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      debounce(() => {
        if (!e.target.value) {
          setResponseHeros([]);
          return;
        }
        getSearch(e.target.value);
      }, 500);
    },
    [debounce, getSearch]
  );

  return (
    <>
      <input type="text" onChange={handleSearchHero} />
      <br />
      <ul>
        {responseHeros &&
          responseHeros.map(hero => <li key={hero.id}>{hero.name}</li>)}
      </ul>
    </>
  );
};

export default Home;
