const el = (css) => document.querySelector(css);

el('#regeln').addEventListener('click',function(){
    el('#regeln-container').className = "regel-container-aktiv";
})

el('#close').addEventListener('click',function(){
    el('#regeln-container').className = "regel-container-passiv";
})