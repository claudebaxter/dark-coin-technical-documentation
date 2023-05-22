const CircleModal = ({ circleData, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Render the dynamic content based on circleData */}
        <div className="quarter-wrapper">
          <h2 className="quarter">{circleData.title}</h2>
        </div>
        <p>{circleData.description}</p>
        <p>{circleData.description2}</p>
        <p>{circleData.description3}</p>
        <p>{circleData.description4}</p>
        <p>{circleData.description5}</p>
        {/* Close button */}
        <button className="close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CircleModal;