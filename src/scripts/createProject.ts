import { invoke } from "@tauri-apps/api/core";

const createForm = document.getElementById("createForm") as HTMLFormElement;

createForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const createFormData = new FormData(createForm);
    const name = createFormData.get("projectName") as string;
    const language = createFormData.get("language") as string;
    const dependencies = createFormData.get("projectDependencies") as string;
    const query = createFormData.get("customQuery") === "on";
    const subfolder = createFormData.get("subfolder") as string;

    await invoke( "get_creating_info", {
        name,
        language,
        dependencies,
        query,
        subfolder, 
    })
});