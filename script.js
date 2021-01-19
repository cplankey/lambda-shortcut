if (document.getElementById('openFunctionExtension')){
    document.getElementById('openFunctionExtension').remove()
}
if (window.location.href.indexOf('console.aws.amazon.com/cloudwatch/home') !== -1 && window.location.href.indexOf('log-groups/log-group/$252Faws$252Flambda$252F') !== -1){
    //in lambda logs
    let link = document.createElement("a");
    link.innerHTML = "Open Function"
    link.id = "openFunctionExtension"
    link.target ="_blank"
    link.style = "color:white; background:#ec7211; font-weight:bold"
    let str = window.location.href;
    let region = str.substr(str.indexOf('region=')+7, str.indexOf('#')-str.indexOf('region=')-7)
    let functionName = str.substr(str.indexOf('$252Faws$252Flambda$252F')+24);
    functionName.indexOf('/log-events/') !== -1 ? functionName = functionName.substr(0,functionName.indexOf('/log-events')): functionName = functionName;
    link.href = `https://console.aws.amazon.com/lambda/home?region=${region}#/functions/${functionName}?tab=configuration`
    document.getElementById('awsc-nav-header').appendChild(link)
} else{
    //nothing to see here
}