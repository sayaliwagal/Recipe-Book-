export async function fetchRecipes (){
    const url = `https://dummyjson.com/recipes`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
}