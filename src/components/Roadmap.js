import React, { useState } from 'react';
import CircleModal from './CircleModal';

function Roadmap() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCircle, setSelectedCircle] = useState(null);

    const handleCircleClick = (circleData) => {
        setSelectedCircle(circleData);
        setIsModalOpen(true);
    };

    return(
        <div>
            <div className="triangletoprm"></div>
            <h1 className="titlerm">Dark Coin Roadmap 2022</h1>
            <div className="line">
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q1 2022",
                        description: "Your content for Q1 2022",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2022",
                        description: "Your content for Q2 2022",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2022",
                        description: "Your content for Q3 2022",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2022",
                        description: "Your content for Q4 2022",
                    })}>Q4</div>
            </div>
            <h1 className="titlerm">Dark Coin Roadmap 2023</h1>
            <div className="line">
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q1 2023",
                        description: "Your content for Q1 2023",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2023",
                        description: "Your content for Q2 2023",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2023",
                        description: "Your content for Q3 2023",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2023",
                        description: "Your content for Q4 2023",
                    })}>Q4</div>
            </div>
            <h1 className="titlerm">Dark Coin Roadmap 2024</h1>
            <div className="line">
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q1 2024",
                        description: "Your content for Q1 2024",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2024",
                        description: "Your content for Q2 2024",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2024",
                        description: "Your content for Q3 2024",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2024",
                        description: "Your content for Q4 2024",
                    })}>Q4</div>
            </div>
            <div className="trianglebottom"></div>

            {isModalOpen && selectedCircle && (
                <CircleModal 
                    circleData={selectedCircle} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}

        </div>
    )
}

export default Roadmap;