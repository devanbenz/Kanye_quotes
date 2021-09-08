
const getQuote = async (uri) => {
    try{
        const resp = await fetch(uri, {
            method:'GET',headers: {
            'Content-Type':'text/plain'
            }
        })
        const data = resp.text()
        return data
    }catch(e){
        console.error(e)
    }
} 


module.exports = { 
    getQuote
}
