const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/038b824f48c4c3a3569906b8a3c684fc/'+ long +','+ lat +'?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error)
            callback('Unable to connect to weather service!', undefined)
        else if(body.error)
            callback('Unable to find location. Please try another search', undefined)
        else {
            // callback(undefined, {
            //     summary: body.daily.data[0].summary,
            //     temperature: body.currently.temperature,
            //     precipProbability: body.currently.precipProbability
            // })

            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast