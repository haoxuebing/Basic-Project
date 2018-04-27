
module.exports = function (router, service) {
    for (var prop in Object.getOwnPropertyDescriptors(service)) {
        if (prop.startsWith('get')) {
            router.get('/' + prop, service[prop]);
        } else if (prop.startsWith('post')) {
            router.post('/' + prop, service[prop]);
        } else {
            router.all('/' + prop, service[prop]);
        }
    }
}