// Models
import RootModel from "./models/Root.model";



const store = RootModel.create({
	isAppReady: false,
	user: {
		uid: 'anon',
		email: 'anon'
	}
});

export default store;
