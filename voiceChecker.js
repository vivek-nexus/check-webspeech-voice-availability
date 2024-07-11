// voiceChecker.js

/**
 * Checks if voices supporting a specific language code are available in the browser's speech synthesis interface.
 * @param {string} languageCode - The ISO 639-1 language code (e.g., "en", "fr", "es"). Defaults to "en" if omitted.
 * @returns {Promise<boolean>} A promise that resolves to true if voices for the specified language are available; otherwise, false. Also, returns false is WebSpeech API is not supported by the browser.
 */

export async function isAtLeastOneVoiceAvailable(languageCode) {
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

            // For browsers that load voices asynchronously
            if (synthesisInterface.onvoiceschanged !== undefined) {
                synthesisInterface.onvoiceschanged = () => {
                    const voices = synthesisInterface.getVoices()
                    for (const voice of voices) {
                        if (languageCode === voice.lang.slice(0, 2))
                            resolve(true)
                    }
                    reject(false)
                }
            }
            // Wait for onvoiceschanged to resolve/reject the promise, above
            // If not done within 1s, assume onvoiceschanged will not fire and shift to sync voice method
            // For browsers that load voices synchronously or that don't support onvoiceschanged
            setTimeout(() => {
                for (const voice of voices) {
                    if (languageCode === voice.lang.slice(0, 2))
                        resolve(true)
                }
                reject(false)
            }, 1000)
        }
        // WebSpeech API is not supported
        else
            reject(false)
    })
}
