import app from "./app.js";
import { connectDatabase } from "./utils/Dtabase.js";

connectDatabase();
app.listen(3333,() =>{
    console.log('Server running on port 3333');
});