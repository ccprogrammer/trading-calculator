function calculateRisk() {
    // Get input values
    const capital = parseFloat(document.getElementById('capital').value);
    const risk = parseFloat(document.getElementById('risk').value);
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);
    const targetPrice = parseFloat(document.getElementById('targetPrice').value);

    // Validate inputs
    if (!capital || !risk || !entryPrice || !stopLoss || !targetPrice) {
        alert('Please fill in all fields with valid numbers.');
        return;
    }

    if (capital <= 0 || risk <= 0 || entryPrice <= 0 || stopLoss <= 0 || targetPrice <= 0) {
        alert('All values must be positive numbers.');
        return;
    }

    if (stopLoss >= entryPrice) {
        alert('Stop loss must be lower than entry price for long positions.');
        return;
    }

    if (targetPrice <= entryPrice) {
        alert('Target price must be higher than entry price for long positions.');
        return;
    }

    // Calculate risk amount (capital * risk percentage)
    const riskAmount = capital * (risk / 100);

    // Calculate stop loss percentage from entry price
    const stopLossPercent = ((entryPrice - stopLoss) / entryPrice) * 100;

    // Calculate position size using the formula: (capital * risk) / stop loss percentage
    // This ensures we risk only the specified percentage of capital
    const positionSize = riskAmount / (stopLossPercent / 100);

    // Calculate quantity (how many units to buy)
    const quantity = positionSize / entryPrice;

    // Calculate potential profit
    const potentialProfit = (targetPrice - entryPrice) * quantity;

    // Calculate profit percentage
    const profitPercent = ((targetPrice - entryPrice) / entryPrice) * 100;

    // Calculate risk/reward ratio
    const riskRewardRatio = Math.abs(potentialProfit / riskAmount);

    // Display results
    displayResults({
        riskAmount: riskAmount,
        stopLossPercent: stopLossPercent,
        positionSize: positionSize,
        quantity: quantity,
        potentialProfit: potentialProfit,
        profitPercent: profitPercent,
        riskRewardRatio: riskRewardRatio
    });
}

function displayResults(results) {
    // Format and display the results
    document.getElementById('riskAmount').textContent = formatCurrency(results.riskAmount);
    document.getElementById('stopLossPercent').textContent = formatPercentage(results.stopLossPercent);
    document.getElementById('positionSize').textContent = formatCurrency(results.positionSize);
    document.getElementById('quantity').textContent = formatQuantity(results.quantity);
    document.getElementById('potentialProfit').textContent = formatCurrency(results.potentialProfit);
    document.getElementById('profitPercent').textContent = formatPercentage(results.profitPercent);
    document.getElementById('riskRewardRatio').textContent = formatRatio(results.riskRewardRatio);

    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function formatCurrency(amount) {
    if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(2) + 'M';
    } else if (amount >= 1000) {
        return '$' + (amount / 1000).toFixed(2) + 'K';
    } else {
        return '$' + amount.toFixed(2);
    }
}

function formatPercentage(percent) {
    return percent.toFixed(2) + '%';
}

function formatQuantity(quantity) {
    if (quantity >= 1000000) {
        return (quantity / 1000000).toFixed(2) + 'M';
    } else if (quantity >= 1000) {
        return (quantity / 1000).toFixed(2) + 'K';
    } else if (quantity < 1) {
        return quantity.toFixed(6);
    } else {
        return quantity.toFixed(2);
    }
}

function formatRatio(ratio) {
    return '1:' + ratio.toFixed(2);
}

// Add event listeners for real-time validation and better UX
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear any previous validation styling
            this.style.borderColor = '#30363d';
            
            // Basic validation
            const value = parseFloat(this.value);
            if (this.value && (isNaN(value) || value <= 0)) {
                this.style.borderColor = '#f85149';
            }
        });

        input.addEventListener('keypress', function(e) {
            // Allow Enter key to trigger calculation
            if (e.key === 'Enter') {
                calculateRisk();
            }
        });
    });

    // Add some example values for quick testing
    document.getElementById('capital').addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., 10000';
        }
    });

    document.getElementById('risk').addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., 2 (for 2% risk)';
        }
    });

    document.getElementById('entryPrice').addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., 50000';
        }
    });

    document.getElementById('stopLoss').addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., 48000';
        }
    });

    document.getElementById('targetPrice').addEventListener('focus', function() {
        if (!this.value) {
            this.placeholder = 'e.g., 55000';
        }
    });
});

// Add keyboard shortcut (Ctrl+Enter or Cmd+Enter) for calculation
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        calculateRisk();
    }
});
