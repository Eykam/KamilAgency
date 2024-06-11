import { execSync } from "child_process";
import { readdirSync } from "fs";
import * as path from "path";

// Function to run shell commands
const runCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
    process.exit(1);
  }
};

// Authenticate GitHub CLI
runCommand(`echo ${process.env.GH_PAT} | gh auth login --with-token`);

// Directory containing JSON files
const configDir = path.join(__dirname, "../config");
const files = readdirSync(configDir);

files.forEach((file) => {
  const branchName = `update-${path.basename(file, ".json")}-${Date.now()}`;

  // Create a new branch
  runCommand(`git checkout -b ${branchName}`);

  // Stage the file
  runCommand(`git add config/${file}`);

  // Commit the changes
  runCommand(`git commit -m "Update ${file}"`);

  // Push the branch to the remote repository
  runCommand(`git push origin ${branchName}`);

  // Create a pull request
  runCommand(
    `gh pr create --title "Update ${file}" --body "This PR updates the content and metadata for ${file}." --base main --head ${branchName}`
  );
});
