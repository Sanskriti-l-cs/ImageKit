import Imagekit from 'imagekit'
import dotenv from 'dotenv'
dotenv.config();

console.log("URL:", process.env.IK_URL);
console.log("PUBLIC:", process.env.IK_PUBLIC_KEY);
console.log("PRIVATE length:", process.env.IK_PRIVATE_KEY?.length);

const storageInstance = new Imagekit({
    urlEndpoint: process.env.IK_URL,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY
})

export const sendFiles = async(file, fileName)=>{

    const obj = {
        file,
        fileName,
        folder: 'cohort-3'
    }

    return await storageInstance.upload(obj)
}