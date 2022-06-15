import child from "child_process";

export async function audit(options?: AuditOptions) {
  const path = options?.directory || ".";
  const result = await execScript(`yarn audit --cwd ${path} --json`);
}

async function execScript(scriptPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const task = child.exec(scriptPath);
    task.stdout?.on("data", (data: string) => {
      console.log("LINE\n");
      console.log(data);
    });
    task.on("exit", resolve);
    task.on("disconnect", reject);
    task.on("error", reject);
  });
}

export interface AuditOptions {
  directory?: string;
  configFilePath?: string;
}
