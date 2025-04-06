# 📚 Decola Tech 2025 - IA Generativa com OpenAI  

**Projeto desenvolvido para o LAB *"Explorando os Recursos de IA Generativa com Copilot e OpenAI"***  

<div align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
</div>

---

## ✨ Funcionalidades  

✅ **Gerador de Texto com IA** - Cria conteúdos originais usando GPT-3.5-turbo  
✅ **Sistema de Moderação** - Analisa textos contra conteúdo inadequado  
✅ **Modo Demonstração** - Funciona sem chave de API (mock de respostas)  
✅ **Interface Web Intuitiva** - Fácil de usar e testar  

---

## 🛠️ Configuração Necessária  

### Pré-requisitos  
- Python 3.8+  
- Conta na [OpenAI](https://platform.openai.com/) (opcional para modo real)  

### Passos Iniciais  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/decola-tech-ia-lab.git
   cd decola-tech-ia-lab
   ```

2. Configure o ambiente virtual:  
   ```bash
   python -m venv venv
   source venv/Scripts/activate  # Linux/Mac: source venv/bin/activate
   ```

3. Instale as dependências:  
   ```bash
   pip install -r requirements.txt
   ```

4. Configure o arquivo `.env**:  
   ```ini
   OPENAI_API_KEY=sua_chave_aqui  # Opcional para modo real
   FLASK_ENV=development
   ```

   ⚠️ **Importante**:  
   - O arquivo `.env` não deve ser commitado (já está no `.gitignore`)  
   - Use `.env.example` como template  

---

## 🚀 Como Executar  

```bash
flask run
```  
Acesse: [http://localhost:5000](http://localhost:5000) ou o endereço gerado no fim do seu terminal 

### 🔧 Se encontrar erros:  
1. **Erro 500 nas requisições**:  
   - Verifique se criou o `.env` (mesmo vazio)  
   - No modo sem chave, o sistema usará dados simulados  

2. **Problemas de codificação**:  
   - Certifique-se que todos arquivos estão em **UTF-8**  

---

## 🌟 Modo Demonstração vs. Modo Real  

| Feature          | Demonstração                          | Com API Real                |
|------------------|---------------------------------------|-----------------------------|
| Geração de Texto | Mock com prefixo "[Modo Demonstração]"| Respostas reais da OpenAI   |
| Moderação        | Valores simulados                     | Análise precisa             |
| Tokens           | Estimados pelo tamanho do input       | Contagem real               |

---

## 📌 Alterações Cruciais para Funcionamento  

1. **Para uso REAL da OpenAI**:  
   - Obtenha uma API key em [OpenAI Platform](https://platform.openai.com/api-keys)  
   - Adicione-a no `.env`  

2. **Para desenvolvimento**:  
   - O mock automático já está implementado em `app.py`  
   - Edite `static/js/script.js` para ajustar chamadas AJAX se necessário  

---

## 📂 Estrutura do Projeto  

```
decola-tech-ia-lab/
├── static/          # Arquivos estáticos (CSS/JS)
├── templates/       # Páginas HTML
├── .env.example     # Template de configuração
├── app.py           # Lógica principal
└── requirements.txt # Dependências
```

<div align="center">
  ✨ **Pronto para explorar o poder da IA Generativa!** ✨  
</div>

> 💡 Dica profissional: Use o GitHub Copilot durante o desenvolvimento para ter sugestões de código diretamente no seu IDE!

---

### 🔄 Fluxo de Atualizações  
1. Edite os arquivos HTML/CSS para personalização  
2. Atualize `app.py` para novas funcionalidades  
3. Teste sempre com `flask run` antes de commitar  

**Nota:** Projeto otimizado para fins educacionais no Decola Tech 2025 🚀  

--- 

<div align="center">
  <sub>Criado com ❤️ para a Avanade | Decola Tech 2025</sub>
</div>

---

### 📝 Como Contribuir  
1. Faça um fork do projeto  
2. Crie uma branch (`git checkout -b feature/nova-feature`)  
3. Commit suas mudanças (`git commit -m 'Add some feature'`)  
4. Push para a branch (`git push origin feature/nova-feature`)  
5. Abra um Pull Request  

--- 

✨ **Bom desenvolvimento!** ✨
