import db from "@/lib/db"

export default async function GET(tipo:string,data:string){
    let user;
    if(tipo==="Profile"){
        user = await db.user.findUnique({where:{userID:data}})
    }
    return user
}