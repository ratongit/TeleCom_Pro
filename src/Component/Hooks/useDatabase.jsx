import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../ContextApi/AuthProniders"

const useDatabase = () => {

    const { } = useContext(AuthContext)

    const [service, setService] = useState([])
    const [alltasks, setAlltasks] = useState([])

    useEffect(() => {

        // All project 
        fetch('http://localhost:5001/alltask')
            .then(res => res.json())
            .then(data => setAlltasks(data))
    }, [])

    useEffect(() => {

        fetch('http://localhost:5001/allservice')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])





    // useEffect(() => {

    //     fetch(`https://instrument-server.vercel.app/favorites/${data._id}`,
    //         {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {

    //                 refetch()
    //             }
    //         })

    // }, [])


    // useEffect(() => {
    //     if (user?.email) {
    //         fetch('https://instrument-server.vercel.app/create-payment-intent', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ price })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log("clientSecret is", data.clientSecret)
    //                 setClientSecret(data.clientSecret);
    //             })
    //     }
    // }, [price])



    // project status filter data

    const Pending = alltasks.filter(alltasks => alltasks.status === 'to do')
    const Done = alltasks.filter(alltasks => alltasks.status === 'done')
    const Doing = alltasks.filter(alltasks => alltasks.status === 'doing')

    //  service filter data
    // const webDesign = service.filter(allservice => allservice.category === 'Web Design')
    // const webDevelopment = service.filter(allservice => allservice.category === 'Website Development')
    // const ux = service.filter(allservice => allservice.category === 'Ux')
    // const digitalMarketing = service.filter(allservice => allservice.category === 'Digital Marketing')
    // const appDevelopment = service.filter(allservice => allservice.category === 'App Development')
    // const softwareDevelopment = service.filter(allservice => allservice.category === 'Software Development')
    // const dataAnalytics = service.filter(allservice => allservice.category === 'Data Analytics')
    // const contentWriting = service.filter(allservice => allservice.category === 'Content Writing')
    // const databaseManagement = service.filter(allservice => allservice.category === 'Database Management')
    // const design = service.filter(allservice => allservice.category === 'Design')



    return {
        // project status filter data
        alltasks, Pending, Done, Doing,
        // serviceFind
        //  service filter data
        service};
}


export default useDatabase;


