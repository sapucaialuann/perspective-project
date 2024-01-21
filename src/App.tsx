import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import { CarouselComponent } from "./components/carouselComponent/CarouselComponent";
import { Funnel } from "./types";
import { parseJsonFile } from "./services/fileUploadService";

function App() {
  const [funnel, setFunnel] = useState<Funnel | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const jsonData = await parseJsonFile(file);
        if (!jsonData || !jsonData.pages || jsonData.pages.length === 0) {
          throw new Error("Invalid JSON format: Missing pages.");
        }
        setFunnel(jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Error parsing or validating JSON. Please check the file.");
      }
    }
  };

  const handleUploadAnotherFile = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    setFunnel(null);
    if (fileInputRef.current?.files?.length) {
      handleFileChange({
        target: { files: fileInputRef.current.files },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [fileInputRef]);

  return (
    <div>
      {!funnel && (
        <>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button onClick={handleUploadAnotherFile}>Upload File</button>
        </>
      )}
      {funnel && (
        <>
          <CarouselComponent funnel={funnel} />
          <>
            <input
              type="file"
              accept=".json"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <button onClick={handleUploadAnotherFile}>
              Upload another File
            </button>
          </>
        </>
      )}
    </div>
  );
}

export default App;
