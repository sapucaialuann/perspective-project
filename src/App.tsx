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
        setFunnel(jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
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
            <button onClick={handleUploadAnotherFile}>Upload File</button>
          </>
        </>
      )}
    </div>
  );
}

export default App;
