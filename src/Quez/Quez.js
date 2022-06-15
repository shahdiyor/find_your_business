import React, { useState } from 'react';
import '../Quez/Quez.css';


function Quez() {
	const questions = [
		{
			questionText: 'Что вы любили в детстве больше всего?',
			answerOptions: [
				{ answerText: 'Играть во дворе с друзьями', isCorrect: false },
				{ answerText: 'Собираться с друзьями за настольными или компьютерными играми', isCorrect: false },
				{ answerText: 'Играть или читать в одиночестве', isCorrect: true }
			],
		},
		{
			questionText: 'Сколько у вас друзей?',
			answerOptions: [
				{ answerText: 'Много, хорошо общаюсь со всеми', isCorrect: false },
				{ answerText: 'Несколько близких друзей', isCorrect: true },
				{ answerText: 'Не больше одного-двух', isCorrect: false }
			],
		},
		{
			questionText: 'В университете (колледже) вы:',
			answerOptions: [
				{ answerText: 'Были инициативными, выступали на мероприятиях, принимали активное участие в студсовете или жизни университета', isCorrect: true },
				{ answerText: 'Были инициативными, возможно выступали на мероприятиях, но приоритет отдавали учёбе, а не активности', isCorrect: false },
				{ answerText: 'Всё время посвящали учёбе', isCorrect: false },
				{ answerText: 'Не учились', isCorrect: false }
			],
		},
		{
			questionText: 'Сейчас учитесь или работаете в сфере:',
			answerOptions: [
				{ answerText: 'Где нужно постоянно общаться с людьми', isCorrect: false },
				{ answerText: 'Где нужно иногда общаться с людьми', isCorrect: false },
				{ answerText: 'Где почти не приходится общаться с людьми', isCorrect: true }
			],
		},
		{
			questionText: 'В университете (колледже) вы:',
			answerOptions: [
				{ answerText: 'Были инициативными, выступали на мероприятиях, принимали активное участие в студсовете или жизни университета', isCorrect: true },
				{ answerText: 'Были инициативными, возможно выступали на мероприятиях, но приоритет отдавали учёбе, а не активности', isCorrect: false },
				{ answerText: 'Всё время посвящали учёбе', isCorrect: false },
				{ answerText: 'Не учились', isCorrect: false }
			],
		},
		{
			questionText: 'Сейчас учитесь или работаете в сфере:',
			answerOptions: [
				{ answerText: 'Где нужно постоянно общаться с людьми', isCorrect: true },
				{ answerText: 'Где нужно иногда общаться с людьми', isCorrect: false },
				{ answerText: 'Где почти не приходится общаться с людьми', isCorrect: false }
			],
		},
		{
			questionText: 'Для вас привычнее:',
			answerOptions: [
				{ answerText: 'Планировать заранее, как на работе, так и в жизни', isCorrect: true },
				{ answerText: 'Составлять краткосрочные планы', isCorrect: false },
				{ answerText: 'Почти никогда ничего не планировать, только импровизация', isCorrect: false }
			],
		},
		{
			questionText: 'В обществе людей вы:',
			answerOptions: [
				{ answerText: 'Будете заводить новые знакомства и общаться с людьми', isCorrect: true },
				{ answerText: 'Предпочитаете сводить общение к минимуму, но дискомфорта от разговора с незнакомыми людьми не испытываете', isCorrect: false },
				{ answerText: 'Предпочитаете не заводить новые знакомства, лучше посвятите время чему-то более важному', isCorrect: false }
			],
		},
		{
			questionText: 'Опишите свое хобби:',
			answerOptions: [
				{ answerText: 'Спорт или активная деятельность', isCorrect: true },
				{ answerText: 'Хобби с умеренной активностью', isCorrect: false },
				{ answerText: 'Занятие, где нужна усидчивость', isCorrect: false },
				{ answerText: 'Его нет', isCorrect: false },
			],
		},
		{
			questionText: 'Что вы бы выбрали для отдыха?',
			answerOptions: [
				{ answerText: 'Пляж/солнце/море', isCorrect: true },
				{ answerText: 'Серфинг/дайвинг/альпинизм', isCorrect: false },
				{ answerText: 'Клубы/вечеринки', isCorrect: false }
			],
		},
		{
			questionText: 'Выберите занятие, которое больше всего вас привлекают:',
			answerOptions: [
				{ answerText: 'Бег', isCorrect: false },
				{ answerText: 'Бильярд', isCorrect: false },
				{ answerText: 'Компьютерные игры', isCorrect: false }
			],
		},
		{
			questionText: 'Выберите занятие, которое больше всего вас привлекают:',
			answerOptions: [
				{ answerText: 'Лыжи/сноуборд', isCorrect: true },
				{ answerText: 'Настольные игры', isCorrect: false },
				{ answerText: 'Боулинг', isCorrect: false }
			],
		},
		{
			questionText: 'Можно ли сказать, что вы человек инициативный и активный?',
			answerOptions: [
				{ answerText: 'Да', isCorrect: false },
				{ answerText: 'Нет', isCorrect: false },
				{ answerText: 'Иногда да', isCorrect: false }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Стремительный', isCorrect: true },
				{ answerText: 'Обходительный', isCorrect: false },
				{ answerText: 'Вдумчивый', isCorrect: false }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Энергичный', isCorrect: true },
				{ answerText: 'Расчетливый', isCorrect: false },
				{ answerText: 'Мечтательный', isCorrect: false }
			],
		},
		{
			questionText: 'Выберите прилагательное, которое вам наиболее симпатична',
			answerOptions: [
				{ answerText: 'Строгий', isCorrect: true },
				{ answerText: 'Решительный', isCorrect: false },
				{ answerText: 'Легкий', isCorrect: false }
			],
		}

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [hola, setHola] = useState("hola");


	const handleAnswerOptionClick = (isCorrect,answerText) => {

		setHola(hola + " " + answerText);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					 {hola}
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
							<button className='btnQuiz' onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quez;