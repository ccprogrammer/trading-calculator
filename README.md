# Trading Risk Calculator

A simple web application to help traders calculate the correct position size based on risk management principles.

## Features

- **Risk Management**: Calculate position size based on your capital and risk percentage
- **Profit Calculation**: See potential profit and risk/reward ratio
- **Real-time Validation**: Input validation with visual feedback
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface optimized for trading

## How to Use

1. **Capital**: Enter your total trading capital in USD
2. **Risk Percentage**: Enter the percentage of capital you're willing to risk (e.g., 1 for 1%, 2 for 2%)
3. **Entry Price**: Current price where you plan to enter the trade
4. **Stop Loss**: Price where you'll exit if the trade goes against you
5. **Target Price**: Price where you plan to take profits

## Calculation Formula

- **Risk Amount**: `Capital × Risk Percentage`
- **Position Size**: `Risk Amount ÷ Stop Loss Percentage`
- **Potential Profit**: `(Target Price - Entry Price) × Quantity`
- **Risk/Reward Ratio**: `Potential Profit ÷ Risk Amount`

## Example

- Capital: $10,000
- Risk: 2%
- Entry Price: $50,000
- Stop Loss: $48,000
- Target Price: $55,000

**Results:**
- Risk Amount: $200
- Position Size: $5,000
- Quantity: 0.1 BTC
- Potential Profit: $500
- Risk/Reward Ratio: 1:2.5

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling and responsive design
- `script.js` - JavaScript calculation logic

## Usage Tips

- Always use stop losses to limit your downside risk
- Never risk more than you can afford to lose
- Consider the risk/reward ratio before entering trades
- This tool assumes long positions (buying and expecting price to go up)

## Disclaimer

This tool is for educational purposes only. Trading involves substantial risk of loss. Always do your own research and never invest more than you can afford to lose.
