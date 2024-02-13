const parseDateToJSON = date => {
	const dateParsed = date.toLocaleDateString('es-AR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
	return dateParsed;
};

export default parseDateToJSON;
