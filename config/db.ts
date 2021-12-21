import mongoose from 'mongoose';
import config from 'config';

const options = {
	useNewUrlParser   : true,
	useCreateIndex    : true,
	useFindAndModify  : false,
	useUnifiedTopology: true
}

export const connectToMongoDB = async () => {
	try {
		await mongoose.connect( config.get( 'mongoDBuri' ) );
		console.log( 'MongoDB Connected Successfully' );
	} catch ( err ) {
		console.error( err.message );
		process.exit( 1 );
	}
};
