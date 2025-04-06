async function generateText() {
    const prompt = document.getElementById('prompt').value;
    const resultDiv = document.getElementById('generation-result');
    const tokenDiv = document.getElementById('token-usage');

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        resultDiv.innerHTML = data.result || data.error;
        if(data.tokens) {
            tokenDiv.textContent = `Tokens usados: ${data.tokens}`;
        }
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

async function moderateContent() {
    const text = document.getElementById('moderation-text').value;
    const resultDiv = document.getElementById('moderation-result');

    try {
        const response = await fetch('/moderate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        const scores = await response.json();
        let output = '<h3>Scores de Moderação:</h3>';
        for (const [category, score] of Object.entries(scores)) {
            output += `<p>${category}: ${Math.round(score * 100)}%</p>`;
        }
        resultDiv.innerHTML = output;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}
