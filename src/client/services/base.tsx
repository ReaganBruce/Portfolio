import axios from "axios"


const fetchProjects = async () => {
    const { data } = await axios.get('/api/projects')
    return data 
}

export { fetchProjects }