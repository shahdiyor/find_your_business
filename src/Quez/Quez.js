import React, { useState } from 'react';
import '../Quez/Quez.css';


function Quez() {

	const result = [
		{
			code: "323322",
			business: "Пекарня"
		},
		{
			code: "121111",
			business: "Салон красоты"
		},
		{
			code: "232322",
			business: "Онлайн-кондитерская"
		},
		{
			code: "123222",
			business: "Блинная"
		},
		{
			code: "124123",
			business: "Продажа электронных аксессуаров"
		},
		{
			code: "124223",
			business: "Шаверма"
		},
		{
			code: "112112",
			business: "Ателье"
		},
		{
			code: "111222",
			business: "Зоо-магазин"
		},
		{
			code: "111112",
			business: "Бутик модной одежды"
		},
		{
			code: "122222",
			business: "Сувениры ручной работы"
		},
		{
			code: "222211",
			business: "Студия ремонта"
		},
		{
			code: "333312",
			business: "Ферма"
		},
		{
			code: "122111",
			business: "Учебный центр"
		},
		{
			code: "123121",
			business: "Консалтинг и заполнение документов"
		},
	]

	const questions = [
		{
			questionText: 'Что вы любили в детстве больше всего?',
			answerOptions: [
				{ answerText: 'Играть во дворе с друзьями', isCorrect: false, number: 1 },
				{ answerText: 'Собираться с друзьями за настольными или компьютерными играми', isCorrect: false, number: 2 },
				{ answerText: 'Играть или читать в одиночестве', isCorrect: true, number: 3 }
			],
		},
		{
			questionText: 'Сколько у вас друзей?',
			answerOptions: [
				{ answerText: 'Много, хорошо общаюсь со всеми', isCorrect: false, number: 1 },
				{ answerText: 'Несколько близких друзей', isCorrect: true, number: 2 },
				{ answerText: 'Не больше одного-двух', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'В университете (колледже) вы:',
			answerOptions: [
				{ answerText: 'Были инициативными, выступали на мероприятиях, принимали активное участие в студсовете или жизни университета', isCorrect: true, number: 1 },
				{ answerText: 'Были инициативными, возможно выступали на мероприятиях, но приоритет отдавали учёбе, а не активности', isCorrect: false, number: 2 },
				{ answerText: 'Всё время посвящали учёбе', isCorrect: false, number: 3 },
				{ answerText: 'Не учились', isCorrect: false, number: 4 }
			],
		},
		{
			questionText: 'Сейчас учитесь или работаете в сфере:',
			answerOptions: [
				{ answerText: 'Где нужно постоянно общаться с людьми', isCorrect: false, number: 1 },
				{ answerText: 'Где нужно иногда общаться с людьми', isCorrect: false, number: 2 },
				{ answerText: 'Где почти не приходится общаться с людьми', isCorrect: true, number: 3 }
			],
		},
		{
			questionText: 'В университете (колледже) вы:',
			answerOptions: [
				{ answerText: 'Были инициативными, выступали на мероприятиях, принимали активное участие в студсовете или жизни университета', isCorrect: true, number: 1 },
				{ answerText: 'Были инициативными, возможно выступали на мероприятиях, но приоритет отдавали учёбе, а не активности', isCorrect: false, number: 2 },
				{ answerText: 'Всё время посвящали учёбе', isCorrect: false, number: 3 },
				{ answerText: 'Не учились', isCorrect: false, number: 4 }
			],
		},
		{
			questionText: 'Сейчас учитесь или работаете в сфере:',
			answerOptions: [
				{ answerText: 'Где нужно постоянно общаться с людьми', isCorrect: true, number: 1 },
				{ answerText: 'Где нужно иногда общаться с людьми', isCorrect: false, number: 2 },
				{ answerText: 'Где почти не приходится общаться с людьми', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Для вас привычнее:',
			answerOptions: [
				{ answerText: 'Планировать заранее, как на работе, так и в жизни', isCorrect: true, number: 1 },
				{ answerText: 'Составлять краткосрочные планы', isCorrect: false, number: 2 },
				{ answerText: 'Почти никогда ничего не планировать, только импровизация', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'В обществе людей вы:',
			answerOptions: [
				{ answerText: 'Будете заводить новые знакомства и общаться с людьми', isCorrect: true, number: 1 },
				{ answerText: 'Предпочитаете сводить общение к минимуму, но дискомфорта от разговора с незнакомыми людьми не испытываете', isCorrect: false, number: 2 },
				{ answerText: 'Предпочитаете не заводить новые знакомства, лучше посвятите время чему-то более важному', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Опишите свое хобби:',
			answerOptions: [
				{ answerText: 'Спорт или активная деятельность', isCorrect: true, number: 1 },
				{ answerText: 'Хобби с умеренной активностью', isCorrect: false, number: 2 },
				{ answerText: 'Занятие, где нужна усидчивость', isCorrect: false, number: 3 },
				{ answerText: 'Его нет', isCorrect: false, number: 4 },
			],
		},
		{
			questionText: 'Что вы бы выбрали для отдыха?',
			answerOptions: [
				{ answerText: 'Пляж/солнце/море', isCorrect: true, number: 1 },
				{ answerText: 'Серфинг/дайвинг/альпинизм', isCorrect: false, number: 2 },
				{ answerText: 'Клубы/вечеринки', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Выберите занятие, которое больше всего вас привлекают:',
			answerOptions: [
				{ answerText: 'Бег', isCorrect: false, number: 1 },
				{ answerText: 'Бильярд', isCorrect: false, number: 2 },
				{ answerText: 'Компьютерные игры', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Выберите занятие, которое больше всего вас привлекают:',
			answerOptions: [
				{ answerText: 'Лыжи/сноуборд', isCorrect: true, number: 1 },
				{ answerText: 'Настольные игры', isCorrect: false, number: 2 },
				{ answerText: 'Боулинг', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Можно ли сказать, что вы человек инициативный и активный?',
			answerOptions: [
				{ answerText: 'Да', isCorrect: false, number: 1 },
				{ answerText: 'Нет', isCorrect: false, number: 2 },
				{ answerText: 'Иногда да', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Стремительный', isCorrect: true, number: 1 },
				{ answerText: 'Обходительный', isCorrect: false, number: 2 },
				{ answerText: 'Вдумчивый', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Энергичный', isCorrect: true, number: 1 },
				{ answerText: 'Расчетливый', isCorrect: false, number: 2 },
				{ answerText: 'Мечтательный', isCorrect: false, number: 3 }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Строгий', isCorrect: true, number: 1 },
				{ answerText: 'Решительный', isCorrect: false, number: 2 },
				{ answerText: 'Легкий', isCorrect: false, number: 3 }
			],
		}

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [hola, setHola] = useState("");
	const [res, setRes] = useState("К сожалению мы не смогли определить ваше направление!");



	const handleAnswerOptionClick = (isCorrect,answerText, number) => {


		if(hola.length<=5){
			setHola(hola+number);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			console.log(hola)
			result.forEach(element => {
				if(element.code==hola){
					setRes("Ваше направление: "+element.business)
				}
			});
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					 {res}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count' style={{color:'white' }}>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='btnQuiz' onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText, answerOption.number)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quez;