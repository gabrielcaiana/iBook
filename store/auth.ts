import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Store {
  email: string
  password: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = '' as Token

  @Mutation
  private UPDATE_TOKEN(token: Token) {
    this.token = token
  }

  @Action
  async create({ email, password }: Store) {
    const { accessToken, status }: any = await $axios.post('/login', {
      email,
      password,
    })

    if (status === 200) {
      $cookies.set('token', accessToken, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      })

      this.context.commit('UPDATE_TOKEN', accessToken)
    }
  }

  @Action
  public update() {
    const token = $cookies.get('token' || null)
    this.context.commit('UPDATE_TOKEN', token)
  }

  @Action
  public destroy() {
    $cookies.remove('token')
    this.context.commit('UPDATE_TOKEN', null)
  }
}
