import { Configuration,OpenAIApi } from "openai";

const configuration=new Configuration( { 
    organization: "org-sXHhgobS8O3kwL3dOT1IZjrL",
       apiKey:process.env.OPENAI_API_KEY, });

const openai=new OpenAIApi(configuration);

export default openai;