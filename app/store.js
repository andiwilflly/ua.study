// Models
import RootModel from "./models/Root.model";



const store = RootModel.create({
	isAppReady: false,
	user: null
});

export default store;
