// ==========================================
// Italian Practice - Main Script
// ==========================================

// Estado da aplicação
const state = {
    currentPhrase: null,
    currentIndex: 0,
    isPlaying: false,
    speed: 0.9,
    availableIndexes: [],  // Índices das frases ainda não usadas no Player
    quiz: {
        currentPhrase: null,
        correct: 0,
        wrong: 0,
        hintUsed: false,
        availableIndexes: [],  // Índices das frases ainda não usadas no Quiz
    },
    pronunciation: {
        currentPhrase: null,
        correct: 0,
        wrong: 0,
        isListening: false,
        recognition: null,
        availableIndexes: [],  // Índices das frases ainda não usadas
    },
    dialog: {
        current: null,
        currentStep: 0,
        isPlaying: false,
        isPracticing: false,
        isPaused: false
    },
    reading: {
        currentText: null,
        isPlaying: false,
        isPaused: false,
        speed: 0.8,
        utterance: null,
        chunks: [],
        currentChunk: 0
    }
};

// Elementos do DOM
const elements = {
    // Player
    phrasePt: document.getElementById('phrase-pt'),
    phraseIt: document.getElementById('phrase-it'),
    btnNew: document.getElementById('btn-new'),
    btnPlay: document.getElementById('btn-play'),
    btnShow: document.getElementById('btn-show'),
    speedSlider: document.getElementById('speed'),
    speedValue: document.getElementById('speed-value'),
    status: document.getElementById('status'),
    currentIndex: document.getElementById('current-index'),
    totalPhrases: document.getElementById('total-phrases'),

    // Quiz
    quizPhrasePt: document.getElementById('quiz-phrase-pt'),
    quizAnswer: document.getElementById('quiz-answer'),
    btnCheck: document.getElementById('btn-check'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnHint: document.getElementById('btn-hint'),
    btnNextQuiz: document.getElementById('btn-next-quiz'),
    quizFeedback: document.getElementById('quiz-feedback'),
    scoreCorrect: document.getElementById('score-correct'),
    scoreWrong: document.getElementById('score-wrong'),
    scoreRate: document.getElementById('score-rate'),

    // Pronúncia
    pronPhrase: document.getElementById('pron-phrase'),
    pronPhrasePt: document.getElementById('pron-phrase-pt'),
    pronResult: document.getElementById('pron-result'),
    pronFeedback: document.getElementById('pron-feedback'),
    btnPronNew: document.getElementById('btn-pron-new'),
    btnPronListen: document.getElementById('btn-pron-listen'),
    btnPronSpeak: document.getElementById('btn-pron-speak'),
    pronStatus: document.getElementById('pron-status'),
    pronCorrect: document.getElementById('pron-correct'),
    pronWrong: document.getElementById('pron-wrong'),
    pronRate: document.getElementById('pron-rate'),
    browserWarning: document.getElementById('browser-warning'),

    // Diálogos
    dialogSelect: document.getElementById('dialog-select'),
    dialogDescription: document.getElementById('dialog-description'),
    dialogConversation: document.getElementById('dialog-conversation'),
    btnDialogStart: document.getElementById('btn-dialog-start'),
    btnDialogPause: document.getElementById('btn-dialog-pause'),
    btnDialogRepeat: document.getElementById('btn-dialog-repeat'),
    btnDialogPractice: document.getElementById('btn-dialog-practice'),
    dialogStatus: document.getElementById('dialog-status'),

    // Leitura
    readingLevel: document.getElementById('reading-level'),
    readingLevelBadge: document.getElementById('reading-level-badge'),
    readingTitle: document.getElementById('reading-title'),
    readingText: document.getElementById('reading-text'),
    btnReadingNew: document.getElementById('btn-reading-new'),
    btnReadingPlay: document.getElementById('btn-reading-play'),
    btnReadingPause: document.getElementById('btn-reading-pause'),
    readingSpeedSlider: document.getElementById('reading-speed'),
    readingSpeedValue: document.getElementById('reading-speed-value'),
    readingStatus: document.getElementById('reading-status'),
    btnReadingTranslation: document.getElementById('btn-reading-translation'),
    readingTranslationBox: document.getElementById('reading-translation-box'),
    readingTranslation: document.getElementById('reading-translation'),

    // Mode buttons
    modeBtns: document.querySelectorAll('.mode-btn'),
    modeSections: document.querySelectorAll('.mode-section')
};

// ==========================================
// Inicialização
// ==========================================
function init() {
    // Verificar suporte à Web Speech API
    if (!('speechSynthesis' in window)) {
        alert('Il tuo browser non supporta la sintesi vocale. Prova Chrome o Edge.');
        return;
    }

    // Configurar total de frases
    elements.totalPhrases.textContent = frases.length;

    // Event listeners - Player
    elements.btnNew.addEventListener('click', loadRandomPhrase);
    elements.btnPlay.addEventListener('click', playPhrase);
    elements.btnShow.addEventListener('click', showItalian);
    elements.speedSlider.addEventListener('input', updateSpeed);

    // Event listeners - Quiz
    elements.btnStartQuiz.addEventListener('click', startQuiz);
    elements.btnCheck.addEventListener('click', checkAnswer);
    elements.btnHint.addEventListener('click', showHint);
    elements.btnNextQuiz.addEventListener('click', nextQuizQuestion);
    elements.quizAnswer.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !elements.btnCheck.disabled) {
            checkAnswer();
        }
    });

    // Event listeners - Pronúncia
    elements.btnPronNew.addEventListener('click', loadPronunciationPhrase);
    elements.btnPronListen.addEventListener('click', listenPronunciationPhrase);
    elements.btnPronSpeak.addEventListener('click', startSpeechRecognition);

    // Event listeners - Diálogos
    elements.dialogSelect.addEventListener('change', onDialogSelect);
    elements.btnDialogStart.addEventListener('click', startDialog);
    elements.btnDialogPause.addEventListener('click', togglePauseDialog);
    elements.btnDialogRepeat.addEventListener('click', repeatDialog);
    elements.btnDialogPractice.addEventListener('click', practiceDialog);

    // Event listeners - Leitura
    elements.btnReadingNew.addEventListener('click', loadRandomText);
    elements.btnReadingPlay.addEventListener('click', playReadingText);
    elements.btnReadingPause.addEventListener('click', togglePauseReading);
    elements.btnReadingTranslation.addEventListener('click', toggleTranslation);
    elements.readingSpeedSlider.addEventListener('input', updateReadingSpeed);
    elements.readingLevel.addEventListener('change', loadRandomText);

    // Event listeners - Mode navigation
    elements.modeBtns.forEach(btn => {
        btn.addEventListener('click', () => switchMode(btn.dataset.mode));
    });

    // Carregar vozes
    speechSynthesis.onvoiceschanged = () => {
        console.log('Vozes carregadas:', speechSynthesis.getVoices().length);
    };

    // Inicializar Speech Recognition
    initSpeechRecognition();

    // Carregar opções de diálogos
    loadDialogOptions();
}

