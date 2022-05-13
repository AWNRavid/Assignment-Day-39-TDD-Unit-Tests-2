function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = new Date().getDate();
var day = getDayName(dateStr, "id-ID");
console.log(day);
console.log(dateStr);

const isLeap = new Date(2022, 1, 29).getMonth() == 1
console.log(isLeap);