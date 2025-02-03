export function formatDate(dateString: string, type?: string): string {
	const date = new Date(dateString)

	if (type === 'card') {
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = String(date.getFullYear()).slice(-2)
		return `${month}/${year}`
	}

	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]

	const day = date.getDate()
	const month = months[date.getMonth()]
	const year = date.getFullYear()

	return `${day} ${month} ${year} года`
}
