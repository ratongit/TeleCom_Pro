import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../ContextApi/AuthProniders"

const useDatabase = () => {

    const { } = useContext(AuthContext)

    const [service, setService] = useState([])
    const [alltasks, setAlltasks] = useState([])

    useEffect(() => {

        // All project 
        fetch('https://task-magement-server.vercel.app/alltask')
            .then(res => res.json())
            .then(data => setAlltasks(data))
    }, [])

    useEffect(() => {

        fetch('https://task-magement-server.vercel.app/allservice')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const Pending = alltasks.filter(alltasks => alltasks.status === 'to do')
    const Done = alltasks.filter(alltasks => alltasks.status === 'done')
    const Doing = alltasks.filter(alltasks => alltasks.status === 'doing')

    return {
        // project status filter data
        alltasks, Pending, Done, Doing,
        // serviceFind
        //  service filter data
        service};
}


export default useDatabase;


