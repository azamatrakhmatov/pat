const questions = [
    { number: 1, question: "В каком городе находится Кремль?", image: "", answers: ["Москва", "Санкт-Петербург", "Казань"], correct: 0 },
        
        { number: 2, question: "Какое транспортное средство является самым быстрым в городе?", image: "", answers: ["Автобус", "Метро", "Трамвай"], correct: 1 },
        
        { number: 3, question: "Что обозначает знак 'Остановка запрещена'?", image: "", answers: ["Можно остановиться", "Остановиться нельзя", "Остановка разрешена"], correct: 1 },
        
        { number: 4, question: "Какой документ нужен для работы в России?", image: "", answers: ["Паспорт", "Виза", "Разрешение на работу"], correct: 2 },
        
        { number: 5, question: "Какой город является столицей России?", image: "", answers: ["Сочи", "Москва", "Екатеринбург"], correct: 1 },
        
        { number: 6, question: "Что такое 'квитанция'?", image: "", answers: ["Документ о платеже", "Договор", "Счет-фактура"], correct: 0 },
        
        { number: 7, question: "Какой тип общественного транспорта самый доступный?", image: "", answers: ["Такси", "Автобус", "Метро"], correct: 1 },
        
        { number: 8, question: "Что нужно сделать, если вы потеряли свою работу?", image: "", answers: ["Идти на улицу", "Искать новую работу", "Ждать пособие"], correct: 1 },
        
        { number: 9, question: "Какой из этих документов считается удостоверением личности?", image: "", answers: ["Справка", "Паспорт", "Водительские права"], correct: 1 },
        
        { number: 10, question: "Что вы должны делать, если видите знак 'Пешеходный переход'?", image: "", answers: ["Ускорить движение", "Остановиться и пропустить пешеходов", "Игнорировать знак"], correct: 1 },

       
            { number: 11, question: "Какой цвет в России считается символом удачи?", answers: ["Красный", "Зеленый", "Синий"], correct: 0 },
        
            { number: 12, question: "Что такое 'госуслуги'?", answers: ["Сервис для получения услуг", "Системы оплаты", "Торговая сеть"], correct: 0 },
        
            { number: 13, question: "Какой день недели считается выходным в России?", answers: ["Понедельник", "Суббота", "Четверг"], correct: 1 },
        
            { number: 14, question: "Какое из этих животных является символом России?", answers: ["Степной орел", "Медведь", "Лосось"], correct: 1 },
        
            { number: 15, question: "Что такое 'акция'?", answers: ["Элемент бумаги", "Разновидность рекламы", "Ценная бумага"], correct: 2 },
        
            { number: 16, question: "Где находится Эрмитаж?", answers: ["Москва", "Санкт-Петербург", "Казань"], correct: 1 },
        
            { number: 17, question: "Какой русский писатель создал 'Войну и мир'?", answers: ["Гоголь", "Толстой", "Достоевский"], correct: 1 },
        
            { number: 18, question: "Какой газ является основным компонентом воздуха?", answers: ["Кислород", "Углекислый газ", "Азот"], correct: 2 },
        
            { number: 19, question: "Что такое 'субтропики'?", answers: ["Климатическая зона", "Тип еды", "Степенной вид"], correct: 0 },
        
            { number: 20, question: "Какой водой лучше всего умываться по утрам?", answers: ["Холодной", "Теплой", "Горячей"], correct: 1 },
        
            { number: 21, question: "Какой вид спорта считается национальным в России?", answers: ["Футбол", "Хоккей", "Баскетбол"], correct: 1 },
        
            { number: 22, question: "Какая валюта используется в России?", answers: ["Доллар", "Евро", "Рубль"], correct: 2 },
        
            { number: 23, question: "Что обозначает знак 'Движение запрещено'?", answers: ["Можно проехать", "Въезд запрещен", "Только пешком"], correct: 1 },
        
            { number: 24, question: "Кто такой 'дальнобойщик'?", answers: ["Водитель грузовика", "Механик", "Путь к городу"], correct: 0 },
        
            { number: 25, question: "Какой русский композитор создал 'Лебединое озеро'?", answers: ["Рахманинов", "Чайковский", "Скрябин"], correct: 1 },
        
            { number: 26, question: "Что такое 'стихотворение'?", answers: ["Прозаическое произведение", "Литературный жанр", "Научный текст"], correct: 1 },
        
            { number: 27, question: "Какой город является культурной столицей России?", answers: ["Москва", "Санкт-Петербург", "Волгоград"], correct: 1 },
        
            { number: 28, question: "Кто был первым президентом России?", answers: ["Горбачев", "Ельцин", "Путин"], correct: 1 },
        
            { number: 29, question: "Что такое 'река'?", answers: ["Проточная вода", "Суша", "Океанская вода"], correct: 0 },
        
            { number: 30, question: "Какой размер обуви считается стандартным в России?", answers: ["36", "40", "42"], correct: 1 },
        
            { number: 31, question: "Зачем предназначен отпуск?", answers: ["Отдых", "Работа", "Учеба"], correct: 0 },
        
            { number: 32, question: "Какой язык является государственным в России?", answers: ["Английский", "Русский", "Французский"], correct: 1 },
        
            { number: 33, question: "Какой праздник отмечается 8 марта?", answers: ["Мужской день", "Женский день", "День семьи"], correct: 1 },
        
            { number: 34, question: "Что собой представляет 'интернет'?", answers: ["Глобальная сеть", "Телевизионный канал", "Системы контроля"], correct: 0 },
        
            { number: 35, question: "Какое морское побережье разделяет Европу и Азию?", answers: ["Каспийское море", "Балтийское море", "Тихий океан"], correct: 0 },
        
            { number: 36, question: "Какой из следующих городов является портом?", answers: ["Москва", "Новороссийск", "Саратов"], correct: 1 },
        
            { number: 37, question: "Кто является автором 'Мастера и Маргариты'?", answers: ["Булгаков", "Гоголь", "Пушкин"], correct: 0 },
        
            { number: 38, question: "Что такое 'департамент'?", answers: ["Отдел в организации", "Класс в школе", "Площадь"], correct: 0 },
        

            { number: 39, question: "Какой континент считается самым большим?", answers: ["Евразия", "Северная Америка", "Австралия"], correct: 0 },
    
            { number: 40, question: "Что такое 'валидность'?", answers: ["Ценность информации", "Сохранность данных", "Корректность измерений"], correct: 2 },
        
            { number: 41, question: "Какое существо у насекомых имеет 'жало'?", answers: ["Пчела", "Слепень", "Бабочка"], correct: 0 },
        
            { number: 42, question: "Что из ниже перечисленного является млекопитающим?", answers: ["Крокодил", "Лев", "Гаргора"], correct: 1 },
        
            { number: 43, question: "Какое из этих растений является однолетним?", answers: ["Трава", "Дуб", "Яблоня"], correct: 0 },
        
            { number: 44, question: "Что означает термин 'космос'?", answers: ["Внешняя атмосфера", "Система планет", "Вселенная"], correct: 2 },
        
            { number: 45, question: "Какой из указанных процессов является физическим?", answers: ["Горение", "Замораживание", "Распад"], correct: 1 },
        
            { number: 46, question: "Что такое 'виртуальная реальность'?", answers: ["Иллюзорный мир", "Реальный мир", "Графический интерфейс"], correct: 0 },
        
            { number: 47, question: "Какое из этих выражений является пословицей?", answers: ["Дорогу осилит идущий", "Japan is a beautiful country", "Позитивный человек живет",], correct: 0 },
        
            { number: 48, question: "К какой категории относится 'информация'?", answers: ["Материал", "Данные", "Энергия"], correct: 1 },
        
            { number: 49, question: "Что такое 'День Земли'?", answers: ["Праздник природы", "Международный день", "Идея сохранения природы"], correct: 2 },
        
            { number: 50, question: "Какой праздник отмечается 1 января?", answers: ["Новый год", "Рождество", "День труда"], correct: 0 },
        
            { number: 51, question: "Какой из указанных предметов является электронным?", answers: ["Карандаш", "Компьютер", "Книга"], correct: 1 },
        
            { number: 52, question: "Какой цвет указывают в флаге России?", answers: ["Зеленый", "Голубой", "Красный"], correct: 2 },
        
            { number: 53, question: "Что такое 'экосистема'?", answers: ["Естественная среда"], correct: [] },
        
            { number: 54, question: "Какой дается кличка второму ребенку в семье согласно традициям?", answers: ["Федя", "Никита", "Саша"], correct: 1 },
        
            { number: 55, question: "Что является крайним посёлком России?", answers: ["Владивосток", "Калининград", "Улан-Удэ"], correct: 0 },
        
            { number: 56, question: "Кто открыл Америку?", answers: ["Колумб", "Васко да Гама","Маугли"],correct:0},
            { number: 57, question: "Какой газ выделяется при фотосинтезе?", answers: ["Кислород", "Азот", "Углекислый газ"], correct: 0 },

    { number: 58, question: "Кто является автором 'Сказок'?", answers: ["Есенин", "Пушкин", "Гоголь"], correct: 1 },

    { number: 59, question: "Какую пищу считаем здоровой?", answers: ["Фастфуд", "Фрукты и овощи", "Шоколад"], correct: 1 },

    { number: 60, question: "Какой из этих элементов имеет атомный номер 1?", answers: ["Гелий", "Водород", "Кислород"], correct: 1 },

    { number: 61, question: "Какой из этих океанов является самым западным?", answers: ["Индийский", "Тихий", "Атлантический"], correct: 2 },

    { number: 62, question: "Кто структурировал Теорему Пифагора?", answers: ["Аристотель", "Пифагор", "Сократ"], correct: 1 },

    { number: 63, question: "Какой сезон следует за зимой?", answers: ["Весна", "Лето", "Осень"], correct: 0 },

    { number: 64, question: "Что такое 'парадигма'?", answers: ["Модель восприятия", "Неизменная истина", "Метод работы"], correct: 0 },

    { number: 65, question: "Какой из ниже перечисленных языков является романским?", answers: ["Английский", "Испанский", "Китайский"], correct: 1 },

    { number: 66, question: "Что такое 'анализ'?", answers: ["Исследование", "Очертание", "Упрощение"], correct: 0 },

    { number: 67, question: "Какой цвет на светофоре означает 'стоп'?", answers: ["Зеленый", "Красный", "Желтый"], correct: 1 },

    { number: 68, question: "Что такое 'реализация'?", answers: ["Сбывание", "Уничтожение", "Состояние"], correct: 0 },

    { number: 69, question: "Какой орган отвечает за кровообращение?", answers: ["Печень", "Сердце", "Легкие"], correct: 1 },

    { number: 70, question: "Что из нижеперечисленного является фауной?", answers: ["Растения", "Животные", "Микробы"], correct: 1 },

    { number: 71, question: "Какой праздник отмечают 9 мая?", answers: ["День Победы", "День России", "День труда"], correct: 0 },

    { number: 72, question: "Какой из перечисленных предметов используется для письма?", answers: ["Стол", "Карандаш", "Книга"], correct: 1 },

    { number: 73, question: "Кто составляет всю политическую систему страны?", answers: ["Народ", "Община", "Политики"], correct: 0 },

    { number: 74, question: "Что означает 'субсидия'?", answers: ["Дополнительная помощь", "Снижение налогов", "Система штрафов"], correct: 0 },

    { number: 75, question: "Кто является известным русским балетмейстером?", answers: ["Станиславский", "Нуриев", "Мейерхольд"], correct: 1 },

    { number: 76, question: "Какой цвет олицетворяет чистоту?", answers: ["Синий", "Зеленый", "Белый"], correct: 2 },

    { number: 77, question: "Какое из этих телескопов является самым известным?", answers: ["Хаббл", "Кеплер", "Джеймс Уэбб"], correct: 0 },

    { number: 78, question: "Какое наиболее распространенное заболевание среди людей?", answers: ["Грипп", "Долгосрочные болезни", "Клиническая депрессия"], correct: 0 },

    { number: 79, question: "Какой из перечисленных овощей является корнеплодом?", answers: ["Капуста", "Морковь", "Огурец"], correct: 1 },

    { number: 80, question: "Что из ниже перечисленного является миром, видимым через наш мозг?", answers: ["Галактики", "Вода", "Субатомные частицы"], correct: 0 },

    { number: 81, question: "Какая планета является самой большой в Солнечной системе?", answers: ["Земля", "Юпитер", "Сатурн"], correct: 1 },

    { number: 82, question: "Кто написал 'Войну и мир'?", answers: ["Толстой", "Чехов", "Достоевский"], correct: 0 },
    
    { number: 83, question: "Какое растение является основным источником кислорода на Земле?", answers: ["Деревья", "Травы", "Цветы"], correct: 0 },
    
    { number: 84, question: "Какой химический элемент обозначается символом 'Fe'?", answers: ["Золото", "Железо", "Фтор"], correct: 1 },
    
    { number: 85, question: "Кто изобрел электрическую лампочку?", answers: ["Эдисон", "Тесла", "Фарадей"], correct: 0 },
    
    { number: 86, question: "Какой национальный напиток считается традиционным в России?", answers: ["Пиво", "Квас", "Вино"], correct: 1 },
    
    { number: 87, question: "Какой род деятельности связан с медициной?", answers: ["Биология", "Химия", "Медицинские науки"], correct: 2 },
    
    { number: 88, question: "Какой наградой удостоиваются победители Олимпийских игр?", answers: ["Золотая медаль", "Серебряная медаль", "Бронзовая медаль"], correct: 0 },
    
    { number: 89, question: "К какому типу музыкальных инструментов относится гитара?", answers: ["Струнные", "Духовые", "Ударные"], correct: 0 },
    
    { number: 90, question: "Что такое 'интернет'?", answers: ["Глобальная сеть", "Программное обеспечение", "Операционная система"], correct: 0 },
    
    { number: 91, question: "Какой из этих материалов является стойким к коррозии?", answers: ["Сталь", "Алюминий", "Нержавеющая сталь"], correct: 2 },
    
    { number: 92, question: "Какой орган чувств отвечает за слух?", answers: ["Глаза", "Уши", "Нос"], correct: 1 },
    
    { number: 93, question: "Кто является основателем компании Apple?", answers: ["Гейтс", "Джобс", "Цукерберг"], correct: 1 },
    
    { number: 94, question: "Какой письменный язык считается одной из самых древних в мире?", answers: ["Иероглифы", "Латынь", "Арамейский"], correct: 0 },
    
    { number: 95, question: "Что из перечисленного считается самым глубоким океаном на Земле?", answers: ["Атлантический", "Тихий", "Индийский"], correct: 1 },
    
    { number: 96, question: "Какой цвет флага России?", answers: ["Красный, белый, синий", "Зеленый, желтый, красный", "Синий, белый, черный"], correct: 0 },
    
    { number: 97, question: "Кто является самым быстрым наземным животным?", answers: ["Гепард", "Лев", "Собака"], correct: 0 },
    
    { number: 98, question: "Какой элемент таблицы Менделеева обозначается символом 'O'?", answers: ["Углерод", "Кислород", "Азот"], correct: 1 },
    
    { number: 99, question: "Что является основной единицей измерения силы?", answers: ["Ньютон", "Килограмм", "Джоуль"], correct: 0 },
    
    { number: 100, question: "Какой математический термин обозначает 'площадь фигуры'?", answers: ["Объем", "Периметр", "Площадь"], correct: 2 }
    



    

];
    // 15 ta boshqa savol qo'shing

