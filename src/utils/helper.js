export const getDifficultyColor = (difficulty = "") =>{
    switch(difficulty.toLowerCase()){
        case "easy" :
            return "bg-green-600 text-white";
        case "medium":
            return "bg-yellow-500 text-gray-800";
        case "Hard" :
            return "bg-red-600 text-red-400";
        default :
            return "bg-green-600 text-white";
    }
};