// ==========================================
// Navegação entre modos
// ==========================================
function switchMode(mode) {
    // Atualizar botões
    elements.modeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Atualizar seções
    elements.modeSections.forEach(section => {
        section.classList.toggle('active', section.id === `${mode}-mode`);
    });

    // Parar qualquer fala em andamento
    speechSynthesis.cancel();

    // Parar reconhecimento de voz se estiver ativo
    if (state.pronunciation.recognition && state.pronunciation.isListening) {
        state.pronunciation.recognition.stop();
    }

    setStatus('');
}

// ==========================================
// Funções do Player
// ==========================================
function loadRandomPhrase() {
    // Se não há mais frases disponíveis, reiniciar a lista
    if (state.availableIndexes.length === 0) {
        state.availableIndexes = [...Array(frases.length).keys()];
        // Embaralhar a lista (Fisher-Yates shuffle)
        for (let i = state.availableIndexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.availableIndexes[i], state.availableIndexes[j]] =
                [state.availableIndexes[j], state.availableIndexes[i]];
        }
    }

    // Pegar o próximo índice da lista e removê-lo
    const randomIndex = state.availableIndexes.pop();
    state.currentPhrase = frases[randomIndex];
    state.currentIndex = frases.length - state.availableIndexes.length;

    elements.phrasePt.textContent = state.currentPhrase.pt;
    elements.phraseIt.textContent = '???';
    elements.phraseIt.classList.add('hidden');
    elements.currentIndex.textContent = state.currentIndex;

    elements.btnPlay.disabled = false;
    elements.btnShow.disabled = false;

    setStatus('Frase caricata! Tocca Ascolta.');
}

function showItalian() {
    elements.phraseIt.textContent = state.currentPhrase.it;
    elements.phraseIt.classList.remove('hidden');
    elements.phraseIt.classList.add('highlight');
    setTimeout(() => elements.phraseIt.classList.remove('highlight'), 500);
}