let questionsToAsk = [];
let currentQuestion = 0;
let correctAnswers = 0;
let userResponses = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectRandomQuestions() {
    shuffleArray(questions);
    questionsToAsk = questions.slice(0, 20); // Faqat 20 ta savolni tanlash
}

function loadQuestion() {
    if (currentQuestion >= questionsToAsk.length) {
        return showResults();
    }

    const questionData = questionsToAsk[currentQuestion];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("question-image").src = questionData.image || "";
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });

    const nextButton = document.createElement("button");
    nextButton.innerText = "следующий";
    nextButton.style.backgroundColor = "orange";
    nextButton.onclick = skipQuestion;
    answersElement.appendChild(nextButton);

    updateResponseIndicators();
}

function checkAnswer(index) {
    const questionData = questionsToAsk[currentQuestion];
    userResponses[currentQuestion] = index;

    if (index === questionData.correct) {
        correctAnswers++;
    }

    currentQuestion++;
    loadQuestion();
}

function skipQuestion() {
    currentQuestion++;
    loadQuestion();
}

function updateResponseIndicators() {
    const indicatorDiv = document.getElementById("indicators");
    indicatorDiv.innerHTML = "";
    questionsToAsk.forEach((question, index) => {
        const span = document.createElement("span");
        if (userResponses[index] === question.correct) {
            span.style.color = "green";
            span.innerText = `Savol ${index + 1}: TO'G'RI\n`;
        } else if (userResponses[index] !== undefined) {
            span.style.color = "red";
            span.innerText = `Savol ${index + 1}: NOTO'G'RI\n`;
        }
        indicatorDiv.appendChild(span);
    });
}

