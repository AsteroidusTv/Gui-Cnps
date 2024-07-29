#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod create_project;
use crate::create_project::create_project;
#[tauri::command]
fn get_creating_info(name: String, language: String, dependencies: String, query: bool, subfolder: String) -> String {
    let content = format!("{} {} {} {} {}", name, language, dependencies, query, subfolder);
    println!("{:?}", content);
    create_project();
    content
}
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![get_creating_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