async function playPhrase() {
    if (!state.currentPhrase || state.isPlaying) return;

    state.isPlaying = true;
    elements.btnPlay.disabled = true;
    elements.btnNew.disabled = true;

    try {
        // Destaca o português (apenas texto, sem falar)
        setStatus('🇧🇷 Leggi il portoghese...');
        elements.phrasePt.classList.add('highlight');
        elements.phrasePt.classList.remove('highlight');
        showItalian();
        setStatus('🇮🇹 Riproduzione in italiano...');
        elements.phraseIt.classList.add('highlight');
        await speak(state.currentPhrase.it, 'it-IT');
        elements.phraseIt.classList.remove('highlight');

        setStatus('✅ Completato! Tocca Nuova frase.');
    } catch (error) {
        console.error('Erro na síntese de voz:', error);
        setStatus('❌ Errore di riproduzione. Riprova.');
    } finally {
        state.isPlaying = false;
        elements.btnPlay.disabled = false;
        elements.btnNew.disabled = false;
    }
}

// ==========================================
// Funções do Quiz
// ==========================================
function startQuiz() {
    // Sempre reiniciar ao clicar (seja iniciar ou reiniciar)
    state.quiz.correct = 0;
    state.quiz.wrong = 0;
    state.quiz.availableIndexes = [];  // Forçar embaralhamento novo
    updateQuizScore();

    loadQuizQuestion();
    elements.btnStartQuiz.textContent = '🔄 Ricomincia il quiz';
}

function loadQuizQuestion() {
    // Se não há mais frases disponíveis, reiniciar a lista
    if (state.quiz.availableIndexes.length === 0) {
        state.quiz.availableIndexes = [...Array(frases.length).keys()];
        // Embaralhar a lista (Fisher-Yates shuffle)
        for (let i = state.quiz.availableIndexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.quiz.availableIndexes[i], state.quiz.availableIndexes[j]] =
                [state.quiz.availableIndexes[j], state.quiz.availableIndexes[i]];
        }
    }

    // Pegar o próximo índice da lista e removê-lo
    const randomIndex = state.quiz.availableIndexes.pop();
    state.quiz.currentPhrase = frases[randomIndex];
    state.quiz.hintUsed = false;

    const current = frases.length - state.quiz.availableIndexes.length;
    elements.quizPhrasePt.textContent = state.quiz.currentPhrase.pt;
    elements.quizAnswer.value = '';
    elements.quizAnswer.disabled = false;
    elements.quizFeedback.textContent = `Domanda ${current} di ${frases.length}`;
    elements.quizFeedback.className = 'quiz-feedback';

    elements.btnCheck.disabled = false;
    elements.btnHint.disabled = false;
    elements.btnNextQuiz.disabled = true;

    elements.quizAnswer.focus();
}

function checkAnswer() {
    const userAnswer = normalizeText(elements.quizAnswer.value);
    const correctAnswer = normalizeText(state.quiz.currentPhrase.it);

    const isCorrect = userAnswer === correctAnswer ||
                      isSimilarEnough(userAnswer, correctAnswer);

    if (isCorrect) {
        state.quiz.correct++;
        elements.quizFeedback.textContent = '🎉 Corretto! Ottimo!';
        elements.quizFeedback.className = 'quiz-feedback correct';
        speak(state.quiz.currentPhrase.it, 'it-IT');
    } else {
        state.quiz.wrong++;
        elements.quizFeedback.innerHTML = `❌ Errato!<br>Risposta: <strong>${state.quiz.currentPhrase.it}</strong>`;
        elements.quizFeedback.className = 'quiz-feedback wrong';
        setTimeout(() => speak(state.quiz.currentPhrase.it, 'it-IT'), 500);
    }

    updateQuizScore();

    elements.quizAnswer.disabled = true;
    elements.btnCheck.disabled = true;
    elements.btnHint.disabled = true;
    elements.btnNextQuiz.disabled = false;
}

function showHint() {
    const answer = state.quiz.currentPhrase.it;
    const words = answer.split(' ');

    const hint = words.map(word => {
        if (word.length <= 2) return word;
        return word[0] + '_'.repeat(word.length - 1);
    }).join(' ');

    elements.quizFeedback.textContent = `💡 Suggerimento: ${hint}`;
    elements.quizFeedback.className = 'quiz-feedback hint';
    state.quiz.hintUsed = true;
}

function nextQuizQuestion() {
    loadQuizQuestion();
}

function updateQuizScore() {
    elements.scoreCorrect.textContent = state.quiz.correct;
    elements.scoreWrong.textContent = state.quiz.wrong;

    const total = state.quiz.correct + state.quiz.wrong;
    const rate = total > 0 ? Math.round((state.quiz.correct / total) * 100) : 0;
    elements.scoreRate.textContent = rate + '%';
}

