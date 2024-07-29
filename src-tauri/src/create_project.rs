use std::fs;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct Parameters {
    project_folder_path: String,
    ide_choice: String,
    installed_languages: Vec<String>,
}

fn get_parameters(path: &str) -> Parameters {
    let file_data = fs::read_to_string(path).unwrap();
    let parameters: Parameters = serde_json::from_str(&file_data).unwrap();
    parameters
}


pub fn create_project() {
    let path = "../.cnps.conf.json";
    let parameters = get_parameters(path);

    println!("{:?}, {:?}, {:?}", parameters.ide_choice, parameters.installed_languages, parameters.project_folder_path);
}