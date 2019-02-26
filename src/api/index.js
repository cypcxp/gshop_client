/**
 * Created by lenovo on 2019/2/23.
 */
import ajax from './ajax'
const BASE='/api'

export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

export const reqCategorys = () => ajax(BASE + '/index_category')

export const reqShops = ({longitude, latitude}) => ajax(BASE + '/shops', {latitude, longitude})

export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')

export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')

export const reqUser = () => ajax(BASE + '/userinfo')

export const reqLogout = () => ajax(BASE + '/logout')
