# voiceChecker.js
Checks if voices of specified langauge are available in the browser's speech synthesis interface (WebSpeech API).
- Takes a 2 character ISO 639-1 language code as input
- Returns true if at least one voice is available for the specified langauge
- Returns false if 0 voices are available for the specified lanaguge or if WebSpeech API is not supported by the browser.

<br />
<br />
<br />

# Usage instructions
## Load from file
Download voiceChecker.js from https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js

### Vanilla JS
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Checker</title>
    <script type="module" src="./voiceChecker.js"></script>
</head>
<body>
    <h1>Voice Checker</h1>
    <p>Open the console to see the results.</p>
    <script type="module">
        async function testVoiceChecker() {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await window.isAtLeastOneVoiceAvailable(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Voice availability', error);
            }
        }

        // Test the function
        testVoiceChecker();
    </script>
</body>
</html>
````

### React
````jsx
"use client"

import { useEffect } from 'react';
import { isAtLeastOneVoiceAvailable } from './voiceChecker'; // Adjust the path as per your file structure

function VoiceCheckerComponent() {
    useEffect(() => {
        // React runs effect twice when a component mounts, which causes issues with WebSpeech API events in the voiceChecker module. See https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
        // You can use a timeout as a workaround during development
        // In production, effects will run only once, so timeout is not needed
        const timeout = setTimeout(() => {
            isAtLeastOneVoiceAvailable("hi").then((isSupported) => {
                console.log(isSupported)
            }).catch((isSupported) => {
                console.log(isSupported)
            })
        }, 100)

        return (() => clearTimeout(timeout))
    }, [])

    return (
        <div>
            <h1>Voice Checker</h1>
            <p>Check console for results.</p>
        </div>
    );
}

export default VoiceCheckerComponent;
````

<br />
<br />


## Load from URL
````js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Checker</title>
    <script type="module">
        import { isAtLeastOneVoiceAvailable } from 'https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js';

        async function testVoiceChecker() {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await isAtLeastOneVoiceAvailable(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Voice availability:', error);
            }
        }

        // Test the function
        testVoiceChecker();
    </script>
</head>
<body>
    <h1>Voice Checker</h1>
    <p>Open the console to see the results.</p>
</body>
</html>
````
