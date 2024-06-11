import { OpenAI } from "openai";
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  statSync,
  existsSync,
  mkdirSync,
} from "fs";
import contentConfig from "./config/contentConfig.json";
import path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

const config = contentConfig;
const paths = config.contentPaths;
const relativeRootDir = config.relativeRootDir;

async function testWorkflow() {
  console.log("Getting Env Variables:", process.env.OPEN_AI_URL);
}

const checkAndWriteTemp = (fileName: string, data: string) => {
  const tempDirPath = path.resolve(__dirname, "temp");

  // Check if 'temp' directory exists
  if (!existsSync(tempDirPath)) {
    // Create 'temp' directory
    mkdirSync(tempDirPath);
    console.log(`Directory 'temp' created at ${tempDirPath}`);
  } else {
    console.log(`Directory exists!`);
  }

  // Write the file with the provided data to the 'temp' directory
  const filePath = path.join(tempDirPath, fileName);
  writeFileSync(filePath, data, "utf-8");
  console.log(`File '${fileName}' written with data to ${filePath}`);

  return filePath;
};

async function generateInfo(contentPath: string) {
  let fileContent = readFileSync(contentPath, "utf-8");

  fileContent = fileContent.replace(/@\/(.*)/gm, (match, g1) => {
    console.log("match", match);
    const replacement = "../site/" + g1;
    console.log("replacement", replacement);
    return replacement;
  });

  console.log(fileContent);

  const filename = path.basename(contentPath);
  const tempPath = checkAndWriteTemp(filename, fileContent);
  console.log("temppath", tempPath);

  //     const contentResponse = await client.completions.create({
  //         model: "text-davinci-003",
  //         prompt: `Update the content for the following sections: ${JSON.stringify(pageConfig.content)}`,
  //         max_tokens: 500,
  //     });

  //     const metadataResponse = await client.completions.create({
  //         model: "text-davinci-003",
  //         prompt: `Generate metadata (title, description, keywords) for the following content: ${JSON.stringify(pageConfig.content)}`,
  //         max_tokens: 100,
  //     });

  //     pageConfig.content = JSON.parse(contentResponse.data.choices[0].text.trim());
  //     pageConfig.metadata = JSON.parse(metadataResponse.data.choices[0].text.trim());

  //     writeFileSync(filePath, JSON.stringify(pageConfig, null, 2));

  //   console.log(contentFile);
}

async function traverseContentPaths(contentPath: string) {
  try {
    const stat = statSync(contentPath);
    if (stat.isFile()) {
      //For now assume all are .ts
      await generateInfo(contentPath);
    } else if (stat.isDirectory()) {
      const subPaths = readdirSync(contentPath);
      for (const subPath of subPaths) {
        const relativePath = path.resolve(
          __dirname,
          relativeRootDir,
          contentPath,
          subPath
        );
        await traverseContentPaths(relativePath);
      }
    } else {
      console.log(`${contentPath} is neither a file nor a directory`);
    }
  } catch (error: any) {
    console.error(`Error checking path: ${error.message}`);
  }
}

async function updateContent() {
  // const client = new OpenAI({baseURL:process.env.OPEN_AI_URL, apiKey: process.env.OPENAI_API_KEY})

  for (const contentPath of paths) {
    const relativePath = path.resolve(__dirname, relativeRootDir, contentPath);
    await traverseContentPaths(relativePath);
  }
}

updateContent().catch(console.error);

testWorkflow().catch(console.error);
