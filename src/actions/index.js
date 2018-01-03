export function getTopLevelNavDetails(topLevelNav){
    console.log(topLevelNav)
    const topLevelNavResources = {
        "title":"Developer Resources",
        "data":{
            "nav":[
                {"title":"My Applications","url":"/tools"},
                {"title":"Business Units","url":"/#"},
                {"title":"Sub Business Units","url":"/#"},
                {"title":"Families","url":"/#"}
                ],
            "applications":[
                {"title":"Events","url":"/events"},
                {"title":"statistics","url":"/statistics"},
                {"title":"settings","url":"/settings"}    
                ]
            }
        }
    return{
        type:"TOPNAV_SELECTED",
        payload:topLevelNavResources
    }
}
