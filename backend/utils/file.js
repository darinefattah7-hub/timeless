import fs from "fs";

export const deleteFile = (filePath) => {
  if (!filePath) {
    console.warn("deleteFile: No file path provided.");
    return;
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      // File might not exist → fail silently
      if (err.code === "ENOENT") {
        console.warn(`deleteFile: File not found → ${filePath}`);
        return;
      }

      // Log other errors but don’t crash the app
      console.error(`deleteFile: Error deleting ${filePath}`, err);
      return;
    }

    console.log(`deleteFile: Successfully deleted → ${filePath}`);
  });
};
