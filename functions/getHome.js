import * as os from "os";
import * as fs from "fs";

export default function getHome(){
  const homeDir = os.homedir();
  let files = fs.readdirSync(homeDir, (err, stats) => {
    
  });

  return files
}