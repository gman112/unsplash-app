import ImageItem from '../ImageItem';
import faker from 'faker';

const ImageList = () => {
  return (
    <div className='flex flex-col mt-8 mx-6'>
      <ImageItem imageURL='https://images.unsplash.com/photo-1642047529018-a4bd9de05947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' />
      <ImageItem imageURL='https://images.unsplash.com/photo-1631521573170-dd76b1bf82f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <ImageItem imageURL='https://images.unsplash.com/photo-1631521429085-cf2dbf98dd13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' />
      <ImageItem imageURL='https://images.unsplash.com/photo-1629824351055-d72aea8ef070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
    </div>
  );
};

export default ImageList;