function showResults() {
    const resultDiv = document.createElement("div");
    let resultMessage = correctAnswers / questionsToAsk.length < 0.6 ?
        "Testdan o’ta olmadingiz, qayta urinib ko’ring" :
        "Test muvaffaqiyatli topshirildi";

    const resultColor = correctAnswers / questionsToAsk.length < 0.6 ? "red" : "green";
    resultDiv.innerHTML = `<div style="color: ${resultColor}; font-weight: bold;">Natijangiz: ${correctAnswers}/${questionsToAsk.length} (${((correctAnswers / questionsToAsk.length) * 100).toFixed(2)}%)<br>${resultMessage}</div><br>`;

    resultDiv.innerHTML += "NOTO'G'RI JAVOBLAR:";
    questionsToAsk.forEach((question, index) => {
        if (userResponses[index] !== question.correct) {

            resultDiv.innerHTML += `<br><strong style="color: red;">Savol: ${question.question}, Sizning javob: ${question.answers[userResponses[index]]}, To'g'ri javob: ${question.answers[question.correct]}</strong>`;
        }
    });

    const restartButton = document.createElement("button");
    restartButton.innerText = "Testni qayta boshlash";
    restartButton.style.backgroundColor = "blue";
    restartButton.style.color = "white";
    restartButton.style.padding = "10px 20px";
    restartButton.style.border = "none";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.onclick = restartQuiz;

    resultDiv.appendChild(restartButton);
    document.body.appendChild(resultDiv);
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    userResponses = [];

    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";

    const indicatorDiv = document.getElementById("indicators");
    indicatorDiv.innerHTML = "";

    const resultDiv = document.querySelector("div");
    if (resultDiv) document.body.removeChild(resultDiv);

    loadQuestion();
}

selectRandomQuestions(); // Tasodifiy savollarni tanlash
loadQuestion(); // Savol yuklash
