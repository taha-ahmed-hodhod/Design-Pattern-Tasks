interface DocumentViewer {
    view(filename: string): void;
}

class PDFViewer {
    viewPDF(filename: string): void {
        console.log(`Viewing PDF document: ${filename}`);
    }
}

class WordViewer {
    viewDOCX(filename: string): void {
        console.log(`Viewing Word document: ${filename}`);
    }
}

class DocumentAdapter implements DocumentViewer {
    private pdfViewer = new PDFViewer();
    private wordViewer = new WordViewer();

    view(filename: string): void {
        if (filename.endsWith(".pdf")) {
            this.pdfViewer.viewPDF(filename);
        } else if (filename.endsWith(".docx")) {
            this.wordViewer.viewDOCX(filename);
        }
    }
}

// Test
const viewer = new DocumentAdapter();
viewer.view("report.pdf");
viewer.view("resume.docx");