// ==========================================
// Funções de Pronúncia (Speech Recognition)
// ==========================================
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        elements.browserWarning.style.display = 'block';
        elements.btnPronSpeak.disabled = true;
        return;
    }

    elements.browserWarning.style.display = 'none';

    state.pronunciation.recognition = new SpeechRecognition();
    state.pronunciation.recognition.lang = 'it-IT';
    state.pronunciation.recognition.continuous = false;
    state.pronunciation.recognition.interimResults = true;

    state.pronunciation.recognition.onstart = () => {
        state.pronunciation.isListening = true;
        elements.btnPronSpeak.classList.add('recording');
        elements.btnPronSpeak.textContent = '🔴 In ascolto...';
        elements.pronFeedback.textContent = '🎤 Parla ora...';
        elements.pronFeedback.className = 'pronunciation-feedback listening';
    };

    state.pronunciation.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');

        elements.pronResult.textContent = transcript;

        // Se for resultado final
        if (event.results[0].isFinal) {
            checkPronunciation(transcript);
        }
    };

    state.pronunciation.recognition.onend = () => {
        state.pronunciation.isListening = false;
        elements.btnPronSpeak.classList.remove('recording');
        elements.btnPronSpeak.textContent = '🎤 Parla';
    };

    state.pronunciation.recognition.onerror = (event) => {
        console.error('Erro no reconhecimento:', event.error);
        state.pronunciation.isListening = false;
        elements.btnPronSpeak.classList.remove('recording');
        elements.btnPronSpeak.textContent = '🎤 Parla';

        if (event.error === 'no-speech') {
            elements.pronFeedback.textContent = '❌ Non ho sentito nulla. Riprova.';
            elements.pronFeedback.className = 'pronunciation-feedback wrong';
        } else if (event.error === 'not-allowed') {
            elements.pronFeedback.textContent = '❌ Consenti l\'accesso al microfono.';
            elements.pronFeedback.className = 'pronunciation-feedback wrong';
        }
    };
}

function loadPronunciationPhrase() {
    // Se não há mais frases disponíveis, reiniciar a lista
    if (state.pronunciation.availableIndexes.length === 0) {
        state.pronunciation.availableIndexes = [...Array(frases.length).keys()];
        // Embaralhar a lista (Fisher-Yates shuffle)
        for (let i = state.pronunciation.availableIndexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.pronunciation.availableIndexes[i], state.pronunciation.availableIndexes[j]] =
                [state.pronunciation.availableIndexes[j], state.pronunciation.availableIndexes[i]];
        }
    }

    // Pegar o próximo índice da lista e removê-lo
    const randomIndex = state.pronunciation.availableIndexes.pop();
    state.pronunciation.currentPhrase = frases[randomIndex];

    elements.pronPhrase.textContent = state.pronunciation.currentPhrase.it;
    elements.pronPhrasePt.textContent = state.pronunciation.currentPhrase.pt;
    elements.pronResult.textContent = 'La tua voce apparirà qui...';
    elements.pronFeedback.textContent = '';
    elements.pronFeedback.className = 'pronunciation-feedback';

    elements.btnPronListen.disabled = false;
    elements.btnPronSpeak.disabled = false;

    const remaining = state.pronunciation.availableIndexes.length;
    const total = frases.length;
    setPronStatus(`Frase caricata! (${total - remaining}/${total}) Ascolta, poi prova a parlare.`);
}

function listenPronunciationPhrase() {
    if (!state.pronunciation.currentPhrase) return;

    elements.pronPhrase.classList.add('highlight');
    speak(state.pronunciation.currentPhrase.it, 'it-IT').then(() => {
        elements.pronPhrase.classList.remove('highlight');
    });
}

function startSpeechRecognition() {
    if (!state.pronunciation.currentPhrase) {
        setPronStatus('Carica prima una frase!');
        return;
    }

    if (state.pronunciation.isListening) {
        state.pronunciation.recognition.stop();
        return;
    }

    elements.pronResult.textContent = '...';
    state.pronunciation.recognition.start();
}

function checkPronunciation(spokenText) {
    const expected = normalizeText(state.pronunciation.currentPhrase.it);
    const spoken = normalizeText(spokenText);

    const similarity = calculateSimilarity(spoken, expected);
    const percentage = Math.round(similarity * 100);

    if (similarity >= 0.85) {
        state.pronunciation.correct++;
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Pronuncia eccellente! 🎉</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback correct';
    } else if (similarity >= 0.6) {
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Ci sei quasi! Riprova.</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback hint';
    } else {
        state.pronunciation.wrong++;
        elements.pronFeedback.innerHTML = `
            <span class="accuracy">${percentage}%</span>
            <span class="accuracy-label">Continua a esercitarti! 💪</span>
        `;
        elements.pronFeedback.className = 'pronunciation-feedback wrong';
    }

    updatePronScore();
}

function updatePronScore() {
    elements.pronCorrect.textContent = state.pronunciation.correct;
    elements.pronWrong.textContent = state.pronunciation.wrong;

    const total = state.pronunciation.correct + state.pronunciation.wrong;
    const rate = total > 0 ? Math.round((state.pronunciation.correct / total) * 100) : 0;
    elements.pronRate.textContent = rate + '%';
}

