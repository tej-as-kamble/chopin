export const generateVerificationData = () => {
    const verificationId = `VER-${Math.floor(100000 + Math.random() * 900000)}`;
    const restId = `REST-${Math.floor(1000 + Math.random() * 9000)}`;

    return {
        verificationId,
        restId,
        status: "In Review",
        submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        lastUpdated: new Date().toISOString(),
        submitter: {
            name: "Rajesh Kumar",
            phone: "+91 9876543210",
            email: "rajesh.kumar@example.com"
        },
        entity: {
            id: "ENT-55425",
            type: "Restaurant",
            legalName: "Spice Route Hospitality Pvt Ltd",
            tradeName: "The Great Indian Biryani House",
            address: "Shop 4, Phoenix Market City, Viman Nagar, Pune, Maharashtra 411014",
            area: "Pune East - Zone 4",
            manager: "Amit Verma",
            contact: "+91 97871 67155"
        },
        documents: [
            { id: 1, type: "FSSAI License", filename: "fssai_cert_2024.pdf", url: "#", uploader: "Rajesh K.", date: "2023-10-25", hash: "a1b2c3d4", status: "Passed", preview: "Reg No: 11522036001234" },
            { id: 2, type: "GST Certificate", filename: "gst_reg_final.pdf", url: "#", uploader: "Rajesh K.", date: "2023-10-25", hash: "e5f6g7h8", status: "Passed", preview: "GSTIN: 27AABCS1234C1Z5" },
            { id: 3, type: "Bank Statement", filename: "hdfc_statement_oct.pdf", url: "#", uploader: "Rajesh K.", date: "2023-10-26", hash: "i9j0k1l2", status: "Failed", preview: "OCR Failed: Low resolution" },
            { id: 4, type: "Owner Pan Card", filename: "pan_card_front.jpg", url: "#", uploader: "Rajesh K.", date: "2023-10-25", hash: "m3n4o5p6", status: "Passed", preview: "ABCDE1234F" },
        ],
        checks: {
            score: 85,
            flags: ["Bank Statement resolution low", "Address match confidence: 92%"],
            lastRun: new Date().toISOString()
        },
        history: [
            { id: 1, action: "Submitted", actor: "Rajesh Kumar", timestamp: "2023-10-25T10:00:00Z", note: "Initial submission" },
            { id: 2, action: "Auto-Check", actor: "System", timestamp: "2023-10-25T10:05:00Z", note: "Score: 85/100" },
            { id: 3, action: "Field Change", actor: "Amit Verma (AM)", timestamp: "2023-10-26T09:30:00Z", note: "Updated Trade Name spelling" }
        ]
    };
};