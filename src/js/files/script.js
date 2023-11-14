// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const square = entry.target.querySelector('.contact__container')
		if (entry.isIntersecting) {
			square.classList.add('_arrow')
			return // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		square.classList.remove('_arrow')
	})
})
observer.observe(document.querySelector('.contact'))
