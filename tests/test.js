import axios from 'axios';

fixture `Test REST API`;

test('endpoint must return 200', async t => {
    
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    await t.expect(response.status).eql(200);
});