function setPronStatus(message) {
    elements.pronStatus.textContent = message;
}

// ==========================================
// Funções de Diálogos
// ==========================================
function loadDialogOptions() {
    dialogos.forEach(dialog => {
        const option = document.createElement('option');
        option.value = dialog.id;
        option.textContent = dialog.titulo;
        elements.dialogSelect.appendChild(option);
    });
}

function onDialogSelect() {
    const selectedId = elements.dialogSelect.value;

    if (!selectedId) {
        elements.dialogDescription.classList.remove('visible');
        elements.btnDialogStart.disabled = true;
        elements.btnDialogPractice.disabled = true;
        return;
    }

    const dialog = dialogos.find(d => d.id === selectedId);
    state.dialog.current = dialog;

    elements.dialogDescription.textContent = dialog.descricao;
    elements.dialogDescription.classList.add('visible');
    elements.dialogConversation.innerHTML = '';

    elements.btnDialogStart.disabled = false;
    elements.btnDialogPause.disabled = true;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = false;  // Disponível desde o início

    setDialogStatus('Tocca Inizia per ascoltare o Esercitati per passare subito alla pratica.');
}

async function startDialog() {
    if (!state.dialog.current || state.dialog.isPlaying) return;

    state.dialog.isPlaying = true;
    state.dialog.isPaused = false;
    elements.btnDialogStart.disabled = true;
    elements.btnDialogPause.disabled = false;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = true;
    elements.dialogConversation.innerHTML = '';

    const conversa = state.dialog.current.conversa;

    for (let i = 0; i < conversa.length; i++) {
        // Verificar se foi pausado
        if (state.dialog.isPaused) {
            await waitForResume();
        }

        // Verificar se foi interrompido (saiu do modo ou selecionou outro)
        if (!state.dialog.isPlaying) break;

        const msg = conversa[i];

        // Criar elemento da mensagem
        const msgEl = document.createElement('div');
        msgEl.className = `dialog-message person-${msg.pessoa.toLowerCase()}`;
        msgEl.innerHTML = `
            <div class="message-it">${msg.it}</div>
            <div class="message-pt">${msg.pt}</div>
        `;
        elements.dialogConversation.appendChild(msgEl);

        // Scroll para a mensagem
        elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

        // Destacar mensagem atual
        msgEl.classList.add('active');

        // Falar a frase
        setDialogStatus(`👤 La persona ${msg.pessoa} sta parlando...`);
        await speak(msg.it, 'it-IT');

        msgEl.classList.remove('active');

        // Pausa entre mensagens
        if (state.dialog.isPaused) {
            await waitForResume();
        }
        if (!state.dialog.isPlaying) break;
        await delay(600);
    }

    state.dialog.isPlaying = false;
    state.dialog.isPaused = false;
    elements.btnDialogStart.disabled = false;
    elements.btnDialogPause.disabled = true;
    elements.btnDialogPause.textContent = '⏸️ Pausa';
    elements.btnDialogRepeat.disabled = false;
    elements.btnDialogPractice.disabled = false;
    if (state.dialog.current) {
        setDialogStatus('✅ Dialogo completato! Esercitati con le risposte.');
    }
}

function togglePauseDialog() {
    if (!state.dialog.isPlaying && !state.dialog.isPracticing) return;

    if (state.dialog.isPaused) {
        // Retomar
        state.dialog.isPaused = false;
        elements.btnDialogPause.textContent = '⏸️ Pausa';
        setDialogStatus('▶️ Ripresa...');
    } else {
        // Pausar
        state.dialog.isPaused = true;
        speechSynthesis.cancel();  // Para a fala atual
        elements.btnDialogPause.textContent = '▶️ Riprendi';
        setDialogStatus('⏸️ In pausa. Tocca Riprendi.');
    }
}

function waitForResume() {
    return new Promise(resolve => {
        const checkResume = setInterval(() => {
            const isActive = state.dialog.isPlaying || state.dialog.isPracticing;
            if (!state.dialog.isPaused || !isActive) {
                clearInterval(checkResume);
                resolve();
            }
        }, 100);
    });
}

async function repeatDialog() {
    speechSynthesis.cancel();
    state.dialog.isPlaying = false;
    state.dialog.isPaused = false;
    await delay(100);
    elements.dialogConversation.innerHTML = '';
    await startDialog();
}

