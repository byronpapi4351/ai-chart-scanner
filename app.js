const scannerResults = [
  {
    symbol: 'BTC/USD',
    sentiment: 'Bullish',
    score: 91,
    setup: 'Breakout continuation',
    timeframe: '4H',
    confidence: 'High',
    trend: '+4.8%'
  },
  {
    symbol: 'NVDA',
    sentiment: 'Bullish',
    score: 88,
    setup: 'Trend acceleration',
    timeframe: '1D',
    confidence: 'High',
    trend: '+3.1%'
  },
  {
    symbol: 'EUR/USD',
    sentiment: 'Neutral',
    score: 64,
    setup: 'Range breakout candidate',
    timeframe: '1H',
    confidence: 'Medium',
    trend: '+0.6%'
  },
  {
    symbol: 'ETH/USD',
    sentiment: 'Bullish',
    score: 85,
    setup: 'Momentum shift',
    timeframe: '4H',
    confidence: 'High',
    trend: '+2.7%'
  }
];

const strategyLibrary = [
  {
    title: 'Breakout Momentum',
    summary: 'Captures impulsive moves after price clears key resistance with strong volume confirmation.',
    market: 'Crypto / Stocks',
    tf: '15m / 1H / 4H',
    risk: 'Medium',
    tags: ['Momentum', 'Trend', 'Breakout']
  },
  {
    title: 'Trend Continuation',
    summary: 'Tracks established directional bias and only enters on pullbacks into structure support.',
    market: 'Forex / Stocks',
    tf: '1H / 4H / 1D',
    risk: 'Moderate',
    tags: ['Trend', 'Pullback', 'Classic']
  },
  {
    title: 'Volatility Compression',
    summary: 'Targets low-volatility squeeze zones that anticipate expansion and directional follow-through.',
    market: 'Indices / Futures',
    tf: '30m / 1H / Daily',
    risk: 'Adaptive',
    tags: ['Squeeze', 'Reversal', 'Volatility']
  }
];

const signalInsights = [
  {
    title: 'Breakout confirmation',
    badge: 'High conviction',
    points: ['Price closed above prior swing high', 'Volume expanded above 20-period average', 'Trend score remains positive across 3 timeframes']
  },
  {
    title: 'Momentum expansion',
    badge: 'Trend strength',
    points: ['ADX remains elevated', 'RSI confirms continuation without overbought exhaustion', 'Moving averages remain stacked bullish']
  },
  {
    title: 'Risk filter',
    badge: 'Protection mode',
    points: ['Avoids entries during macro volatility spikes', 'Prioritizes structure-based exits', 'Cuts risk on invalidation below key support']
  }
];

function renderScanner() {
  const container = document.getElementById('scannerResults');

  container.innerHTML = scannerResults
    .map(
      (item) => `
        <article class="result-card">
          <div class="result-header">
            <span class="symbol-tag">${item.symbol}</span>
            <span class="score-badge">${item.score}/100</span>
          </div>

          <h3>${item.setup}</h3>
          <p>${item.sentiment} setup on the ${item.timeframe} timeframe.</p>

          <div class="meta-row">
            <span>Confidence <strong>${item.confidence}</strong></span>
            <span>Trend <strong>${item.trend}</strong></span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderStrategies() {
  const container = document.getElementById('strategyGrid');

  container.innerHTML = strategyLibrary
    .map(
      (item) => `
        <article class="strategy-card">
          <div class="strategy-head">
            <h3>${item.title}</h3>
            <span class="risk-tag">${item.risk}</span>
          </div>

          <p>${item.summary}</p>

          <div class="badge-row">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>

          <div class="meta-row">
            <span>Market <strong>${item.market}</strong></span>
            <span>TF <strong>${item.tf}</strong></span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderSignals() {
  const container = document.getElementById('signalList');

  container.innerHTML = signalInsights
    .map(
      (item) => `
        <article class="signal-card">
          <div class="signal-top">
            <h3>${item.title}</h3>
            <span class="signal-badge">${item.badge}</span>
          </div>
          <ul>
            ${item.points.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function initializeFilters() {
  const chips = document.querySelectorAll('.filter-chip');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((btn) => btn.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

renderScanner();
renderStrategies();
renderSignals();
initalizeFilters();
