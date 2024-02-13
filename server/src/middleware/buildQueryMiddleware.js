/* eslint-disable prettier/prettier */
export function buildQueryMiddleware(req, res, next) {
	const { namesUser, nickName, email } = req.query;
	let query = {};
	if (namesUser) {
		const trimmednamesUser = namesUser.trim();
		const regex = new RegExp(trimmednamesUser, 'i');
		query = { namesUser: { $regex: regex } };
	} else if (nickName) {
		const trimmednickName = nickName.trim();
		const regex = new RegExp(trimmednickName, 'i');
		query = { nickName: { $regex: regex } };
	  } else if (email) {
		query = { email };
	}
	req.parsedQuery = query; // Almacenar la consulta en el objeto de solicitud para su uso posterior
	next();
}
