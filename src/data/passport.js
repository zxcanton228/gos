export const passport = {
	fullName: 'ПОПОВ АРТЕМ ВЛАДИМИРОВИЧ',
	gender: 'МУЖСКОЙ',
	genderDisplay: 'Мужской',
	dob: '17.01.2008',
	birthPlace: 'ГОРОД НОВОКУЗНЕЦК КЕМЕРОВСКАЯ ОБЛАСТЬ',
	series: '4625',
	number: '452367',
	get seriesNumber() {
		return `${this.series} ${this.number}`
	},
	issueDate: '30.01.2022',
	divisionCode: '500-077',
	issuedBy: 'ГУ МВД РОССИЯ ПО МОСКОВСКОЙ ОБЛАСТИ',
}
