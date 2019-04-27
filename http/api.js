import fly from './fly'

export const get = (url, params) => {
	return fly.get(url,params)
}

export const post = (url,params) => {
	return fly.post(url,params)
}
