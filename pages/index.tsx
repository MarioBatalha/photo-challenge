import type { NextPage } from 'next';

import Card from '../components/card';
import NoImage from '../components/noImage';


const Home: NextPage = () => {
  const data = 'Mario'
  if(data) {
    return <Card />
  }else {
    return <NoImage />
  }
}

export default Home;