async function practiceDialog() {
    if (!state.dialog.current || state.dialog.isPracticing) return;

    state.dialog.isPracticing = true;
    state.dialog.isPaused = false;
    elements.btnDialogStart.disabled = true;
    elements.btnDialogPause.disabled = false;
    elements.btnDialogRepeat.disabled = true;
    elements.btnDialogPractice.disabled = true;
    elements.dialogConversation.innerHTML = '';

    const conversa = state.dialog.current.conversa;

    for (let i = 0; i < conversa.length; i++) {
        // Verificar se foi pausado
        if (state.dialog.isPaused) {
            await waitForResume();
        }

        // Verificar se foi interrompido
        if (!state.dialog.isPracticing) break;

        const msg = conversa[i];

        const msgEl = document.createElement('div');
        msgEl.className = `dialog-message person-${msg.pessoa.toLowerCase()}`;

        if (msg.pessoa === 'A') {
            // Pessoa A fala automaticamente
            msgEl.innerHTML = `
                <div class="message-it">${msg.it}</div>
                <div class="message-pt">${msg.pt}</div>
            `;
            elements.dialogConversation.appendChild(msgEl);
            elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

            msgEl.classList.add('active');
            setDialogStatus('👤 La persona A sta parlando...');
            await speak(msg.it, 'it-IT');
            msgEl.classList.remove('active');

            if (state.dialog.isPaused) await waitForResume();
            if (!state.dialog.isPracticing) break;
            await delay(500);
        } else {
            // Pessoa B (você) - mostrar o que deve falar
            msgEl.innerHTML = `
                <div class="message-it">${msg.it}</div>
                <div class="message-pt">${msg.pt}</div>
            `;
            elements.dialogConversation.appendChild(msgEl);
            elements.dialogConversation.scrollTop = elements.dialogConversation.scrollHeight;

            msgEl.classList.add('active');
            setDialogStatus('🎤 Tocca a te! Pronuncia la frase evidenziata...');

            // Esperar o usuário falar (se não estiver pausado)
            if (state.dialog.isPaused) await waitForResume();
            if (!state.dialog.isPracticing) break;
            await waitForUserSpeech(msg.it);

            msgEl.classList.remove('active');
            if (state.dialog.isPaused) await waitForResume();
            if (!state.dialog.isPracticing) break;
            await delay(500);
        }
    }

    state.dialog.isPracticing = false;
    state.dialog.isPaused = false;
    elements.btnDialogStart.disabled = false;
    elements.btnDialogPause.disabled = true;
    elements.btnDialogPause.textContent = '⏸️ Pausa';
    elements.btnDialogRepeat.disabled = false;
    elements.btnDialogPractice.disabled = false;
    if (state.dialog.current) {
        setDialogStatus('✅ Esercitazione completata! Ottimo lavoro!');
    }
}

function waitForUserSpeech(expectedPhrase) {
    return new Promise((resolve) => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            // Se não tiver suporte, apenas esperar e resolver
            setDialogStatus('⚠️ Il browser non supporta il microfono. Passo oltre...');
            setTimeout(resolve, 2000);
            return;
        }

        let resolved = false;
        const recognition = new SpeechRecognition();
        recognition.lang = 'it-IT';
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setDialogStatus('🔴 IN ASCOLTO... Parla ora!');
        };

        recognition.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

            // Mostrar o que está sendo captado em tempo real
            setDialogStatus(`🎤 Ti sto ascoltando: "${transcript}"`);

            // Se for resultado final
            if (event.results[0].isFinal) {
                const similarity = calculateSimilarity(
                    normalizeText(transcript),
                    normalizeText(expectedPhrase)
                );

                if (similarity >= 0.7) {
                    setDialogStatus(`✅ Molto bene! Hai detto: "${transcript}"`);
                } else {
                    setDialogStatus(`👍 Hai detto: "${transcript}". Continua a esercitarti!`);
                }

                resolved = true;
                setTimeout(resolve, 1200);
            }
        };

        recognition.onerror = (event) => {
            if (!resolved) {
                if (event.error === 'no-speech') {
                    setDialogStatus('❌ Non ho sentito nulla. Continuo...');
                } else if (event.error === 'not-allowed') {
                    setDialogStatus('❌ Consenti l\'accesso al microfono nel browser!');
                } else {
                    setDialogStatus('➡️ Continuo...');
                }
                resolved = true;
                setTimeout(resolve, 1000);
            }
        };

        recognition.onend = () => {
            // Se terminou sem resultado, resolver
            if (!resolved) {
                setDialogStatus('➡️ Continuo...');
                resolved = true;
                setTimeout(resolve, 500);
            }
        };

        // Timeout de segurança (10 segundos para falar)
        setTimeout(() => {
            if (!resolved) {
                recognition.stop();
                setDialogStatus('⏱️ Tempo scaduto. Continuo...');
                resolved = true;
                resolve();
            }
        }, 10000);

        // Iniciar reconhecimento
        try {
            recognition.start();
        } catch (e) {
            setDialogStatus('❌ Errore nell\'avvio del microfono.');
            resolved = true;
            setTimeout(resolve, 1000);
        }
    });
}

