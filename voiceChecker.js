// voiceChecker.js

/**
 * Checks if voices supporting a specific language code are available in the browser's speech synthesis interface.
 * @param {string} languageCode - The ISO 639-1 language code (e.g., "en", "fr", "es"). Defaults to "en" if omitted.
 * @returns {Promise<boolean>} A promise that resolves to true if voices for the specified language are available; otherwise, false. Also, returns false is WebSpeech API is not supported by the browser.
 */

async function isAtLeastOneVoiceAvailable(languageCode) {
    return new Promise((resolve, reject) => {
        let localLanguageCode

        // Defaults to "en" if languageCode parameter is omitted
        if (languageCode)
            localLanguageCode = languageCode
        else
            localLanguageCode = "en"

        if (window.speechSynthesis) {
            const synthesisInterface = window.speechSynthesis
            const voices = synthesisInterface.getVoices()

            // For browsers that load voices synchronously
            if (voices) {
                for (const voice of voices) {
                    if (languageCode === voice.lang.slice(0, 2))
                        resolve(true)
                }
                resolve(false)
            }
            // For browsers that load voices asynchronously
            else {
                if (synthesisInterface.onvoiceschanged !== undefined) {
                    synthesisInterface.onvoiceschanged = () => {
                        const voices = synthesisInterface.getVoices()
                        if (voices) {
                            for (const voice of voices) {
                                if (languageCode === voice.lang.slice(0, 2))
                                    resolve(true)
                            }
                            reject(false)
                        }
                    }
                }
                // Return false for unknown cases (cross browser implementation differs widely for WebSpeech API)
                reject(false)
            }
        }
        // WebSpeech API is not supported
        else
            reject(false)
    })
}
