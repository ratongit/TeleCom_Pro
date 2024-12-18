import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../ContextApi/AuthProniders"

const useDatabase = () => {

    const { } = useContext(AuthContext)
    const [alltasks, setAlltasks] = useState([])
    const [sites, setSites] = useState([])
    const [service, setService] = useState([])
    
    // New Code Start //
    const [allSiteInfo, setAllSiteInfo] = useState([])
    const [impactSite, setImpactSite] = useState([])



    // useEffect(() => {
    //     fetch('http://localhost:5000/sites')
    //         .then(res => res.json())
    //         .then(data => setSites(data))
    // }, [])

    // console.log(sites)


    // get all Site infomation //

    useEffect(() => {
        fetch('http://localhost:5000/allsiteinfo')
            .then(res => res.json())
            .then(data => {
                setAllSiteInfo(data)
            })
    }, [])

    
    
    
    
    // New Code end //
    
    
    // Fetch impact sites
    useEffect(() => {
        fetch('http://localhost:5000/impactsite')
        .then(res => res.json())
        .then(data => setImpactSite(data))
        .catch(err => console.error('Error fetching impact sites:', err));
    }, [])

// Fetch all tasks

    const Pending = alltasks.filter(alltasks => alltasks.status === 'to do')
    const Done = alltasks.filter(alltasks => alltasks.status === 'done')
    const Doing = alltasks.filter(alltasks => alltasks.status === 'doing')

    return {
        // project status filter data
        alltasks,
        Pending,
        Done,
        Doing,
        sites,
        impactSite,
        allSiteInfo,
        // serviceFind
        //  service filter data
        service
    };
}

export default useDatabase;


