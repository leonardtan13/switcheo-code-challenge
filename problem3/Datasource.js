const fs = require('fs')
const https = require('https')

class Datasource {
    constructor(url) {
        this.url = url
    }
    getPrices() {
        return new Promise( (resolve, reject) => {
            try {
                const file = fs.createWriteStream('data.txt')
                https.get(this.url, response => {
                    const stream = response.pipe(file)
                    stream.on('finish', () => {
                        const data = JSON.parse(fs.readFileSync('data.txt').toString()).data
                        const prices = data.prices.map( price => {
                            console.log(price)
                            return new Price(
                                price.buy,
                                price.sell,
                                price.id,
                                price.pair,
                                price.timestamp
                            )
                        })
                        fs.unlinkSync('data.txt')
                        resolve(prices)
                    })
                })
            } catch (e) {
                reject(e)
            }
        })
    }
}

class Price {
    constructor(buy, sell, id, pair, timestamp) {
        this.buy = buy
        this.sell = sell
        this.id = id
        this.pair = pair
        this.timestamp = timestamp
    }

    mid() {
        return (this.buy + this.sell) / 200
    }

    quote() {
        return this.pair.slice(3)
    }
}


ds = new Datasource('https://static.ngnrs.io/test/prices')

ds.getPrices()
.then(prices => {
    prices.forEach(price => {
        console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`)
    });
}).catch(error => {
    console.error(error)
})
