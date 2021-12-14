const axios = require('axios')
test('Teste Posts', async function(){
  const response = await axios({
    url: 'http://localholst:3000/posts',
    method:'get'
  })

  const posts = response.data;
  
});