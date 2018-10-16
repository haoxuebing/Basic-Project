
module.exports = function (router, service) {
    Object.keys(service).forEach(prop => {
        if (prop.startsWith('get')) {
            router.get('/' + prop, service[prop]);
        } else if (prop.startsWith('post')) {
            router.post('/' + prop, service[prop]);
        } else {
            router.all('/' + prop, service[prop]);
        }
    })
}