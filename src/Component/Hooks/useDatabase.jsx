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

    useEffect(() => {
        fetch("http://localhost:5000/allsiteinfo")
          .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch");
            return res.json();
          })
          .then(data => setAllSiteInfo(data))
          .catch(err => console.error("Error fetching all site info:", err));
      }, []);
      

    
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
    


    // Match Impact Site (Match with impactSite & allSiteInfo )

  if (!impactSite || !allSiteInfo) return;
    const impactSiteCodes = Array.from(new Set(
        impactSite.flatMap(input => [input.siteDown.toUpperCase(), input.dcLow.toUpperCase()]).filter(code => code !== '')));

    const MatchImpactSites = allSiteInfo.filter(site => impactSiteCodes.includes(site.siteCode.toUpperCase())) // Match ImpactSite
    
    // console.log(MatchImpactSites);

    const Jri = MatchImpactSites.filter(Sites => Sites.maintenacePointName === "Juri")
    const Mb = MatchImpactSites.filter(Sites => Sites.maintenacePointName === "MB")
    const Bnc = MatchImpactSites.filter(Sites => Sites.maintenacePointName  === "BNC")
    const Hg = MatchImpactSites.filter(Sites => Sites.maintenacePointName  === "HG")

// Fetch all tasks
    // console.log(MatchImpactSites);
    // console.log(Mb,Bnc,Hg,Jri);
    
    
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
        impactMPSite,
        
        // for used map 
        MatchImpactSites,
        Mb,Bnc,Hg,Jri
        // serviceFind
        //  service filter data
    };
}

export default useDatabase;
