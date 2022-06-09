import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import urlFile from '../../url';

const Home = () => {
  //   console.log('urlFile', urlFile);
  const categories = [
    {
      id: 1,
      title: 'Sweeets',
      imageUrl: urlFile[0].url1,
    },
    {
      id: 2,
      title: 'Lassi',
      imageUrl: urlFile[1].url2,
    },
    {
      id: 3,
      title: 'Ice-cream',
      imageUrl: urlFile[2].url3,
    },
    {
      id: 4,
      title: 'Shrikhand',
      imageUrl: urlFile[3].url4,
    },
    {
      id: 5,
      title: 'Add-on',
      imageUrl: urlFile[4].url5,
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
