// ==========================================
// Banco de Frases - Português / Italiano
// ==========================================
// Adicione mais frases seguindo o formato:
// { pt: "frase em português", it: "frase in italiano" }

const frases = [
    // Cumprimentos e apresentações
    { pt: "Olá, como você está?", it: "Ciao, come stai?" },
    { pt: "Prazer em conhecê-lo", it: "Piacere di conoscerti" },
    { pt: "Meu nome é João", it: "Mi chiamo Giovanni" },
    { pt: "De onde você é?", it: "Di dove sei?" },
    { pt: "Eu sou do Brasil", it: "Sono del Brasile" },

    // Frases do dia a dia
    { pt: "Que horas são?", it: "Che ore sono?" },
    { pt: "Onde fica o banheiro?", it: "Dov'è il bagno?" },
    { pt: "Quanto custa isso?", it: "Quanto costa questo?" },
    { pt: "Eu não entendi", it: "Non ho capito" },
    { pt: "Pode repetir, por favor?", it: "Può ripetere, per favore?" },
    { pt: "Eu preciso de ajuda", it: "Ho bisogno di aiuto" },
    { pt: "Com licença", it: "Mi scusi" },
    { pt: "Desculpe pelo atraso", it: "Scusa per il ritardo" },
    { pt: "Não tem problema", it: "Non c'è problema" },
    { pt: "Obrigado pela sua ajuda", it: "Grazie per il tuo aiuto" },

    // Trabalho
    { pt: "Eu trabalho como programador", it: "Lavoro come programmatore" },
    { pt: "Tenho uma reunião às três horas", it: "Ho una riunione alle tre" },
    { pt: "Preciso terminar esse projeto", it: "Devo finire questo progetto" },
    { pt: "Vou enviar o relatório amanhã", it: "Invierò il rapporto domani" },
    { pt: "Qual é o prazo de entrega?", it: "Qual è la scadenza?" },

    // Restaurante e comida
    { pt: "Uma mesa para dois, por favor", it: "Un tavolo per due, per favore" },
    { pt: "Posso ver o cardápio?", it: "Posso vedere il menu?" },
    { pt: "Eu gostaria de pedir a conta", it: "Vorrei il conto, per favore" },
    { pt: "A comida estava deliciosa", it: "Il cibo era delizioso" },
    { pt: "Eu sou alérgico a amendoim", it: "Sono allergico alle arachidi" },

    // Viagem
    { pt: "Onde fica a estação de trem?", it: "Dov'è la stazione dei treni?" },
    { pt: "Preciso de um táxi", it: "Ho bisogno di un taxi" },
    { pt: "Quanto tempo leva para chegar?", it: "Quanto tempo ci vuole per arrivare?" },
    { pt: "Meu voo foi cancelado", it: "Il mio volo è stato cancellato" },
    { pt: "Perdi minha bagagem", it: "Ho perso il mio bagaglio" },

    // Conversação casual
    { pt: "O que você faz nos fins de semana?", it: "Cosa fai nei fine settimana?" },
    { pt: "Eu gosto de assistir filmes", it: "Mi piace guardare film" },
    { pt: "Qual é o seu filme favorito?", it: "Qual è il tuo film preferito?" },
    { pt: "Você já viajou para o exterior?", it: "Hai mai viaggiato all'estero?" },
    { pt: "Eu estou aprendendo italiano", it: "Sto imparando l'italiano" },

    // Clima
    { pt: "Como está o tempo hoje?", it: "Com'è il tempo oggi?" },
    { pt: "Está muito quente hoje", it: "Fa molto caldo oggi" },
    { pt: "Parece que vai chover", it: "Sembra che stia per piovere" },
    { pt: "Eu esqueci meu guarda-chuva", it: "Ho dimenticato il mio ombrello" },

    // Tecnologia
    { pt: "Meu celular está sem bateria", it: "Il mio cellulare è scarico" },
    { pt: "Qual é a senha do wifi?", it: "Qual è la password del wifi?" },
    { pt: "O site não está funcionando", it: "Il sito non funziona" },
    { pt: "Preciso carregar meu notebook", it: "Devo caricare il mio laptop" },

    // Sentimentos e opiniões
    { pt: "Eu estou muito cansado hoje", it: "Sono molto stanco oggi" },
    { pt: "Isso é muito interessante", it: "Questo è molto interessante" },
    { pt: "Eu concordo com você", it: "Sono d'accordo con te" },
    { pt: "Eu não tenho certeza sobre isso", it: "Non sono sicuro di questo" },
    { pt: "Isso faz sentido", it: "Ha senso" },

    // Pedidos e sugestões
    { pt: "Você pode me ajudar com isso?", it: "Puoi aiutarmi con questo?" },
    { pt: "Vamos almoçar juntos?", it: "Pranziamo insieme?" },
    { pt: "O que você acha?", it: "Cosa ne pensi?" },
    { pt: "Eu sugiro que a gente espere", it: "Suggerisco di aspettare" },
    { pt: "Por favor, me avise quando chegar", it: "Per favore, fammi sapere quando arrivi" },

    // Frases úteis
    { pt: "Eu entendo um pouco de italiano", it: "Capisco un po' di italiano" },
    { pt: "Você fala português?", it: "Parli portoghese?" },
    { pt: "Pode falar mais devagar?", it: "Puoi parlare più lentamente?" },
    { pt: "Como se diz isso em italiano?", it: "Come si dice questo in italiano?" },
    { pt: "Eu estou tentando melhorar meu italiano", it: "Sto cercando di migliorare il mio italiano" },

    // Compras
    { pt: "Estou apenas olhando", it: "Sto solo guardando" },
    { pt: "Você tem isso em outro tamanho?", it: "Ce l'ha in un'altra taglia?" },
    { pt: "Posso pagar com cartão?", it: "Posso pagare con carta?" },
    { pt: "Isso está em promoção?", it: "Questo è in saldo?" },
    { pt: "Onde posso encontrar sapatos?", it: "Dove posso trovare le scarpe?" },

    // Saúde
    { pt: "Eu não estou me sentindo bem", it: "Non mi sento bene" },
    { pt: "Preciso ir ao médico", it: "Devo andare dal medico" },
    { pt: "Estou com dor de cabeça", it: "Ho mal di testa" },
    { pt: "Onde fica a farmácia mais próxima?", it: "Dov'è la farmacia più vicina?" },

    // Relacionamentos
    { pt: "Há quanto tempo vocês estão juntos?", it: "Da quanto tempo state insieme?" },
    { pt: "Ela é minha melhor amiga", it: "Lei è la mia migliore amica" },
    { pt: "Nós nos conhecemos na faculdade", it: "Ci siamo conosciuti all'università" },
    { pt: "Eu sinto sua falta", it: "Mi manchi" },

    // Planos futuros
    { pt: "O que você vai fazer amanhã?", it: "Cosa farai domani?" },
    { pt: "Eu pretendo viajar no próximo mês", it: "Ho intenzione di viaggiare il mese prossimo" },
    { pt: "Estamos planejando uma festa", it: "Stiamo organizzando una festa" },
    { pt: "Meu sonho é morar no exterior", it: "Il mio sogno è vivere all'estero" },

    // Expressões idiomáticas
    { pt: "Melhor prevenir do que remediar", it: "Meglio prevenire che curare" },
    { pt: "Custou os olhos da cara", it: "È costato un occhio della testa" },
    { pt: "Está chovendo canivetes", it: "Piove a catinelle" },
    { pt: "Vou pensar no seu caso", it: "Ci penserò" },
    { pt: "Vamos manter contato", it: "Restiamo in contatto" },

    // ==========================================
    // Frases coloquiais do dia a dia brasileiro
    // ==========================================

    // Confirmações e reações
    { pt: "Eu entendi", it: "Ho capito" },
    { pt: "É verdade", it: "È vero" },
    { pt: "Não é fácil", it: "Non è facile" },
    { pt: "Eu não estou interessado nisso", it: "Non sono interessato a questo" },
    { pt: "Faz sentido", it: "Ha senso" },
    { pt: "Pode ser", it: "Forse" },
    { pt: "Acho que sim", it: "Penso di sì" },
    { pt: "Acho que não", it: "Penso di no" },
    { pt: "Com certeza", it: "Sicuramente" },
    { pt: "Sem dúvida", it: "Senza dubbio" },
    { pt: "Exatamente", it: "Esattamente" },
    { pt: "É isso aí", it: "Proprio così" },
    { pt: "Isso mesmo", it: "Esatto" },
    { pt: "Claro que sim", it: "Certo che sì" },
    { pt: "Claro que não", it: "Certo che no" },

    // Expressões de sentimento
    { pt: "Estou com preguiça", it: "Ho voglia di fare niente" },
    { pt: "Estou com fome", it: "Ho fame" },
    { pt: "Estou com sede", it: "Ho sete" },
    { pt: "Estou com sono", it: "Ho sonno" },
    { pt: "Estou com frio", it: "Ho freddo" },
    { pt: "Estou com calor", it: "Ho caldo" },
    { pt: "Estou entediado", it: "Sono annoiato" },
    { pt: "Estou animado", it: "Sono entusiasta" },
    { pt: "Estou preocupado", it: "Sono preoccupato" },
    { pt: "Estou nervoso", it: "Sono nervoso" },
    { pt: "Estou estressado", it: "Sono stressato" },
    { pt: "Estou com pressa", it: "Ho fretta" },
    { pt: "Estou ocupado agora", it: "Sono occupato adesso" },
    { pt: "Estou de saco cheio", it: "Sono stufo" },

    // Frases do cotidiano
    { pt: "Deixa pra lá", it: "Lascia perdere" },
    { pt: "Tanto faz", it: "Non importa" },
    { pt: "Não importa", it: "Non importa" },
    { pt: "Depende", it: "Dipende" },
    { pt: "Sei lá", it: "Non lo so" },
    { pt: "Quem sabe", it: "Chissà" },
    { pt: "Espera aí", it: "Aspetta un attimo" },
    { pt: "Já volto", it: "Torno subito" },
    { pt: "Estou indo", it: "Sto arrivando" },
    { pt: "Cheguei", it: "Sono arrivato" },
    { pt: "Vou embora", it: "Me ne vado" },
    { pt: "Até mais", it: "A dopo" },
    { pt: "Até amanhã", it: "A domani" },
    { pt: "A gente se vê", it: "Ci vediamo" },
    { pt: "Boa sorte", it: "Buona fortuna" },
    { pt: "Se cuida", it: "Abbi cura di te" },

    // Perguntas comuns
    { pt: "O que aconteceu?", it: "Cosa è successo?" },
    { pt: "Como assim?", it: "Cosa intendi?" },
    { pt: "Por quê?", it: "Perché?" },
    { pt: "Pra quê?", it: "Per cosa?" },
    { pt: "E aí?", it: "Come va?" },
    { pt: "Tudo bem?", it: "Tutto bene?" },
    { pt: "Você está bem?", it: "Stai bene?" },
    { pt: "O que você está fazendo?", it: "Cosa stai facendo?" },
    { pt: "Onde você estava?", it: "Dove eri?" },
    { pt: "Você tem certeza?", it: "Sei sicuro?" },
    { pt: "Está falando sério?", it: "Dici sul serio?" },
    { pt: "Você está brincando?", it: "Stai scherzando?" },
    { pt: "Posso te perguntar uma coisa?", it: "Posso chiederti una cosa?" },
    { pt: "Você se importa?", it: "Ti dispiace?" },

    // Opiniões e reações
    { pt: "Que legal!", it: "Che bello!" },
    { pt: "Que chato!", it: "Che noia!" },
    { pt: "Que pena!", it: "Che peccato!" },
    { pt: "Que bom!", it: "Che bello!" },
    { pt: "Que estranho!", it: "Che strano!" },
    { pt: "Que difícil!", it: "Che difficile!" },
    { pt: "Incrível!", it: "Incredibile!" },
    { pt: "Sério?", it: "Davvero?" },
    { pt: "Nossa!", it: "Wow!" },
    { pt: "Não acredito!", it: "Non ci credo!" },
    { pt: "Que absurdo!", it: "Che assurdo!" },
    { pt: "Isso é ridículo", it: "È ridicolo" },
    { pt: "Isso é injusto", it: "È ingiusto" },

    // Pedidos e respostas
    { pt: "Me dá um minuto", it: "Dammi un minuto" },
    { pt: "Pode deixar", it: "Lascia fare a me" },
    { pt: "Deixa comigo", it: "Ci penso io" },
    { pt: "Não se preocupe", it: "Non ti preoccupare" },
    { pt: "Fica tranquilo", it: "Stai tranquillo" },
    { pt: "Relaxa", it: "Rilassati" },
    { pt: "Calma", it: "Calma" },
    { pt: "Para com isso", it: "Smettila" },
    { pt: "Esquece isso", it: "Dimenticalo" },
    { pt: "Me desculpa", it: "Scusami" },
    { pt: "Foi mal", it: "Scusa" },
    { pt: "Não foi minha culpa", it: "Non è stata colpa mia" },
    { pt: "A culpa é minha", it: "È colpa mia" },

    // Conversação casual
    { pt: "Falando nisso", it: "A proposito" },
    { pt: "Por falar nisso", it: "A proposito" },
    { pt: "Mudando de assunto", it: "Cambiando argomento" },
    { pt: "Na verdade", it: "In realtà" },
    { pt: "Para ser honesto", it: "Ad essere onesto" },
    { pt: "Entre nós", it: "Tra noi" },
    { pt: "Pelo que eu sei", it: "Per quanto ne so" },
    { pt: "Se não me engano", it: "Se non mi sbaglio" },
    { pt: "Pelo visto", it: "A quanto pare" },
    { pt: "De qualquer forma", it: "Comunque" },
    { pt: "No final das contas", it: "Alla fine" },
    { pt: "Resumindo", it: "In breve" },

    // Concordância e discordância
    { pt: "Eu também", it: "Anch'io" },
    { pt: "Eu também não", it: "Neanche io" },
    { pt: "Eu discordo", it: "Non sono d'accordo" },
    { pt: "Não necessariamente", it: "Non necessariamente" },
    { pt: "Mais ou menos", it: "Più o meno" },
    { pt: "Você tem razão", it: "Hai ragione" },
    { pt: "Você está errado", it: "Hai torto" },
    { pt: "Eu estava errado", it: "Mi sbagliavo" },
    { pt: "Eu mudei de ideia", it: "Ho cambiato idea" },

    // Tempo e frequência
    { pt: "De vez em quando", it: "Di tanto in tanto" },
    { pt: "Às vezes", it: "A volte" },
    { pt: "Sempre", it: "Sempre" },
    { pt: "Nunca", it: "Mai" },
    { pt: "Quase nunca", it: "Quasi mai" },
    { pt: "Na maioria das vezes", it: "La maggior parte delle volte" },
    { pt: "Toda hora", it: "Sempre" },
    { pt: "Agora mesmo", it: "Proprio adesso" },
    { pt: "Daqui a pouco", it: "Tra poco" },
    { pt: "Outro dia", it: "L'altro giorno" },
    { pt: "Semana passada", it: "La settimana scorsa" },
    { pt: "Mês que vem", it: "Il mese prossimo" },

    // Situações do dia a dia
    { pt: "Perdi a hora", it: "Ho dormito troppo" },
    { pt: "O trânsito estava horrível", it: "Il traffico era terribile" },
    { pt: "Estou atrasado", it: "Sono in ritardo" },
    { pt: "Acabou a luz", it: "È andata via la luce" },
    { pt: "A internet caiu", it: "Internet non funziona" },
    { pt: "Meu alarme não tocou", it: "La sveglia non è suonata" },
    { pt: "Esqueci em casa", it: "L'ho dimenticato a casa" },
    { pt: "Não deu tempo", it: "Non ho avuto tempo" },
    { pt: "Não deu certo", it: "Non ha funzionato" },
    { pt: "Deu tudo certo", it: "È andato tutto bene" },

    // Frases úteis para conversas
    { pt: "Você me entendeu?", it: "Mi hai capito?" },
    { pt: "Eu não ouvi direito", it: "Non ho sentito bene" },
    { pt: "Pode falar de novo?", it: "Puoi ripetere?" },
    { pt: "O que você quis dizer?", it: "Cosa intendevi?" },
    { pt: "Deixa eu pensar", it: "Lasciami pensare" },
    { pt: "Boa pergunta", it: "Bella domanda" },
    { pt: "Não sei explicar", it: "Non so spiegarlo" },
    { pt: "É complicado", it: "È complicato" },
    { pt: "É uma longa história", it: "È una lunga storia" },
    { pt: "Vou te contar depois", it: "Te lo racconto dopo" },

    // Expressões informais
    { pt: "Tô ligado", it: "Lo so" },
    { pt: "Beleza", it: "Va bene" },
    { pt: "Valeu", it: "Grazie" },
    { pt: "Falou", it: "Ok allora" },
    { pt: "Tá bom", it: "Va bene" },
    { pt: "Fechou", it: "Affare fatto" },
    { pt: "Partiu", it: "Andiamo" },
    { pt: "Bora", it: "Dai" },
    { pt: "Caramba!", it: "Accidenti!" },
    { pt: "Puxa vida!", it: "Perbacco!" },
    { pt: "Meu Deus!", it: "Mio Dio!" },
    { pt: "Ai meu Deus!", it: "Oh mio Dio!" },

    // ==========================================
    // QA e Automação de Testes
    // ==========================================

    // Testes e bugs
    { pt: "Encontrei um bug na aplicação", it: "Ho trovato un bug nell'applicazione" },
    { pt: "Esse teste está falhando", it: "Questo test sta fallendo" },
    { pt: "Todos os testes passaram", it: "Tutti i test sono passati" },
    { pt: "Preciso investigar essa falha", it: "Devo investigare questo errore" },
    { pt: "O teste está instável", it: "Il test è instabile" },
    { pt: "Vou rodar os testes novamente", it: "Rieseguo i test" },
    { pt: "Os testes estão rodando no pipeline", it: "I test stanno girando nella pipeline" },
    { pt: "O teste deu timeout", it: "Il test è andato in timeout" },
    { pt: "Preciso aumentar o timeout", it: "Devo aumentare il timeout" },
    { pt: "O locator não está funcionando", it: "Il locator non funziona" },

    // Automação com Playwright
    { pt: "Estou usando Playwright para automação", it: "Sto usando Playwright per l'automazione" },
    { pt: "Vou criar um novo teste automatizado", it: "Creerò un nuovo test automatizzato" },
    { pt: "O seletor precisa ser mais específico", it: "Il selettore deve essere più specifico" },
    { pt: "Vou usar um data-testid para esse elemento", it: "Userò un data-testid per questo elemento" },
    { pt: "O teste roda em paralelo", it: "Il test gira in parallelo" },
    { pt: "Preciso esperar o elemento aparecer", it: "Devo aspettare che l'elemento appaia" },
    { pt: "O Playwright tem auto-wait", it: "Playwright ha l'auto-wait" },
    { pt: "Vou tirar um screenshot do erro", it: "Farò uno screenshot dell'errore" },
    { pt: "Estou gravando um trace do teste", it: "Sto registrando un trace del test" },
    { pt: "O teste funciona em todos os navegadores", it: "Il test funziona su tutti i browser" },

    // Daily e reuniões
    { pt: "O que você fez ontem?", it: "Cosa hai fatto ieri?" },
    { pt: "No que você vai trabalhar hoje?", it: "Su cosa lavorerai oggi?" },
    { pt: "Você tem algum bloqueio?", it: "Hai qualche blocco?" },
    { pt: "Preciso de acesso ao ambiente de staging", it: "Ho bisogno dell'accesso all'ambiente di staging" },
    { pt: "Vou sincronizar com o time de desenvolvimento", it: "Mi sincronizzerò con il team di sviluppo" },
    { pt: "A daily vai começar em cinco minutos", it: "Il daily inizierà tra cinque minuti" },
    { pt: "Posso compartilhar minha tela?", it: "Posso condividere lo schermo?" },
    { pt: "Você está no mudo", it: "Sei in muto" },
    { pt: "A conexão está ruim", it: "La connessione è scarsa" },
    { pt: "Vou entrar na call agora", it: "Entro nella call adesso" },

    // Code review e PR
    { pt: "Abri um pull request", it: "Ho aperto una pull request" },
    { pt: "Pode revisar meu código?", it: "Puoi revisionare il mio codice?" },
    { pt: "Aprovei o PR", it: "Ho approvato la PR" },
    { pt: "Tem alguns comentários no code review", it: "Ci sono alcuni commenti nel code review" },
    { pt: "Vou fazer as alterações solicitadas", it: "Farò le modifiche richieste" },
    { pt: "O PR está pronto para merge", it: "La PR è pronta per il merge" },
    { pt: "Preciso resolver os conflitos", it: "Devo risolvere i conflitti" },
    { pt: "Vou fazer um rebase na branch", it: "Farò un rebase sul branch" },
    { pt: "O build falhou no CI", it: "La build è fallita nel CI" },
    { pt: "Os checks do GitHub passaram", it: "I check di GitHub sono passati" },

    // Bugs e debugging
    { pt: "Consegue reproduzir o bug?", it: "Riesci a riprodurre il bug?" },
    { pt: "Quais são os passos para reproduzir?", it: "Quali sono i passaggi per riprodurre?" },
    { pt: "Qual é o comportamento esperado?", it: "Qual è il comportamento previsto?" },
    { pt: "O bug acontece só em produção", it: "Il bug succede solo in produzione" },
    { pt: "Vou verificar os logs", it: "Controllo i log" },
    { pt: "Encontrei a causa raiz do problema", it: "Ho trovato la causa principale del problema" },
    { pt: "Era um erro de null pointer", it: "Era un errore di null pointer" },
    { pt: "O bug foi corrigido", it: "Il bug è stato corretto" },
    { pt: "Preciso retestar essa correção", it: "Devo ritestare questa correzione" },
    { pt: "Vou criar um ticket para esse bug", it: "Creerò un ticket per questo bug" },

    // Sprint e planejamento
    { pt: "Quantos story points você estima?", it: "Quanti story point stimi?" },
    { pt: "Essa tarefa é muito grande", it: "Questo task è troppo grande" },
    { pt: "Vamos quebrar em tarefas menores", it: "Dividiamolo in task più piccoli" },
    { pt: "Qual é a prioridade dessa tarefa?", it: "Qual è la priorità di questo task?" },
    { pt: "Isso está no backlog", it: "Questo è nel backlog" },
    { pt: "A sprint termina na sexta-feira", it: "Lo sprint finisce venerdì" },
    { pt: "Vamos adicionar isso na próxima sprint", it: "Aggiungiamolo al prossimo sprint" },
    { pt: "Temos uma retrospectiva hoje", it: "Abbiamo una retrospettiva oggi" },
    { pt: "A feature foi entregue", it: "La feature è stata consegnata" },
    { pt: "Precisamos definir os critérios de aceite", it: "Dobbiamo definire i criteri di accettazione" },

    // Ambiente e infraestrutura
    { pt: "O ambiente de staging está fora do ar", it: "L'ambiente di staging è giù" },
    { pt: "Preciso de uma nova variável de ambiente", it: "Ho bisogno di una nuova variabile d'ambiente" },
    { pt: "O deploy foi feito com sucesso", it: "Il deploy è stato completato con successo" },
    { pt: "Houve um rollback em produção", it: "C'è stato un rollback in produzione" },
    { pt: "O servidor está lento hoje", it: "Il server è lento oggi" },
    { pt: "Preciso reiniciar o container", it: "Devo riavviare il container" },
    { pt: "O banco de dados está indisponível", it: "Il database non è disponibile" },
    { pt: "Vou limpar o cache", it: "Pulisco la cache" },
    { pt: "Os testes rodam em Docker", it: "I test girano su Docker" },
    { pt: "Preciso configurar o GitHub Actions", it: "Devo configurare GitHub Actions" },

    // Comunicação técnica
    { pt: "Pode me explicar como funciona?", it: "Puoi spiegarmi come funziona?" },
    { pt: "Não entendi a lógica desse código", it: "Non ho capito la logica di questo codice" },
    { pt: "Esse código precisa de refatoração", it: "Questo codice ha bisogno di refactoring" },
    { pt: "Vou documentar esse processo", it: "Documenterò questo processo" },
    { pt: "Onde está a documentação?", it: "Dov'è la documentazione?" },
    { pt: "Vou atualizar o README", it: "Aggiornerò il README" },
    { pt: "Tem um exemplo de como usar?", it: "C'è un esempio di come usarlo?" },
    { pt: "Vou criar uma POC primeiro", it: "Creerò prima una POC" },
    { pt: "Precisamos de mais cobertura de testes", it: "Abbiamo bisogno di più copertura dei test" },
    { pt: "A cobertura está em oitenta por cento", it: "La copertura è all'ottanta per cento" },

    // API e testes de integração
    { pt: "Vou testar a API", it: "Testerò l'API" },
    { pt: "O endpoint está retornando erro 500", it: "L'endpoint sta restituendo errore 500" },
    { pt: "A resposta da API está incorreta", it: "La risposta dell'API è incorretta" },
    { pt: "Preciso mockar essa chamada externa", it: "Devo mockare questa chiamata esterna" },
    { pt: "O teste de integração falhou", it: "Il test di integrazione è fallito" },
    { pt: "Vou verificar o payload da requisição", it: "Verificherò il payload della richiesta" },
    { pt: "A autenticação está falhando", it: "L'autenticazione sta fallendo" },
    { pt: "O token expirou", it: "Il token è scaduto" },
    { pt: "Preciso de um novo token de acesso", it: "Ho bisogno di un nuovo token di accesso" },
    { pt: "A API está demorando muito para responder", it: "L'API sta impiegando troppo tempo per rispondere" },

    // Qualidade e boas práticas
    { pt: "Precisamos melhorar a qualidade do código", it: "Dobbiamo migliorare la qualità del codice" },
    { pt: "Vou adicionar validação de entrada", it: "Aggiungerò la validazione dell'input" },
    { pt: "Esse código tem um problema de segurança", it: "Questo codice ha un problema di sicurezza" },
    { pt: "Devemos seguir as boas práticas", it: "Dobbiamo seguire le best practice" },
    { pt: "O código está muito complexo", it: "Il codice è troppo complesso" },
    { pt: "Vou simplificar essa lógica", it: "Semplificherò questa logica" },
    { pt: "Precisamos de testes unitários", it: "Abbiamo bisogno di test unitari" },
    { pt: "Vou escrever testes end-to-end", it: "Scriverò test end-to-end" },
    { pt: "O teste deve ser independente", it: "Il test deve essere indipendente" },
    { pt: "Vou usar fixtures para os dados de teste", it: "Userò fixture per i dati di test" },

    // ==========================================
    // Frases Espirituais (Vital Frosi)
    // ==========================================

    // Conceitos básicos
    { pt: "A alma é imortal", it: "L'anima è immortale" },
    { pt: "Nós somos seres de luz", it: "Siamo esseri di luce" },
    { pt: "Tudo é frequência", it: "Tutto è frequenza" },
    { pt: "A luz cria, a escuridão destrói", it: "La luce crea, l'oscurità distrugge" },
    { pt: "Você é um fractal da Fonte", it: "Sei un frattale della Fonte" },
    { pt: "A consciência nunca morre", it: "La coscienza non muore mai" },
    { pt: "Estamos todos conectados", it: "Siamo tutti connessi" },
    { pt: "O amor incondicional cura tudo", it: "L'amore incondizionato guarisce tutto" },
    { pt: "A compaixão eleva a frequência", it: "La compassione eleva la frequenza" },
    { pt: "O medo é a ausência de amor", it: "La paura è l'assenza di amore" },

    // Transição planetária
    { pt: "A Terra está passando por uma transição", it: "La Terra sta attraversando una transizione" },
    { pt: "Estamos na última encarnação em dualidade", it: "Siamo nell'ultima incarnazione nella dualità" },
    { pt: "Os portais de ascensão estão abertos", it: "I portali dell'ascensione sono aperti" },
    { pt: "O véu do esquecimento será removido", it: "Il velo dell'oblio sarà rimosso" },
    { pt: "A nova Terra está surgindo", it: "La nuova Terra sta emergendo" },
    { pt: "O velho ciclo está terminando", it: "Il vecchio ciclo sta finendo" },
    { pt: "Uma nova era está começando", it: "Una nuova era sta iniziando" },
    { pt: "A frequência do planeta está aumentando", it: "La frequenza del pianeta sta aumentando" },
    { pt: "Muitas almas farão a ascensão agora", it: "Molte anime faranno l'ascensione ora" },
    { pt: "O tempo está se acelerando", it: "Il tempo sta accelerando" },

    // Jornada da alma
    { pt: "Cada alma escolhe suas experiências", it: "Ogni anima sceglie le sue esperienze" },
    { pt: "Não existe coincidência, apenas sincronicidade", it: "Non esiste coincidenza, solo sincronicità" },
    { pt: "Você colhe o que planta", it: "Raccogli ciò che semini" },
    { pt: "A lei de causa e efeito governa tudo", it: "La legge di causa ed effetto governa tutto" },
    { pt: "Ninguém passa pelo que não precisa passar", it: "Nessuno passa attraverso ciò che non ha bisogno di passare" },
    { pt: "Cada experiência é uma lição", it: "Ogni esperienza è una lezione" },
    { pt: "A dor é um professor severo", it: "Il dolore è un maestro severo" },
    { pt: "O sofrimento acelera o aprendizado", it: "La sofferenza accelera l'apprendimento" },
    { pt: "A alma busca evolução constante", it: "L'anima cerca l'evoluzione costante" },
    { pt: "Estamos aqui para aprender e evoluir", it: "Siamo qui per imparare ed evolvere" },

    // Despertar espiritual
    { pt: "O despertar da consciência é inevitável", it: "Il risveglio della coscienza è inevitabile" },
    { pt: "Muitos ainda estão adormecidos", it: "Molti sono ancora addormentati" },
    { pt: "A verdade está sendo revelada", it: "La verità sta venendo rivelata" },
    { pt: "Confie no plano divino", it: "Fidati del piano divino" },
    { pt: "Sua intuição é a voz da sua alma", it: "La tua intuizione è la voce della tua anima" },
    { pt: "Ouça seu coração, não sua mente", it: "Ascolta il tuo cuore, non la tua mente" },
    { pt: "O ego resiste à mudança", it: "L'ego resiste al cambiamento" },
    { pt: "Liberte-se das crenças limitantes", it: "Liberati dalle credenze limitanti" },
    { pt: "Você é mais poderoso do que imagina", it: "Sei più potente di quanto immagini" },
    { pt: "A iluminação vem de dentro", it: "L'illuminazione viene dall'interno" },

    // Vida e morte
    { pt: "A morte não existe para a alma", it: "La morte non esiste per l'anima" },
    { pt: "O corpo é temporário, a alma é eterna", it: "Il corpo è temporaneo, l'anima è eterna" },
    { pt: "Desencarnação é apenas uma transição", it: "La disincarnazione è solo una transizione" },
    { pt: "A vida continua após a morte do corpo", it: "La vita continua dopo la morte del corpo" },
    { pt: "Não há nada a temer na morte", it: "Non c'è nulla da temere nella morte" },
    { pt: "Cada vida é uma oportunidade de crescimento", it: "Ogni vita è un'opportunità di crescita" },
    { pt: "Reencarnamos para aprender lições", it: "Ci reincarniamo per imparare lezioni" },
    { pt: "Carregamos memórias de vidas passadas", it: "Portiamo memorie delle vite passate" },
    { pt: "O karma deve ser equilibrado", it: "Il karma deve essere equilibrato" },
    { pt: "Perdoar liberta a alma", it: "Perdonare libera l'anima" },

    // Energia e vibração
    { pt: "Mantenha sua frequência elevada", it: "Mantieni la tua frequenza elevata" },
    { pt: "Pensamentos negativos baixam sua vibração", it: "I pensieri negativi abbassano la tua vibrazione" },
    { pt: "O amor é a frequência mais alta", it: "L'amore è la frequenza più alta" },
    { pt: "Proteja sua energia de pessoas tóxicas", it: "Proteggi la tua energia dalle persone tossiche" },
    { pt: "A meditação eleva a consciência", it: "La meditazione eleva la coscienza" },
    { pt: "Você atrai o que você vibra", it: "Attiri ciò che vibri" },
    { pt: "A gratidão amplifica a energia positiva", it: "La gratitudine amplifica l'energia positiva" },
    { pt: "Cuide da sua energia todos os dias", it: "Prenditi cura della tua energia ogni giorno" },
    { pt: "Ambientes negativos drenam sua energia", it: "Gli ambienti negativi drenano la tua energia" },
    { pt: "A natureza recarrega nossas energias", it: "La natura ricarica le nostre energie" },

    // Propósito e missão
    { pt: "Cada um tem uma missão única", it: "Ognuno ha una missione unica" },
    { pt: "Você está aqui por uma razão", it: "Sei qui per una ragione" },
    { pt: "Descubra seu propósito de vida", it: "Scopri il tuo scopo di vita" },
    { pt: "Sirva aos outros com amor", it: "Servi gli altri con amore" },
    { pt: "Seja a luz no mundo", it: "Sii la luce nel mondo" },
    { pt: "Sua presença faz diferença", it: "La tua presenza fa la differenza" },
    { pt: "Ajude quem está no caminho", it: "Aiuta chi è sul cammino" },
    { pt: "Compartilhe conhecimento com humildade", it: "Condividi la conoscenza con umiltà" },
    { pt: "O serviço desinteressado eleva a alma", it: "Il servizio disinteressato eleva l'anima" },
    { pt: "Você veio para ancorar a luz", it: "Sei venuto per ancorare la luce" },

    // Vocabulário difícil dos textos
    { pt: "A ascensão depende do estado de consciência", it: "L'ascensione dipende dallo stato di coscienza" },
    { pt: "O Grande Flash Solar está chegando", it: "Il Grande Flash Solare sta arrivando" },
    { pt: "As colônias espirituais acolhem as almas", it: "Le colonie spirituali accolgono le anime" },
    { pt: "O eu superior guia cada fractal", it: "Il sé superiore guida ogni frattale" },
    { pt: "A mônada é a consciência original", it: "La monade è la coscienza originale" },
    { pt: "Atravessamos a ponte interdimensional", it: "Attraversiamo il ponte interdimensionale" },
    { pt: "As linhas do tempo estão se separando", it: "Le linee temporali si stanno separando" },
    { pt: "Estamos vivendo linhas do tempo simultâneas", it: "Stiamo vivendo linee temporali simultanee" },
    { pt: "O livre arbítrio é sagrado", it: "Il libero arbitrio è sacro" },
    { pt: "Ninguém pode interferir no seu caminho", it: "Nessuno può interferire con il tuo cammino" }
];
