// MobX
import { types } from 'mobx-state-tree';


const UserModel = {
	uid: types.string,
	email: types.string
};


const actions = (self)=> {

	return {

		logIn(user) {
			self.uid = user.uid;
			self.email = user.email;
		},


		logOut() {
			self.user = {
				uid: 'anon',
				email: 'anon'
			};
		},
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
