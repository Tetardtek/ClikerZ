import { useState } from 'react';
import TetardCoinPNG from '../assets/112.png'

function TetardCoin() {
    const [tetardCoin, setTetardCoin] = useState(0)

return (
    <>
        <div className="TetardCoinAdd">
            <img className="TetardCoinImg" onClick={() => setTetardCoin((tetardCoin) => tetardCoin + 1)} src={TetardCoinPNG} />
        </div>
        <div className="tetardCoin">
            TetardCoin : {tetardCoin}
        </div>
    </>
);
}

export default TetardCoin;