import { useState } from "react";
import { Download, ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface PDFViewerProps {
  pdfUrl: string;
  fileName?: string;
}

export default function PDFViewer({ pdfUrl, fileName = "Resume.pdf" }: PDFViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                Resume
              </h1>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1 mr-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[4rem] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleZoomIn}
                  disabled={zoom >= 2}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>

              {/* Download Button */}
              <Button
                onClick={handleDownload}
                disabled={pdfError}
                className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="max-w-5xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {fileName} • Use zoom controls to adjust size • Click download to save
            </p>
          </div>
          
          {/* PDF Container */}
          <div className="overflow-auto" style={{ height: 'calc(100vh - 200px)' }}>
            {pdfError ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 max-w-md">
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Resume PDF Not Found
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                    Please add your resume PDF file to the public folder as &quot;resume.pdf&quot;
                  </p>
                  <div className="text-xs text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-800/30 p-3 rounded border">
                    <strong>Instructions:</strong><br />
                    1. Place your PDF file in the <code>public/</code> folder<br />
                    2. Name it <code>resume.pdf</code><br />
                    3. Refresh this page
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center p-4">
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="800"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top center',
                    minHeight: `${800 * zoom}px`
                  }}
                  className="border border-gray-300 dark:border-gray-600 rounded shadow-lg"
                  title="Resume PDF"
                  onError={() => setPdfError(true)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Download Button */}
        <div className="mt-6 flex justify-center md:hidden">
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full max-w-sm"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume PDF
          </Button>
        </div>
      </main>
    </div>
  );
}