function setDialogStatus(message) {
    elements.dialogStatus.textContent = message;
}

// ==========================================
// Funções de Leitura
// ==========================================
function loadRandomText() {
    const selectedLevel = elements.readingLevel.value;

    // Filtrar textos pelo nível selecionado
    let availableTexts = textos;
    if (selectedLevel !== 'all') {
        availableTexts = textos.filter(t => t.nivel === selectedLevel);
    }

    if (availableTexts.length === 0) {
        setReadingStatus('Nessun testo disponibile per questa categoria.');
        return;
    }

    // Selecionar texto aleatório
    const randomIndex = Math.floor(Math.random() * availableTexts.length);
    state.reading.currentText = availableTexts[randomIndex];

    // Atualizar interface
    elements.readingTitle.textContent = state.reading.currentText.titulo;
    elements.readingText.textContent = state.reading.currentText.testoIt || state.reading.currentText.texto;

    // Atualizar badge de nível
    updateLevelBadge(state.reading.currentText.nivel);

    // Habilitar botões
    elements.btnReadingPlay.disabled = false;
    elements.btnReadingPause.disabled = true;

    // Configurar tradução (se disponível)
    if (state.reading.currentText.traducao) {
        elements.readingTranslation.textContent = state.reading.currentText.traducao;
        elements.btnReadingTranslation.disabled = false;
    } else {
        elements.readingTranslation.textContent = '';
        elements.btnReadingTranslation.disabled = true;
    }
    // Ocultar tradução ao carregar novo texto
    elements.readingTranslationBox.style.display = 'none';
    elements.btnReadingTranslation.textContent = '🇧🇷 Traduzione';

    // Parar qualquer leitura em andamento
    speechSynthesis.cancel();
    state.reading.isPlaying = false;
    state.reading.isPaused = false;
    elements.btnReadingPlay.textContent = '▶️ Ascolta il testo';

    const hasTranslation = state.reading.currentText.traducao ? ' (traduzione disponibile!)' : '';
    setReadingStatus('Testo caricato!' + hasTranslation + ' Tocca "Ascolta il testo" per iniziare.');
}

function updateLevelBadge(nivel) {
    const nivelMap = {
        'vital-frosi': { text: '📖 Vital Frosi', class: 'level-advanced' },
        'qa': { text: '💻 QA / Automazione', class: 'level-intermediate' }
    };

    const info = nivelMap[nivel] || { text: nivel, class: 'level-beginner' };
    elements.readingLevelBadge.textContent = info.text;
    elements.readingLevelBadge.className = 'level-badge ' + info.class;
}

function playReadingText() {
    if (!state.reading.currentText) {
        setReadingStatus('Carica prima un testo!');
        return;
    }

    // Se estava pausado, retomar
    if (state.reading.isPaused) {
        speechSynthesis.resume();
        state.reading.isPaused = false;
        elements.btnReadingPlay.textContent = '▶️ Ascolta il testo';
        elements.btnReadingPause.textContent = '⏸️ Pausa';
        setReadingStatus('🔊 Ripresa della lettura...');
        return;
    }

    // Se já está tocando, parar
    if (state.reading.isPlaying) {
        speechSynthesis.cancel();
        state.reading.isPlaying = false;
        state.reading.isPaused = false;
        state.reading.chunks = [];
        state.reading.currentChunk = 0;
        elements.btnReadingPlay.textContent = '▶️ Ascolta il testo';
        elements.btnReadingPause.disabled = true;
        setReadingStatus('Lettura interrotta.');
        return;
    }

    // Iniciar nova leitura - dividir texto em chunks para evitar bug de textos longos
    state.reading.isPlaying = true;
    elements.btnReadingPlay.textContent = '⏹️ Interrompi';
    elements.btnReadingPause.disabled = false;

    // Dividir texto em sentenças para evitar o bug de textos longos
    const readingText = state.reading.currentText.testoIt || state.reading.currentText.texto;
    const chunks = splitTextIntoChunks(readingText);
    state.reading.chunks = chunks;
    state.reading.currentChunk = 0;

    setReadingStatus('🔊 Lettura in corso... Segui il testo ad alta voce!');
    elements.readingText.classList.add('reading-active');

    speakNextChunk();
}

// Divide texto em chunks menores para evitar bug da Web Speech API com textos longos
function splitTextIntoChunks(text) {
    // Dividir por sentenças (pontos, exclamações, interrogações)
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const chunks = [];
    let currentChunk = '';

    for (const sentence of sentences) {
        // Se adicionar essa sentença passar de 200 caracteres, salvar chunk atual
        if (currentChunk.length + sentence.length > 200 && currentChunk.length > 0) {
            chunks.push(currentChunk.trim());
            currentChunk = sentence;
        } else {
            currentChunk += sentence;
        }
    }

    // Adicionar último chunk
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }

    return chunks;
}

