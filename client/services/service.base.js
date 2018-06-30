import axios from 'axios'

class BaseService {
  async request (config) {
    try {
      if (typeof config.url === 'undefined' || config.url === '') {
        throw Error('BaseService.request: No Url defined')
      }

      // prepare headers
      if (!config.headers) {
        config.headers = {}
      }

      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json'
      }

      // prepare method
      if (!config.method) {
        config.method = 'get'
      }

      // make request
      const result = await axios(config)
      return result.data
    } catch (err) {
      if (!err.response) {
        err.response = {
          status: 500,
          data: {
            message: err.message
          }
        }
      }
      throw err
    }
  }
}

const getInstance = () => new BaseService()
export { getInstance, BaseService }
export default getInstance()
