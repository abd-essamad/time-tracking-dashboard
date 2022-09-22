const container = document.querySelector('.container-right')


const fetchData = async()=>{
    const response  = await fetch('data.json')
    const data = await response.json()
    console.log(data)
}
fetchData()



