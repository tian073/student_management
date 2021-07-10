import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserList from './components/user/UserList.vue'
import AddNew from './components/user/AddNew.vue'
import Update from './components/user/Update.vue'

export const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/user', name: 'user', component: User, children: [
        {path: '', name: 'user', component: UserList},
        {path: '', name: 'adduser', component: AddNew},
        {path: ':id', name: 'useredit', component: Update},
    ]}
]
