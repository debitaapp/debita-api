import { OK } from 'http-status-codes'

export const status = (event, context, callback) => {
  const response = {
    body: JSON.stringify({
      message: `The service is working`
    }),
    statusCode: OK
  }

  callback(null, response)
}
