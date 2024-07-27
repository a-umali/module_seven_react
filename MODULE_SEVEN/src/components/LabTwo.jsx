import React, { useState, useEffect } from 'react';

export const LabTwo = () => {
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

    const BitcoinRates = () => {
        const [currency, setCurrency] = useState(currencies[0]);
        const [bitcoinPrice, setBitcoinPrice] = useState(null);

        useEffect(() => {
            const fetchBitcoinPrice = async () => {
                try {
                    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchBitcoinPrice();

            // Cleanup function (optional in this case)
            return () => {
                // You can perform cleanup here if needed
            };
        }, [currency]); // Dependency array ensures useEffect runs on currency change

        const options = currencies.map(curr => (
            <option value={curr} key={curr}>
                {curr}
            </option>
        ));

        return (
            <div className="BitcoinRates componentBox">
                <h3>Bitcoin Exchange Rate</h3>
                <p>
                    {bitcoinPrice !== null ? `1 Bitcoin = ${bitcoinPrice} ${currency}` : 'Loading...'}
                </p>
                <label>
                    Choose currency:
                    <select value={currency} onChange={e => setCurrency(e.target.value)}>
                        {options}
                    </select>
                </label>
            </div>
        );
    };

    return (
        <div>
            <BitcoinRates />
        </div>
    );
};

export default LabTwo;