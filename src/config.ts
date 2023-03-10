export interface Config {
  name: string; // Name of the image, used in brief, scoring, and etc.
  image_url: string; // Image for brief, and scoring report.
  auto_export_path: string; // For forensics, brief, and scoring report. This should be the Desktop
  auto_export: boolean; // If auto export is allowed or not, explination is above
  config_folder: string; // Path to config, aka parent for this file
  export_folder: string; // Path to export, ../export/
  engine_interval: number; // Repetition for engine scoring (dely for each run)
  auto_refresh: number; // Auto refresh time for the scoring report browser thing
  notif_icon_path: string; // Path to notification icon image, should start with file://
  competition_mode: string; // Competition mode, sounds what it sounds like, will enable teams n' stuff
  competition_url: string; // Competition url, pretty much the backend
}

const settings: Config = JSON.parse(
  new TextDecoder("utf-8").decode(Deno.readFileSync("config/config.json")),
);
export const {
  name,
  image_url,
  auto_export_path,
  auto_export,
  export_folder,
  config_folder,
  engine_interval,
  auto_refresh,
  notif_icon_path,
  competition_mode,
  competition_url,
} = settings;
