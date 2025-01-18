import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:DOL8hto1dAVc@ep-lingering-glade-a8ieblb5.eastus2.azure.neon.tech/neondb?sslmode=requirez");

// const pgClient = new Client({
//     user: "neondb_owner",
//     password:"DOL8hto1dAVc@ep",
//     port:5432,
//     host:"@ep-lingering-glade-a8ieblb5.eastus2.azure.neon.tech",
//     database:"neondb",
//     ssl:"true",
// })

async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response.rows);
}

main();