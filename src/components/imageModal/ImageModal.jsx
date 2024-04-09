import Modal from 'react-modal';

const ImageModal = ({ imageArray }) => {
  const { urls, description } = imageArray;
  const { regular } = urls;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div>
      <Modal>
        <img src={regular} alt={description} />
      </Modal>
    </div>
  );
};

export default ImageModal;
