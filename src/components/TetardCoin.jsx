import { useState } from 'react';
import TetardCoinPNG from '../assets/112.png';
import TetardCoinPNg from '../assets/56.png';

function TetardCoin() {
    const [tetardCoin, setTetardCoin] = useState(0);
    const [ameliorations, setAmeliorations] = useState([0, 0, 0, 0]);
    const prices = [10, 30, 100, 1000];
    const incrementValues = [1, 3, 10, 100];

    const acheterAmelioration = (amount) => {
        if (tetardCoin >= prices[amount - 1]) {
            const updatedAmeliorations = [...ameliorations];
            updatedAmeliorations[amount - 1] += 1;
            setAmeliorations(updatedAmeliorations);
            setTetardCoin(tetardCoin - prices[amount - 1]);
        }
    };

    const getClickIncrement = () => {
        let addIncrement = 0;
        for (let i = 0; i < ameliorations.length; i++) {
            addIncrement += ameliorations[i] * incrementValues[i];
        }
        return addIncrement + 1;
    };

    const handleClic = () => {
        const increment = getClickIncrement();
        setTetardCoin(tetardCoin + increment);
    };

    return (
        <>
            <div className="TetardCoinAdd">
                <img
                    className="TetardCoinImg"
                    onClick={handleClic}
                    src={TetardCoinPNG}
                />
            </div>
            <div className="tetardCoin">
                TetardCoin : {tetardCoin}
            </div>
            <div className='clickerZ'>
                <h2>ClickerZ Force :</h2>
                <h3>{getClickIncrement()}</h3><img className="TetardCoinClick" src={TetardCoinPNg} />
            </div>
            <div className="amelio">
                <h2>Améliorations</h2>
                {[1, 2, 3, 4].map((amount) => (
                    <div key={amount}>
                        Lv.{ameliorations[amount - 1]} :
                        <button className="amelio" onClick={() => acheterAmelioration(amount)}>
                            {prices[amount - 1]} TetardCoin
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TetardCoin;