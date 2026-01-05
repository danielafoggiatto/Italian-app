// ==========================================
// Diálogos Pré-definidos - Situações do dia a dia
// ==========================================
// Pessoa A = outra pessoa
// Pessoa B = você (praticante)

const dialogos = [
    {
        id: "restaurante",
        titulo: "🍽️ Al Ristorante",
        descricao: "Você está em um restaurante e precisa fazer um pedido.",
        conversa: [
            { pessoa: "A", it: "Buonasera! Benvenuto al nostro ristorante.", pt: "Boa noite! Bem-vindo ao nosso restaurante." },
            { pessoa: "B", it: "Buonasera! Un tavolo per due, per favore.", pt: "Boa noite! Uma mesa para dois, por favor." },
            { pessoa: "A", it: "Certo. Mi segua, per favore.", pt: "Claro. Me siga, por favor." },
            { pessoa: "A", it: "Ecco il menu. Posso portarvi qualcosa da bere?", pt: "Aqui está o cardápio. Posso trazer algo para beber?" },
            { pessoa: "B", it: "Sì, vorrei un bicchiere d'acqua, per favore.", pt: "Sim, eu gostaria de um copo de água, por favor." },
            { pessoa: "A", it: "Siete pronti per ordinare?", pt: "Vocês estão prontos para pedir?" },
            { pessoa: "B", it: "Sì, prendo il pollo alla griglia con insalata.", pt: "Sim, eu vou querer o frango grelhado com salada." },
            { pessoa: "A", it: "Ottima scelta! Altro?", pt: "Excelente escolha! Mais alguma coisa?" },
            { pessoa: "B", it: "No, è tutto per ora. Grazie.", pt: "Não, é só isso por agora. Obrigado." },
            { pessoa: "A", it: "Il vostro ordine sarà pronto in circa 15 minuti.", pt: "Seu pedido estará pronto em cerca de 15 minutos." },
            { pessoa: "B", it: "Perfetto, grazie!", pt: "Perfeito, obrigado!" }
        ]
    },
    {
        id: "hotel",
        titulo: "🏨 Check-in all'Hotel",
        descricao: "Você está chegando no hotel e precisa fazer o check-in.",
        conversa: [
            { pessoa: "A", it: "Buongiorno! Benvenuto al Grand Hotel. Come posso aiutarla?", pt: "Boa tarde! Bem-vindo ao Grand Hotel. Como posso ajudar?" },
            { pessoa: "B", it: "Ciao! Ho una prenotazione a nome Silva.", pt: "Oi! Eu tenho uma reserva no nome Silva." },
            { pessoa: "A", it: "Mi lasci controllare... Sì, l'ho trovata. Una camera matrimoniale per 3 notti, corretto?", pt: "Deixe-me verificar... Sim, encontrei. Um quarto de casal por 3 noites, correto?" },
            { pessoa: "B", it: "Sì, esatto.", pt: "Sim, está correto." },
            { pessoa: "A", it: "Posso vedere il suo documento, per favore?", pt: "Posso ver seu documento, por favor?" },
            { pessoa: "B", it: "Certo, eccolo.", pt: "Claro, aqui está." },
            { pessoa: "A", it: "Grazie. La sua camera è la 405 al quarto piano.", pt: "Obrigado. Seu quarto é o 405 no quarto andar." },
            { pessoa: "B", it: "A che ora è la colazione?", pt: "A que horas é o café da manhã?" },
            { pessoa: "A", it: "La colazione è servita dalle 7 alle 10 nel ristorante.", pt: "O café da manhã é servido das 7 às 10 da manhã no restaurante." },
            { pessoa: "B", it: "Ottimo! C'è il Wi-Fi in camera?", pt: "Ótimo! Tem Wi-Fi no quarto?" },
            { pessoa: "A", it: "Sì, la password è sulla scrivania nella sua camera.", pt: "Sim, a senha está na mesa do seu quarto." },
            { pessoa: "B", it: "Perfetto, grazie mille!", pt: "Perfeito, muito obrigado!" }
        ]
    },
    {
        id: "entrevista",
        titulo: "💼 Colloquio di Lavoro",
        descricao: "Você está em uma entrevista de emprego.",
        conversa: [
            { pessoa: "A", it: "Buongiorno! Prego, si sieda.", pt: "Olá! Por favor, sente-se." },
            { pessoa: "B", it: "Grazie. Piacere di conoscerla.", pt: "Obrigado. Prazer em conhecê-lo." },
            { pessoa: "A", it: "Allora, mi parli un po' di lei.", pt: "Então, me conte um pouco sobre você." },
            { pessoa: "B", it: "Sono uno sviluppatore software con 3 anni di esperienza.", pt: "Sou desenvolvedor de software com 3 anos de experiência." },
            { pessoa: "A", it: "Quali sono le sue principali competenze?", pt: "Quais são suas principais habilidades?" },
            { pessoa: "B", it: "Sono bravo a risolvere problemi e lavoro bene in team.", pt: "Sou bom em resolver problemas e trabalho bem em equipe." },
            { pessoa: "A", it: "Perché vuole lavorare nella nostra azienda?", pt: "Por que você quer trabalhar na nossa empresa?" },
            { pessoa: "B", it: "Ammiro i vostri progetti innovativi e la cultura aziendale.", pt: "Admiro seus projetos inovadores e a cultura da empresa." },
            { pessoa: "A", it: "Dove si vede tra 5 anni?", pt: "Onde você se vê em 5 anos?" },
            { pessoa: "B", it: "Spero di crescere con l'azienda e assumere più responsabilità.", pt: "Espero crescer com a empresa e assumir mais responsabilidades." },
            { pessoa: "A", it: "Ha qualche domanda per noi?", pt: "Você tem alguma pergunta para nós?" },
            { pessoa: "B", it: "Sì, com'è una giornata tipica in questa posizione?", pt: "Sim, como é um dia típico nessa posição?" }
        ]
    },
    {
        id: "aeroporto",
        titulo: "✈️ All'Aeroporto",
        descricao: "Você está no aeroporto fazendo check-in para um voo.",
        conversa: [
            { pessoa: "A", it: "Prossimo, prego! Posso vedere il suo passaporto e biglietto?", pt: "Próximo, por favor! Posso ver seu passaporte e passagem?" },
            { pessoa: "B", it: "Ecco qua.", pt: "Aqui está." },
            { pessoa: "A", it: "Ha bagagli da imbarcare oggi?", pt: "Você vai despachar alguma mala hoje?" },
            { pessoa: "B", it: "Sì, solo questa valigia.", pt: "Sim, apenas essa mala." },
            { pessoa: "A", it: "La metta sulla bilancia, per favore.", pt: "Por favor, coloque na balança." },
            { pessoa: "A", it: "Preferisce un posto al finestrino o al corridoio?", pt: "Você prefere assento na janela ou no corredor?" },
            { pessoa: "B", it: "Al finestrino, per favore.", pt: "Na janela, por favor." },
            { pessoa: "A", it: "Il suo volo parte dal gate B7 alle 15:30.", pt: "Seu voo sai do portão B7 às 15:30." },
            { pessoa: "B", it: "A che ora devo essere al gate?", pt: "A que horas devo estar no portão?" },
            { pessoa: "A", it: "L'imbarco inizia alle 15:00. Non faccia tardi!", pt: "O embarque começa às 15:00. Não se atrase!" },
            { pessoa: "B", it: "Grazie. Buona giornata!", pt: "Obrigado. Tenha um bom dia!" }
        ]
    },
    {
        id: "medico",
        titulo: "🏥 Dal Medico",
        descricao: "Você está em uma consulta médica.",
        conversa: [
            { pessoa: "A", it: "Buongiorno! Cosa la porta qui oggi?", pt: "Olá! O que te traz aqui hoje?" },
            { pessoa: "B", it: "Non mi sento bene. Ho mal di testa e mal di gola.", pt: "Não estou me sentindo bem. Estou com dor de cabeça e dor de garganta." },
            { pessoa: "A", it: "Da quanto tempo si sente così?", pt: "Há quanto tempo você está se sentindo assim?" },
            { pessoa: "B", it: "Da ieri mattina.", pt: "Desde ontem de manhã." },
            { pessoa: "A", it: "Ha la febbre?", pt: "Você está com febre?" },
            { pessoa: "B", it: "Penso di sì. Mi sento molto caldo.", pt: "Acho que sim. Estou me sentindo muito quente." },
            { pessoa: "A", it: "Mi lasci controllare la temperatura... 38.5. Sì, ha la febbre.", pt: "Deixe-me verificar sua temperatura... 38.5. Sim, você está com febre." },
            { pessoa: "A", it: "È allergico a qualche farmaco?", pt: "Você é alérgico a algum medicamento?" },
            { pessoa: "B", it: "No, non sono allergico a niente.", pt: "Não, não sou alérgico a nada." },
            { pessoa: "A", it: "Le prescrivo delle medicine. Le prenda due volte al giorno.", pt: "Vou receitar alguns remédios. Tome duas vezes ao dia." },
            { pessoa: "B", it: "Grazie, dottore. Devo tornare?", pt: "Obrigado, doutor. Devo voltar?" },
            { pessoa: "A", it: "Se non si sente meglio tra 3 giorni, torni.", pt: "Se não melhorar em 3 dias, volte." }
        ]
    },
    {
        id: "loja",
        titulo: "🛍️ Nel Negozio",
        descricao: "Você está comprando roupas em uma loja.",
        conversa: [
            { pessoa: "A", it: "Ciao! Posso aiutarla a trovare qualcosa?", pt: "Oi! Posso ajudar a encontrar algo?" },
            { pessoa: "B", it: "Sì, sto cercando una camicia blu.", pt: "Sim, estou procurando uma camisa azul." },
            { pessoa: "A", it: "Che taglia porta?", pt: "Qual tamanho você veste?" },
            { pessoa: "B", it: "Di solito porto la media.", pt: "Geralmente visto médio." },
            { pessoa: "A", it: "Ecco alcune opzioni. Vuole provarle?", pt: "Aqui estão algumas opções. Gostaria de experimentar?" },
            { pessoa: "B", it: "Sì, per favore. Dov'è il camerino?", pt: "Sim, por favor. Onde fica o provador?" },
            { pessoa: "A", it: "È proprio lì, sulla sinistra.", pt: "É logo ali, à sua esquerda." },
            { pessoa: "B", it: "Questa va perfettamente. Quanto costa?", pt: "Essa serviu perfeitamente. Quanto custa?" },
            { pessoa: "A", it: "Costa 45 euro, ma oggi è in saldo a 35 euro.", pt: "Custa 45 euros, mas hoje está em promoção por 35 euros." },
            { pessoa: "B", it: "Ottimo! La prendo. Posso pagare con carta?", pt: "Ótimo! Vou levar. Posso pagar com cartão?" },
            { pessoa: "A", it: "Certo! Vuole una borsa?", pt: "Claro! Gostaria de uma sacola?" },
            { pessoa: "B", it: "Sì, per favore. Grazie!", pt: "Sim, por favor. Obrigado!" }
        ]
    },
    {
        id: "taxi",
        titulo: "🚕 Prendendo un Taxi",
        descricao: "Você precisa ir a algum lugar de táxi.",
        conversa: [
            { pessoa: "A", it: "Dove vuole andare?", pt: "Para onde você gostaria de ir?" },
            { pessoa: "B", it: "All'aeroporto, per favore.", pt: "Para o aeroporto, por favor." },
            { pessoa: "A", it: "Quale terminal?", pt: "Qual terminal?" },
            { pessoa: "B", it: "Terminal 2, voli internazionali.", pt: "Terminal 2, voos internacionais." },
            { pessoa: "A", it: "Ok, ci vorranno circa 30 minuti.", pt: "Ok, deve levar cerca de 30 minutos." },
            { pessoa: "B", it: "C'è molto traffico adesso?", pt: "Tem muito trânsito agora?" },
            { pessoa: "A", it: "Un po', ma arriveremo in tempo.", pt: "Um pouco, mas chegaremos a tempo." },
            { pessoa: "B", it: "Quanto costerà circa?", pt: "Quanto vai custar aproximadamente?" },
            { pessoa: "A", it: "Circa 40 euro, dipende dal traffico.", pt: "Cerca de 40 euros, dependendo do trânsito." },
            { pessoa: "A", it: "Siamo arrivati! Terminal 2.", pt: "Chegamos! Terminal 2." },
            { pessoa: "B", it: "Grazie! Tenga il resto.", pt: "Obrigado! Fique com o troco." },
            { pessoa: "A", it: "Grazie! Buon viaggio!", pt: "Obrigado! Tenha um bom voo!" }
        ]
    },
    {
        id: "telefone",
        titulo: "📞 Telefonata",
        descricao: "Você precisa ligar para uma empresa.",
        conversa: [
            { pessoa: "A", it: "Pronto, Azienda ABC. Come posso aiutarla?", pt: "Olá, Empresa ABC. Como posso ajudar?" },
            { pessoa: "B", it: "Ciao, vorrei parlare con qualcuno del servizio clienti.", pt: "Oi, gostaria de falar com alguém do atendimento ao cliente." },
            { pessoa: "A", it: "Posso chiederle di cosa si tratta?", pt: "Posso perguntar sobre o que se trata?" },
            { pessoa: "B", it: "Ho una domanda sul mio ordine.", pt: "Tenho uma pergunta sobre meu pedido." },
            { pessoa: "A", it: "Certo, può darmi il numero dell'ordine?", pt: "Claro, pode me dar o número do pedido?" },
            { pessoa: "B", it: "Sì, è 12345.", pt: "Sim, é 12345." },
            { pessoa: "A", it: "Grazie. Attenda mentre la trasferisco.", pt: "Obrigado. Por favor, aguarde enquanto transfiro." },
            { pessoa: "A", it: "Pronto, servizio clienti. Come posso aiutarla?", pt: "Olá, aqui é o atendimento ao cliente. Como posso ajudar?" },
            { pessoa: "B", it: "Il mio ordine non è ancora arrivato. Sono passate due settimane.", pt: "Meu pedido ainda não chegou. Já faz duas semanas." },
            { pessoa: "A", it: "Mi dispiace. Mi lasci controllare lo stato.", pt: "Sinto muito por isso. Deixe-me verificar o status." },
            { pessoa: "B", it: "Grazie, apprezzo il suo aiuto.", pt: "Obrigado, agradeço sua ajuda." }
        ]
    },
    {
        id: "supermercado",
        titulo: "🛒 Al Supermercato",
        descricao: "Você está fazendo compras no supermercado.",
        conversa: [
            { pessoa: "B", it: "Mi scusi, dove posso trovare il latte?", pt: "Com licença, onde posso encontrar o leite?" },
            { pessoa: "A", it: "È nella corsia 5, nella sezione latticini.", pt: "Está no corredor 5, na seção de laticínios." },
            { pessoa: "B", it: "Grazie! E dove sono le uova?", pt: "Obrigado! E onde ficam os ovos?" },
            { pessoa: "A", it: "Proprio accanto al latte, stessa corsia.", pt: "Bem ao lado do leite, mesmo corredor." },
            { pessoa: "B", it: "Avete verdure biologiche?", pt: "Vocês têm vegetais orgânicos?" },
            { pessoa: "A", it: "Sì, sono nel reparto ortofrutta, a sinistra.", pt: "Sim, estão na seção de hortifruti, à esquerda." },
            { pessoa: "B", it: "Questo pane è fresco?", pt: "Esse pão é fresco?" },
            { pessoa: "A", it: "Sì, è stato sfornato stamattina.", pt: "Sim, foi assado hoje de manhã." },
            { pessoa: "B", it: "Perfetto! Credo sia tutto.", pt: "Perfeito! Acho que é tudo." },
            { pessoa: "A", it: "Può pagare a qualsiasi cassa. Contanti o carta?", pt: "Pode pagar em qualquer caixa. Dinheiro ou cartão?" },
            { pessoa: "B", it: "Carta, per favore. Avete borse?", pt: "Cartão, por favor. Vocês têm sacolas?" },
            { pessoa: "A", it: "Sì, di carta o di plastica?", pt: "Sim, papel ou plástico?" }
        ]
    },
    {
        id: "amigos",
        titulo: "👋 Incontrare un Amico",
        descricao: "Você encontra um amigo que não via há tempo.",
        conversa: [
            { pessoa: "A", it: "Ehi! Quanto tempo! Come stai?", pt: "Ei! Quanto tempo! Como você tem estado?" },
            { pessoa: "B", it: "Sto benissimo! E tu?", pt: "Tenho estado ótimo! E você?" },
            { pessoa: "A", it: "Molto bene! Ho saputo che hai un nuovo lavoro.", pt: "Muito bem! Soube que você conseguiu um emprego novo." },
            { pessoa: "B", it: "Sì! Ho iniziato il mese scorso. Mi piace molto.", pt: "Sim! Comecei mês passado. Estou gostando muito." },
            { pessoa: "A", it: "Fantastico! Cosa fai adesso?", pt: "Que legal! O que você está fazendo agora?" },
            { pessoa: "B", it: "Lavoro come project manager in un'azienda tecnologica.", pt: "Trabalho como gerente de projetos em uma empresa de tecnologia." },
            { pessoa: "A", it: "Dovremmo prendere un caffè qualche volta!", pt: "A gente devia tomar um café qualquer dia!" },
            { pessoa: "B", it: "Sicuramente! Sei libero questo fine settimana?", pt: "Com certeza! Você está livre nesse fim de semana?" },
            { pessoa: "A", it: "Sabato va bene per me. Che ne dici alle 15?", pt: "Sábado funciona pra mim. Que tal às 15h?" },
            { pessoa: "B", it: "Perfetto! Vediamoci in quel bar in centro.", pt: "Perfeito! Vamos nos encontrar naquele café no centro." },
            { pessoa: "A", it: "Ottimo! Ci vediamo sabato allora!", pt: "Ótimo! Te vejo no sábado então!" },
            { pessoa: "B", it: "A presto! Stammi bene!", pt: "Até lá! Se cuida!" }
        ]
    },
    {
        id: "daily-standup",
        titulo: "🧑‍💻 Daily Standup",
        descricao: "Reunião diária com o time de desenvolvimento.",
        conversa: [
            { pessoa: "A", it: "Buongiorno a tutti! Iniziamo il daily. Chi vuole cominciare?", pt: "Bom dia a todos! Vamos começar nossa daily. Quem quer começar?" },
            { pessoa: "B", it: "Posso iniziare io. Ieri ho finito di automatizzare i test di login.", pt: "Eu posso começar. Ontem terminei de automatizar os testes de login." },
            { pessoa: "A", it: "Ottimo! Su cosa lavori oggi?", pt: "Ótimo! No que você vai trabalhar hoje?" },
            { pessoa: "B", it: "Oggi lavorerò sui test del flusso di checkout usando Playwright.", pt: "Hoje vou trabalhar nos testes do fluxo de checkout usando Playwright." },
            { pessoa: "A", it: "Hai qualche blocco?", pt: "Você tem algum bloqueio?" },
            { pessoa: "B", it: "Sì, ho bisogno dell'accesso all'ambiente di staging.", pt: "Sim, preciso de acesso ao ambiente de staging." },
            { pessoa: "A", it: "Chiederò a DevOps di darti l'accesso dopo questa riunione.", pt: "Vou pedir pro DevOps te dar acesso após essa reunião." },
            { pessoa: "B", it: "Perfetto, grazie! È tutto da parte mia.", pt: "Perfeito, obrigado! É isso da minha parte." },
            { pessoa: "A", it: "Grazie! Manteniamo i test aggiornati con le nuove funzionalità.", pt: "Obrigado! Vamos manter os testes atualizados com as novas features." },
            { pessoa: "B", it: "Certo, mi sincronizzerò con gli sviluppatori.", pt: "Claro, vou sincronizar com os desenvolvedores." }
        ]
    },
    {
        id: "bug-report",
        titulo: "🐛 Segnalare un Bug",
        descricao: "Você encontrou um bug e precisa reportar ao desenvolvedor.",
        conversa: [
            { pessoa: "B", it: "Ehi, hai un minuto? Ho trovato un bug.", pt: "Ei, você tem um minuto? Encontrei um bug." },
            { pessoa: "A", it: "Certo, qual è il problema?", pt: "Claro, qual é o problema?" },
            { pessoa: "B", it: "Il pulsante di invio non funziona quando il modulo è vuoto.", pt: "O botão de enviar não funciona quando o formulário está vazio." },
            { pessoa: "A", it: "Puoi mostrarmi i passaggi per riprodurlo?", pt: "Você pode me mostrar os passos para reproduzir?" },
            { pessoa: "B", it: "Sì, vai alla pagina di registrazione e clicca invia senza compilare nulla.", pt: "Sim, vá para a página de cadastro e clique em enviar sem preencher nada." },
            { pessoa: "A", it: "Capisco. Qual è il comportamento previsto?", pt: "Entendi. Qual é o comportamento esperado?" },
            { pessoa: "B", it: "Dovrebbe mostrare errori di validazione, ma invece si blocca.", pt: "Deveria mostrar erros de validação, mas ao invés disso apenas trava." },
            { pessoa: "A", it: "Hai controllato la console per errori?", pt: "Você verificou o console por algum erro?" },
            { pessoa: "B", it: "Sì, c'è un'eccezione null pointer.", pt: "Sim, tem uma exceção de ponteiro nulo." },
            { pessoa: "A", it: "Grazie per il rapporto dettagliato. Lo correggo oggi.", pt: "Obrigado pelo relatório detalhado. Vou corrigir hoje." },
            { pessoa: "B", it: "Ottimo! Fammi sapere quando è pronto.", pt: "Ótimo! Me avise quando estiver pronto." }
        ]
    },
    {
        id: "code-review",
        titulo: "👀 Code Review dei Test",
        descricao: "Você está participando de uma revisão de código.",
        conversa: [
            { pessoa: "A", it: "Ho revisionato la tua pull request.", pt: "Eu revisei seu pull request." },
            { pessoa: "B", it: "Grazie! Hai qualche feedback?", pt: "Obrigado! Você tem algum feedback?" },
            { pessoa: "A", it: "Sì, stai usando attese fisse. Puoi usare attese dinamiche?", pt: "Sim, você está usando waits fixos. Pode usar waits dinâmicos?" },
            { pessoa: "B", it: "Hai ragione. Li sostituirò con waitForSelector.", pt: "Você tem razão. Vou substituir por waitForSelector." },
            { pessoa: "A", it: "I dati di test dovrebbero essere in un file separato.", pt: "Os dados de teste devem estar em um arquivo separado." },
            { pessoa: "B", it: "Buon punto. Creerò una cartella fixtures.", pt: "Boa observação. Vou criar uma pasta de fixtures." },
            { pessoa: "A", it: "Puoi aggiungere asserzioni per i messaggi di errore?", pt: "Pode adicionar assertions para as mensagens de erro?" },
            { pessoa: "B", it: "Certo, aggiungerò istruzioni expect.", pt: "Claro, vou adicionar statements expect." },
            { pessoa: "A", it: "Perfetto! Una volta fatte le modifiche, approverò la PR.", pt: "Perfeito! Assim que fizer as mudanças, aprovo o PR." },
            { pessoa: "B", it: "Grazie per la revisione!", pt: "Obrigado pela revisão!" }
        ]
    },
    {
        id: "sprint-planning",
        titulo: "📋 Sprint Planning - QA",
        descricao: "Planejamento de sprint discutindo tarefas de QA.",
        conversa: [
            { pessoa: "A", it: "Discutiamo i compiti QA per questo sprint.", pt: "Vamos discutir as tarefas de QA para essa sprint." },
            { pessoa: "B", it: "Ho stimato lo sforzo di automazione dei test.", pt: "Eu estimei o esforço de automação de testes." },
            { pessoa: "A", it: "Quanti story point per i test del modulo di pagamento?", pt: "Quantos story points para os testes do módulo de pagamento?" },
            { pessoa: "B", it: "Direi 8 punti. Coinvolge test API e test UI.", pt: "Eu diria 8 pontos. Envolve testes de API e testes de UI." },
            { pessoa: "A", it: "Dobbiamo aggiornare la suite di test esistente?", pt: "Precisamos atualizar a suíte de testes existente?" },
            { pessoa: "B", it: "Sì, alcuni locator sono cambiati.", pt: "Sim, alguns locators mudaram." },
            { pessoa: "A", it: "Possiamo eseguire i test in parallelo?", pt: "Podemos rodar os testes em paralelo?" },
            { pessoa: "B", it: "Sì, Playwright supporta l'esecuzione parallela.", pt: "Sim, o Playwright suporta execução paralela." },
            { pessoa: "A", it: "E i test instabili di cui abbiamo parlato?", pt: "E os testes instáveis que discutimos?" },
            { pessoa: "B", it: "Li investigherò e correggerò.", pt: "Vou investigar e corrigir." },
            { pessoa: "A", it: "Sembra buono. Aggiungiamoli al backlog.", pt: "Parece bom. Vamos adicionar ao backlog." }
        ]
    },
    {
        id: "qa-interview",
        titulo: "🎯 Colloquio Tecnico - QA",
        descricao: "Entrevista técnica para vaga de QA Automation.",
        conversa: [
            { pessoa: "A", it: "Mi parli della sua esperienza con l'automazione dei test.", pt: "Me conte sobre sua experiência com automação de testes." },
            { pessoa: "B", it: "Ho 3 anni di esperienza, principalmente con Playwright e Cypress.", pt: "Tenho 3 anos de experiência, principalmente com Playwright e Cypress." },
            { pessoa: "A", it: "Perché preferisce Playwright?", pt: "Por que você prefere Playwright?" },
            { pessoa: "B", it: "Ha un migliore supporto cross-browser e funzionalità di auto-wait.", pt: "Ele tem melhor suporte cross-browser e recursos de auto-wait." },
            { pessoa: "A", it: "Come gestisce gli elementi dinamici nei test?", pt: "Como você lida com elementos dinâmicos nos testes?" },
            { pessoa: "B", it: "Uso attributi data-testid ed evito classi CSS.", pt: "Eu uso atributos data-testid e evito classes CSS." },
            { pessoa: "A", it: "Qual è il suo approccio ai dati di test?", pt: "Qual é sua abordagem para dados de teste?" },
            { pessoa: "B", it: "Uso fixture e factory per dati di test isolati.", pt: "Eu uso fixtures e factories para dados isolados." },
            { pessoa: "A", it: "Come integra i test nella pipeline CI/CD?", pt: "Como você integra testes no pipeline de CI/CD?" },
            { pessoa: "B", it: "Configuro GitHub Actions per ogni pull request.", pt: "Eu configuro GitHub Actions para cada pull request." },
            { pessoa: "A", it: "Eccellente! Ha esperienza con test API?", pt: "Excelente! Tem experiência com testes de API?" },
            { pessoa: "B", it: "Sì, uso il request context di Playwright.", pt: "Sim, uso o request context do Playwright." }
        ]
    },
    {
        id: "test-failure",
        titulo: "❌ Errore nella Pipeline",
        descricao: "Os testes falharam no CI e você precisa investigar.",
        conversa: [
            { pessoa: "A", it: "Ehi, la pipeline è fallita. Puoi controllare?", pt: "Ei, o pipeline falhou. Pode verificar?" },
            { pessoa: "B", it: "Certo, fammi vedere i log.", pt: "Claro, deixa eu olhar os logs." },
            { pessoa: "B", it: "Trovato! Il test va in timeout nella pagina di checkout.", pt: "Encontrei! O teste está dando timeout na página de checkout." },
            { pessoa: "A", it: "È un test instabile o un bug reale?", pt: "É um teste instável ou um bug real?" },
            { pessoa: "B", it: "Fammi provare in locale... È passato in locale.", pt: "Deixa eu rodar localmente... Passou localmente." },
            { pessoa: "A", it: "Forse è un problema di ambiente?", pt: "Talvez seja um problema de ambiente?" },
            { pessoa: "B", it: "Sì, il server di staging è più lento. Aumenterò il timeout.", pt: "Sim, o servidor de staging é mais lento. Vou aumentar o timeout." },
            { pessoa: "A", it: "Dovremmo aggiungere retry per test instabili?", pt: "Devemos adicionar retry para testes instáveis?" },
            { pessoa: "B", it: "Buona idea. Playwright ha retry integrato.", pt: "Boa ideia. O Playwright tem retry nativo." },
            { pessoa: "A", it: "Fammi sapere quando invii la correzione.", pt: "Me avise quando enviar a correção." },
            { pessoa: "B", it: "Fatto! La pipeline dovrebbe passare ora.", pt: "Pronto! O pipeline deve passar agora." }
        ]
    },
    {
        id: "pair-testing",
        titulo: "👥 Sessione di Pair Testing",
        descricao: "Sessão de testes em par com um desenvolvedor.",
        conversa: [
            { pessoa: "A", it: "Pronto per la sessione di pair testing?", pt: "Pronto para a sessão de pair testing?" },
            { pessoa: "B", it: "Sì! Testiamo la nuova funzionalità del profilo.", pt: "Sim! Vamos testar a nova feature de perfil." },
            { pessoa: "A", it: "Condivido lo schermo. Cosa testiamo prima?", pt: "Vou compartilhar a tela. O que testamos primeiro?" },
            { pessoa: "B", it: "Iniziamo con il percorso felice.", pt: "Vamos começar com o caminho feliz." },
            { pessoa: "A", it: "Ok, sto compilando il modulo.", pt: "Ok, estou preenchendo o formulário." },
            { pessoa: "B", it: "Prova a inviare senza i campi obbligatori.", pt: "Tente enviar sem os campos obrigatórios." },
            { pessoa: "A", it: "Bella scoperta! Il messaggio di errore non appare.", pt: "Boa pegada! A mensagem de erro não aparece." },
            { pessoa: "B", it: "Creerò un ticket. Continuiamo.", pt: "Vou criar um ticket. Vamos continuar." },
            { pessoa: "A", it: "E il caricamento della foto profilo?", pt: "E o upload de foto de perfil?" },
            { pessoa: "B", it: "Prova un file più grande di 5MB.", pt: "Tente um arquivo maior que 5MB." },
            { pessoa: "A", it: "Si è bloccato! Dobbiamo gestire questo.", pt: "Travou! Precisamos tratar isso." },
            { pessoa: "B", it: "Ottima sessione! Due bug importanti trovati.", pt: "Ótima sessão! Dois bugs importantes encontrados." }
        ]
    }
];
