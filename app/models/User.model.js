// MobX
import { types } from 'mobx-state-tree';


const UserModel = {
	uid: types.string,
	email: types.string
};


const actions = (self)=> {

	return {
	}
};


const views = (store)=> {

	return {}
};


const volatile = (store)=> {

	return {}
};


export default types.model("UserModel", UserModel)
	.actions(actions)
	.views(views)
	.volatile(volatile);