function speakNextChunk() {
    if (!state.reading.isPlaying || state.reading.currentChunk >= state.reading.chunks.length) {
        // Leitura concluída
        state.reading.isPlaying = false;
        state.reading.isPaused = false;
        elements.btnReadingPlay.textContent = '▶️ Ascolta il testo';
        elements.btnReadingPause.disabled = true;
        elements.readingText.classList.remove('reading-active');
        setReadingStatus('✅ Lettura completata! Ora prova a leggere da solo.');
        return;
    }

    const chunk = state.reading.chunks[state.reading.currentChunk];
    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = 'it-IT';
    utterance.rate = state.reading.speed;
    utterance.pitch = 1;

    // Selecionar voz em italiano
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith('it'));
    if (voice) {
        utterance.voice = voice;
    }

    utterance.onend = () => {
        state.reading.currentChunk++;
        // Pequena pausa entre chunks
        setTimeout(() => {
            if (state.reading.isPlaying && !state.reading.isPaused) {
                speakNextChunk();
            }
        }, 100);
    };

    utterance.onerror = (event) => {
        if (event.error !== 'interrupted') {
            state.reading.isPlaying = false;
            elements.btnReadingPlay.textContent = '▶️ Ascolta il testo';
            elements.btnReadingPause.disabled = true;
            elements.readingText.classList.remove('reading-active');
            setReadingStatus('❌ Errore durante la lettura. Riprova.');
        }
    };

    state.reading.utterance = utterance;
    speechSynthesis.speak(utterance);
}

function togglePauseReading() {
      if (!state.reading.isPlaying) return;

      if (state.reading.isPaused) {
          // Retomar - reiniciar a partir do chunk atual (resume() não funciona bem)
          state.reading.isPaused = false;
          elements.btnReadingPause.textContent = '⏸️ Pausa';
          setReadingStatus('🔊 Ripresa della lettura...');
          speakNextChunk();
      } else {
          // Pausar - cancelar e marcar como pausado
          speechSynthesis.cancel();
          state.reading.isPaused = true;
          elements.btnReadingPause.textContent = '▶️ Riprendi';
          setReadingStatus('⏸️ Lettura in pausa.');
      }
  }

function updateReadingSpeed() {
    state.reading.speed = parseFloat(elements.readingSpeedSlider.value);
    elements.readingSpeedValue.textContent = state.reading.speed.toFixed(1) + 'x';
}

function setReadingStatus(message) {
    elements.readingStatus.textContent = message;
}

function toggleTranslation() {
    if (!state.reading.currentText || !state.reading.currentText.traducao) return;

    const isVisible = elements.readingTranslationBox.style.display !== 'none';

    if (isVisible) {
        elements.readingTranslationBox.style.display = 'none';
        elements.btnReadingTranslation.textContent = '🇧🇷 Traduzione';
    } else {
        elements.readingTranslationBox.style.display = 'block';
        elements.btnReadingTranslation.textContent = '🇧🇷 Nascondi';
    }
}

// ==========================================
// Funções de Voz (Web Speech API)
// ==========================================

function speak(text, lang) {
    return new Promise((resolve, reject) => {
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = state.speed;
        utterance.pitch = 1;

        const voices = speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
        if (voice) {
            utterance.voice = voice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = (event) => {
            if (event.error !== 'interrupted') {
                reject(event);
            } else {
                resolve();
            }
        };

        speechSynthesis.speak(utterance);
    });
}

// ==========================================
// Funções Auxiliares
// ==========================================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setStatus(message) {
    elements.status.textContent = message;
    elements.status.classList.toggle('speaking', message.includes('Falando'));
}

function updateSpeed() {
    state.speed = parseFloat(elements.speedSlider.value);
    elements.speedValue.textContent = state.speed.toFixed(1) + 'x';
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[.,!?;:'"]/g, '')
        .replace(/\s+/g, ' ');
}

function calculateSimilarity(str1, str2) {
    if (str1 === str2) return 1;
    if (str1.length === 0 || str2.length === 0) return 0;

    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    const editDistance = levenshteinDistance(str1, str2);
    return (longer.length - editDistance) / longer.length;
}

function isSimilarEnough(userAnswer, correctAnswer) {
    if (userAnswer.length < 3) return false;
    return calculateSimilarity(userAnswer, correctAnswer) >= 0.85;
}

function levenshteinDistance(str1, str2) {
    const matrix = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2[i-1] === str1[j-1]) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1,
                    matrix[i][j-1] + 1,
                    matrix[i-1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
