function weather(o){
document.getElementById("weather").innerHTML="Weather "+o.query.results.channel.item.condition.temp+"&deg; F"
}