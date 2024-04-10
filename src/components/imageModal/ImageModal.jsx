import Modal from 'react-modal';

const ImageModal = ({ image, isOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Image modal"
        appElement={document.getElementById('root')}
      >
        <img src={image} alt="" />
      </Modal>
    </div>
  );
};

export default ImageModal;
