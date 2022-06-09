import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

import urlFile from '../../url';

const categories = [
  {
    id: 1,
    title: 'Sweeets',
    imageUrl: urlFile[0].url1,
    route: 'shop/sweets',
  },
  {
    id: 2,
    title: 'Lassi',
    imageUrl: urlFile[1].url2,
    route: 'shop/lassi',
  },
  {
    id: 3,
    title: 'Ice-cream',
    imageUrl: urlFile[2].url3,
    route: 'shop/ice-cream',
  },
  {
    id: 4,
    title: 'Shrikhand',
    imageUrl: urlFile[3].url4,
    route: 'shop/shrikhand',
  },
  {
    id: 5,
    title: 'Add-on',
    imageUrl: urlFile[4].url5,
    route: 'shop/add-on',
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
