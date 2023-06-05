import {ID,storage}from"@/appwrite";

const uploadImage=async(file:File)=>{
    if(!file)return;


    const fileUploaded=await storage.createFile(
        "6472d6b78626a9267f7e",
        ID.unique(),
        file

    );
    return fileUploaded;
}
export default uploadImage;