import { AsyncStorage } from 'react-native';
// MobX
import { types, getSnapshot, applySnapshot } from 'mobx-state-tree';
// Models
import UserModel from "./User.model";


const RootModel = {
	isAppReady: types.boolean,
	user: types.maybeNull(UserModel)
};


const actions = (self)=> {

	return {

		update(root={}) {
			Object.keys(self).forEach((fieldName)=> {
				if(root[fieldName] !== undefined) self[fieldName] = root[fieldName];
			});
		},


		async loadFromAsyncStorage() {
			const store = await AsyncStorage.getItem('@store');
			applySnapshot(self, JSON.parse(store));
			console.log('loaded from AS', JSON.parse(store));
		},


		async saveToAsyncStorage() {
			if(!self.user) return;
			await AsyncStorage.setItem('@store', JSON.stringify(getSnapshot(self)));
			console.log('saved to AS', getSnapshot(self));
		},


		logIn(user) {
			self.user = user;
		},


		logOut() {
			self.user = null;
		},
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
