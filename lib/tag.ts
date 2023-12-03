const bgColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-cyan-500"
];

export default function GetTagColor(name:String){
    if(name == "other"){return "bg-grey-500"};
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += name.charCodeAt(i);
    };
    return bgColors[(sum % (bgColors.length -1))];
}