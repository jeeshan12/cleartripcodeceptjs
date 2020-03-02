const {
    I
} = inject()

Feature('Testing the api feature')
Scenario('Get Request', (I) => {
    I.sendGetRequest('/posts').then((result) => {
            return result.data
        }).then(data => {
            data.forEach(posts => {
                console.log(`Post with id ${posts.id} have title ${posts.title} and body ${posts.body}`);

            });
        })
        .catch((err) => {
            console.log('Error while reading the response :${this.err}')
        });
}).tag('@apiget').tag('@apitest')

Scenario('Testing post request', (I) => {
    I.sendPostRequest('/posts', {
        title: 'foo',
        body: 'bar',
        userId: 106
    }).then(response => {
        console.log(`Id created is ${response.data.id}`);

    }).catch(err => {
        console.log('Error while reading the response :${this.err}')
    })
}).tag('@apipost').tag('@apitest')

Scenario('Test put request', () => {
    I.sendPutRequest('/posts/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    }).then(response => {
        console.log(response.data);

    }).catch(err => {
        console.log('Error while reading the response :${this.err}')
    })
}).tag('@apiput').tag('@apitest')

Scenario('Test put request', () => {
    I.sendPatchRequest('/posts/1', {
        title: 'Patch reuqest modification',
    }).then(response => {
        console.log(response.data);

    }).catch(err => {
        console.log('Error while reading the response :${this.err}')
    })
}).tag('@apipatch').tag('@apitest')