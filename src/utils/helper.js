export const getDifficultyColor = (difficulty = "") =>{
    switch(difficulty.toLowerCase()){
        case "easy" :
            return "bg-green-600 text-white";
        case "medium":
            return "bg-yellow-500 text-gray-800";
        case "hard" :
            return "bg-red-600 text-gray-200";
        default :
            return "bg-green-600 text-white";
    }
};

export const convertToBase64 = (file) =>{

   return  new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}