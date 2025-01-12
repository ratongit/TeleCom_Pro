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
    const [impactMPSite, setImpactMPSite] = useState([])



    // useEffect(() => {
    //     fetch('http://localhost:5000/sites')
    //         .then(res => res.json())
    //         .then(data => setSites(data))
    // }, [])

    // console.log(sites)


    // get all Site infomation //

    useEffect(() => {
        fetch("http://localhost:5000/allsiteinfo")
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch");
            return res.json();
          })
          .then(data => setAllSiteInfo(data))
          .catch(err => console.error("Error fetching all site info:", err));
      }, []);
      

    
    
    
    
    // New Code end //
    
    
    // Fetch impact sites
    useEffect(() => {
        fetch('http://localhost:5000/impactsite')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setImpactSite(data))
            .catch((err) => console.error('Error fetching impact sites:', err));
    }, []);
    
    // Fetch impactMPSite sites

    useEffect(() => {
        fetch('http://localhost:5000/impactMPSite')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setImpactMPSite(data))
            .catch((err) => console.error('Error fetching impact sites:', err));
    }, []);
    
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
        service,
        impactMPSite
        // serviceFind
        //  service filter data
    };
}

export default useDatabase;


