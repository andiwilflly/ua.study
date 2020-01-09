// MobX
import { types } from 'mobx-state-tree';
// Models
import UserModel from "./User.model";


const RootModel = {
	isAppReady: types.boolean,
	user: UserModel
};


const actions = (self)=> {

	return {

		update(root={}) {
			Object.keys(self).forEach((fieldName)=> {
				if(root[fieldName] !== undefined) self[fieldName] = root[fieldName];
			});
		}
	}
};


const views = (store)=> {

	return {}
};


const volatile = (store)=> {

	return {}
};


export default types.model("RootModel", RootModel)
	.actions(actions)
	.views(views)
	.volatile(volatile);
