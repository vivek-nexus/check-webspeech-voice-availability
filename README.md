# voiceChecker.js
Checks if voices of specified langauge are available in the browser's speech synthesis interface (WebSpeech API).
- Takes a 2 character ISO 639-1 language code as input
- Returns true if at least one voice is available for the specified langauge
- Returns false if 0 voices are available for the specified lanaguge or if WebSpeech API is not supported by the browser.

<br />
<br />

<br />
<br />

# Usage instructions
## Load function from file
Download voiceChecker.js from https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js

### Vanilla JS
```` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Checker</title>
    <script type="module" src="URL_TO_YOUR_MODULE/voiceChecker.js"></script>
</head>
<body>
    <h1>Voice Checker</h1>
    <p>Open the console to see the results.</p>
    <script type="module">
        async function testVoiceChecker() {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await window.isLanguageVoiceSupported(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Error checking voice support:', error);
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
import React, { useEffect } from 'react';
import { isLanguageVoiceSupported } from '../voiceChecker'; // Adjust the path as per your file structure

function VoiceCheckerComponent() {
    useEffect(() => {
        const checkVoice = async () => {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await isLanguageVoiceSupported(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Error checking voice support:', error);
            }
        };

        checkVoice();
    }, []);

    return (
        <div>
            <h1>Voice Checker</h1>
            <p>Check console for results.</p>
        </div>
    );
}

export default VoiceCheckerComponent;
````

### Angular
Auto generated example
````ts
import { Component, OnInit } from '@angular/core';

declare global {
    interface Window {
        isLanguageVoiceSupported: any; // Declare the function globally
    }
}

@Component({
    selector: 'app-voice-checker',
    templateUrl: './voice-checker.component.html',
    styleUrls: ['./voice-checker.component.css']
})
export class VoiceCheckerComponent implements OnInit {

    async ngOnInit() {
        try {
            const languageCode = 'en'; // Example language code
            const isSupported = await (window as any).isLanguageVoiceSupported(languageCode);
            console.log(`Voices available for language '${languageCode}':`, isSupported);
        } catch (error) {
            console.error('Error checking voice support:', error);
        }
    }
}
````
### Vue
Auto generated example
````vue
<template>
    <div>
        <h1>Voice Checker</h1>
        <p>Check console for results.</p>
    </div>
</template>

<script>
export default {
    async created() {
        try {
            const languageCode = 'en'; // Example language code
            const isSupported = await window.isLanguageVoiceSupported(languageCode);
            console.log(`Voices available for language '${languageCode}':`, isSupported);
        } catch (error) {
            console.error('Error checking voice support:', error);
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>
````

---

## Load function from URL
### Vanilla JS
````js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Checker</title>
    <script type="module">
        import { isLanguageVoiceSupported } from 'https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js';

        async function testVoiceChecker() {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await isLanguageVoiceSupported(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Error checking voice support:', error);
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

### React
Auto generated example
````jsx
import React, { useEffect } from 'react';

const VoiceCheckerComponent = () => {
    useEffect(() => {
        const loadVoiceChecker = async () => {
            try {
                const { isLanguageVoiceSupported } = await import('https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js');

                const languageCode = 'en'; // Example language code
                const isSupported = await isLanguageVoiceSupported(languageCode);
                console.log(`Voices available for language '${languageCode}':`, isSupported);
            } catch (error) {
                console.error('Error loading or checking voice support:', error);
            }
        };

        loadVoiceChecker();
    }, []);

    return (
        <div>
            <h1>Voice Checker</h1>
            <p>Check console for results.</p>
        </div>
    );
};

export default VoiceCheckerComponent;
````

### Angular
Auto generated example
````ts
import { Component, OnInit } from '@angular/core';

declare global {
    interface Window {
        isLanguageVoiceSupported: any; // Declare the function globally
    }
}

@Component({
    selector: 'app-voice-checker',
    template: `
        <div>
            <h1>Voice Checker</h1>
            <p>Check console for results.</p>
        </div>
    `,
    styles: []
})
export class VoiceCheckerComponent implements OnInit {

    async ngOnInit() {
        try {
            const { isLanguageVoiceSupported } = await import('https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js');

            const languageCode = 'en'; // Example language code
            const isSupported = await (window as any).isLanguageVoiceSupported(languageCode);
            console.log(`Voices available for language '${languageCode}':`, isSupported);
        } catch (error) {
            console.error('Error loading or checking voice support:', error);
        }
    }
}
````

### Vue
Auto generated example
````vue
<template>
    <div>
        <h1>Voice Checker</h1>
        <p>Check console for results.</p>
    </div>
</template>

<script>
export default {
    async created() {
        try {
            const { isLanguageVoiceSupported } = await import('https://www.vivek.nexus/check-webspeech-voice-availability/voiceChecker.js');

            const languageCode = 'en'; // Example language code
            const isSupported = await window.isLanguageVoiceSupported(languageCode);
            console.log(`Voices available for language '${languageCode}':`, isSupported);
        } catch (error) {
            console.error('Error loading or checking voice support:', error);
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>
````
