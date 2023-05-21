const CircleModal = ({ circleData, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Render the dynamic content based on circleData */}
        <h2>{circleData.title}</h2>
        <p>{circleData.description}</p>
        {/* Close button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CircleModal;