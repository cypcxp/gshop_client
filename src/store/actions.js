/**
 * Created by lenovo on 2019/2/23.
 */
import {
  reqShops,
  reqAddress,
  reqCategorys,
  reqUser,
  reqLogout
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      commit(RECEIVE_ADDRESS, result.data)
    }
  },

  async getCategorys({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },

  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      commit(RECEIVE_SHOPS, result.data)
    }
  },
  saveUser({commit},user){
    commit(RECEIVE_USER,user)
  },
  async getUser({commit}){
    const result=await reqUser()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  }
}
