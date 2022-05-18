import { welcomeService } from "../services/user";
  
export async function welcome (req, res) {
    return await welcomeService(req,res);
  }
  