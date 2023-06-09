function Home() {
    return(
        <div className="Home">
            <div className="triangletopdp"></div>
            <img className="icon2" src="/Icon-new.png"></img>
            <h1 className="title">Dark Coin Technical Documentation</h1>
            <h1>Algorand Standard Asset 1088771340</h1>
            <div className="homep-container">
                <p>
                    Dark Coin is an experimental "grassroots" community project that is working to develop and expand the Algorand ASA defi space. Dark Coin is managed by a decentralized autonomous organization (DAO), meaning that the project is collectively owned and democratically managed by its members based on specific rules enforced by the blockchain.
                </p>
                <p>
                    The Dark Coin team is developing a dApp that will be accessed via our website, https://dark-coin.com. Users are currently able to use it to vote on governance proposals, and eventually will be able to send and receive private transactions on the Algorand Network.
                </p>
                <p>
                    Our dApp users are able to participate in governance and vote on decisions deciding the projects direction/future. Users are able to cast votes and submit proposals using NFT voting tokens.
                 </p>
                <p>
                    When finished, governance users will be able to control the creator wallet and liquidity pool by submitting smart contract proposals. If passed by a vote, the smart contract will be executed by the creator wallet. This allows the community to control the supply of voting tokens, the price of tokens, the income earned by the project, and make adjustments to liquidity.
                </p>
            </div>
            <div className="trianglebottom"></div>
        </div>
    )
}

export default Home;