import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Download, ZoomIn, ZoomOut, ExternalLink, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  pdfUrl = '/resume.pdf',
  fileName = 'Resume.pdf',
}: ResumeModalProps) {
  const [zoom, setZoom] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/uc?export=download&id=1ndij6skyJOFJlnAVBaoPz5-i6gVNqDbK';
    link.download = fileName;
    link.click();
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const openInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0">
        <DialogHeader className="px-6 py-4 border-b bg-white dark:bg-gray-800 mt-10">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">Resume</DialogTitle>

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

              {/* Action Buttons */}
              <Button
                variant="outline"
                size="sm"
                onClick={openInNewTab}
                disabled={pdfError}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Tab
              </Button>

              <Button
                onClick={handleDownload}
                disabled={pdfError}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>

              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {fileName} • Use zoom controls to adjust size • Click download to
            save
          </p>
        </DialogHeader>

        {/* PDF Content */}
        <div className="flex-1 overflow-hidden">
          {pdfError ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gray-50 dark:bg-gray-800">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 max-w-md">
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Resume PDF Not Found
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                  Please add your resume PDF file to the public folder as
                  &quot;resume.pdf&quot;
                </p>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-800/30 p-3 rounded border">
                  <strong>Instructions:</strong>
                  <br />
                  1. Place your PDF file in the <code>public/</code> folder
                  <br />
                  2. Name it <code>resume.pdf</code>
                  <br />
                  3. Refresh and try again
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full overflow-auto bg-gray-100 dark:bg-gray-900">
              <div className="flex justify-center p-4">
                <div className="bg-white shadow-lg">
                  <iframe
                    src={`${pdfUrl}`}
                    width="800"
                    height="600"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'top center',
                      minHeight: `${600 * zoom}px`,
                      width: `${800 * zoom}px`,
                    }}
                    className="border border-gray-300 dark:border-gray-600"
                    title="Resume PDF"
                    onError={() => setPdfError(true)}
                    onLoad={() => setPdfError(false)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Download Button */}
        <div className="md:hidden p-4 border-t bg-white dark:bg-gray-800">
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              disabled={pdfError}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              onClick={openInNewTab}
              disabled={pdfError}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in Tab
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
