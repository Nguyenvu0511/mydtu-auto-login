// --- FILE: background.js ---

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "solve_captcha") {
        
        // 1. Lấy API Key từ bộ nhớ
        chrome.storage.sync.get(['dtu_apiKey'], async (items) => {
            const apiKey = items.dtu_apiKey;

            if (!apiKey) {
                sendResponse({ error: "Chưa nhập API Key! Vào cài đặt nhập đi cậu." });
                return;
            }

            // 2. Gọi API
            try {
                const text = await callGeminiAPI(request.image, apiKey);
                sendResponse({ text: text });
            } catch (err) {
                sendResponse({ error: err.message });
            }
        });

        return true; // Giữ kết nối Async
    }
});

async function callGeminiAPI(base64Image, apiKey) {
    const MODEL_NAME = "gemini-flash-latest"; // Bản ổn định nhất
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [
                { text: "Read the text in this CAPTCHA. Return ONLY the characters (letters/numbers). No spaces." },
                { inline_data: { mime_type: "image/png", data: base64Image } }
            ]
        }]
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (data.error) throw new Error(data.error.message);
    
    if (data.candidates && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text.trim().replace(/\s/g, '').toUpperCase();
    } else {
        throw new Error("Không đọc được Captcha.");
    }
}