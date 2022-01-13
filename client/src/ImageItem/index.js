const ImageItem = ({ imageURL }) => {
  return (
    <div className='my-6 rounded-lg'>
      <img src={imageURL} alt='' className='rounded-lg' />
    </div>
  );
};

export default ImageItem;
