const {networkInterfaces} =  require('os') 
 

const getIpAdress = () => {
    const nets = networkInterfaces()

    for (let name of Object.keys(nets)) {
        for (let net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return 'http://' + net.address
            } else if (net.family === 'IPv4' && net.internal) {
                return 'http://' + net.address
            }
        }
    }
}



module.exports = getIpAdress