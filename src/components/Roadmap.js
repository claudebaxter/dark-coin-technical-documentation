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
                        description: "• 02/12/21 V1 Token minted ASA 601894079",
                        description2: 
                            "• 02/12/22 V1 LP initialized on Tinyman (TRX ID: NALOAHDFJIY4TLYSON25HIYS2OXCHA2T43I7JJC27PXAZOHOZP7A)",
                        description3: "• 02/19/22 Early LP backer airdrop delivered",
                        description4: "• 02/21/22 - 03/24/22 Published first darkpaper edition",
                        description5: "• 02/25/22 Staking rewards go live",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2022",
                        description: "• 05/04/22 Dark Coin verification by Algorand Inc",
                        description2: "• 05/13/22 Community vote to select winning NFT concept art pieces",
                        description3: "• 05/25/22 Vote passed to lock liquidity with TinyLock",
                        description4: "• 05/25/22 Vote passed to lock liquidity for one year duration",
                        description5: "• 06/13/22 Vote passed to remove DEX from roadmap, focus on DAO and privacy features",
                        description6: "• 06/13/22 u/RagingDargon_69 joins the team as Community Manager / Moderator",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2022",
                        description: "• 07/18/22 Dark Coin DAO 1st Governance NFT Series minted",
                        description2: "• 08/01/22 Dark Coin Warrior Tier 1 & 2 Staking NFTs go live",
                        description3: "• 08/04/22 Anders Bergquist joins the team as Lead Developer",
                        description4: "• 08/10/22 Dark Coin verification by Algoexplorer",
                        description5: "• 08/19/22 Dark Coin DAO voting dApp goes live",
                        description6: "• 08/19/22-8/28/22 Dark Coin DAO votes, moves staking plan to AlgoFaucet",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2022",
                        description: "• 10/10/22 Dark Coin Transaction Mixer goes live at dark-coin.com",
                        description1: "• 10/10/22 Dark Coin DAO votes, joins Puddn Mine project",
                        description2: "• 10/29/22 Dark Coin NFT Marketplace goes live at dark-coin.com",
                    })}>Q4</div>
            </div>
            <h1 className="titlerm">Dark Coin Roadmap 2023</h1>
            <div className="line">
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q1 2023",
                        description: "• 01/30/23 dark-coin.com DAO update using box storage for proposal data",
                        description2: "• 01/30/23-02/13/23 Dark Coin DAO votes to allow other projects to list NFTs in marketplace",
                        description3: "• 02/08/23-02/22/23 Dark Coin DAO votes, approving development of AI Arena",
                        description4: "• 02/19/23 Happy Hoomens becomes first partner to list NFTs in marketplace",
                        description5: "• 03/06/23 Dark Coin AI NFT Arena goes live at dark-coin.com",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2023",
                        description: "• 03/20/23-04/01/23 Dark Coin DAO votes, approving box-storage leaderboard for AI Arena",
                        description2: "• 04/03/23 MyAlgo theft--LP holder compromised, 185 LP tokens stolen",
                        description3: "• 04/03/23 Emergency measures taken to secure project LP",
                        description4: "• 04/04/23-04/29/23 Dark Coin DAO emergency votes to approve V2 Token launch & Roadmap",
                        description5: "• 05/12/23 Dark Coin V2 token & reimbursement distribution dApp go live",
                        description6: "• 05/20/23-06/03/23 Dark Coin DAO votes to modify staking rewards plan to increase LP rewards",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2023",
                        description: "• 2023 Multi-Sig Election Scheduled",
                        description2: "• DAO proposal: Arena Bossfights (Lottery)?",
                        description3: "• DAO proposal: Game Project(s)?",
                        description4: "• DAO proposal: Dark Coin xGov proposal?",
                        description5: "• ",
                        description6: "• Tie in Council dApp to discord bot",
                        description7: "• Development of rewards claim dApp features",
                        description8: "• ",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2023",
                        description: "• (action items pending)",
                        description2: "• ",
                        description3: "• ",
                        description4: "• ",
                        description5: "• ",
                        description6: "• ",
                        description7: "• ",
                    })}>Q4</div>
            </div>
            <h1 className="titlerm">Dark Coin Roadmap 2024</h1>
            <div className="line">
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q1 2024",
                        description: "• (action items pending)",
                        description2: "• ",
                        description3: "• ",
                        description4: "• ",
                        description5: "• ",
                        description6: "• ",
                        description7: "• ",
                    })}>Q1</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q2 2024",
                        description: "• (action items pending)",
                        description2: "• ",
                        description3: "• ",
                        description4: "• ",
                        description5: "• ",
                        description6: "• ",
                        description7: "• ",
                    })}>Q2</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q3 2024",
                        description: "• (action items pending)",
                        description2: "• ",
                        description3: "• ",
                        description4: "• ",
                        description5: "• ",
                        description6: "• ",
                        description7: "• ",
                    })}>Q3</div>
                <div className="circle" 
                    onClick={() => handleCircleClick({
                        title: "Q4 2024",
                        description: "• (action items pending)",
                        description2: "• ",
                        description3: "• ",
                        description4: "• ",
                        description5: "• ",
                        description6: "• ",
                        description7: "• ",
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