export const handler =  async function() {
    return {
        statusCode:200,
        headers: {'Content-Type': 'texy/plain'},
        body: 'Hello World!!'
   
    }
}