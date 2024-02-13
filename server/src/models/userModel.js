import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
	namesUser: {
		type: String,
		required: true,
		trim: true,
	},

	nickName: {
		type: String,
		required: true,
		trim: true,
	},

	password: {
		type: String,
		required: true,
		trim: true,
		set: value => bcrypt.hashSync(value, 10),
	},

	email: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (value) {
				return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
			},
			message: 'The email field is not a valid email address.',
		},
	},

	instruments: {
		type: String,
		enum: [
			'acordeón',
			'arpa',
			'batería',
			'banjo',
			'bajo',
			'bongó',
			'címbalo',
			'cítara',
			'clave',
			'clavecín',
			'clarinete',
			'conga',
			'contrabajo',
			'corno',
			'djembe',
			'didgeridoo',
			'dulzaina',
			'espineta',
			'fagot',
			'flauta',
			'gaita',
			'guitarra',
			'guitarra eléctrica',
			'kalimba',
			'laúd',
			'mandolina',
			'marimba',
			'oboe',
			'órgano',
			'pandereta',
			'piano',
			'saxofón',
			'sintetizador',
			'sitar',
			'tambor',
			'theremin',
			'timbales',
			'trombón',
			'trompeta',
			'tuba',
			'ukulele',
			'violín',
			'violonchelo',
			'xilófono',
			'güiro',
		],
		default: 'guitarra',
	},

	genres: {
		type: String,
		enum: [
			'bachata',
			'blues',
			'bossa nova',
			'cumbia',
			'dance',
			'electrónica',
			'folk',
			'funk',
			'hip hop',
			'indie',
			'jazz',
			'mariachi',
			'metal',
			'pop',
			'punk',
			'r&b',
			'ranchera',
			'rap',
			'reggae',
			'reggaeton',
			'rock',
			'salsa',
			'ska',
			'soul',
			'tango',
			'trap',
			'trova',
			'vallenato',
		],
		default: 'rock',
	},

	influences: {
		type: String,
		required: true,
		trim: true,
	},

	songs: [
		{
			type: String,
			required: true,
		},
	],
});

const AseguradoModel = mongoose.model('User', userSchema);

export default AseguradoModel;
