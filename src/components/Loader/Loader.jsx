import { CircleLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center top-0 left-0 bg-[]">
      <CircleLoader color="#1c12d0" size={150} />
    </div>
  );
};
