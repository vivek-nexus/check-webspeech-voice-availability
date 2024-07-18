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
</head>

<body>
    <h1>Voice Checker</h1>
    <p>Open the console to see the results.</p>
    <script type="module">
        import { isAtLeastOneVoiceAvailable } from "./voiceChecker.js"
        async function testVoiceChecker() {
            try {
                const languageCode = 'en'; // Example language code
                const isSupported = await isAtLeastOneVoiceAvailable(languageCode);
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
// Client side component

import { useEffect } from 'react';
import { isAtLeastOneVoiceAvailable } from './voiceChecker'; // Adjust the path as per your file structure

function VoiceCheckerComponent() {
    useEffect(() => {
        // React runs effect twice when a component mounts, which causes issues with WebSpeech API events in the voiceChecker module. See https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
        // You can use a timeout as a workaround during development
        // In production, effects will run only once, so timeout is not needed
        const timeout = setTimeout(() => {
            isAtLeastOneVoiceAvailable("en").then((isSupported) => {
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
````html
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
<br />
<br />
<br />

## Indicative voice availability of different languages
Indicative availability of various voices in WebSpeech API in different operating systems (2024). Actual availability can be widely different based on the geographical location of the device.

> **Voices with greater than 90% availability: German, English (GB), English (US), Spanish, French, Italian, Russian**

| Language code | Langauge name                 | Voice language | Android availability | Chromium OS availability | iOS availability | Linux availability | Mac OS availability | Windows availability | Total availability |
| ------------- | ----------------------------- | -------------- | -------------------- | ------------------------ | ---------------- | ------------------ | ------------------- | -------------------- | ------------------ |
| af            | Afrikaans                     | af-ZA          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| am            | Amharic                       | am-ET          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| ar            | Arabic                        | ar             | 0.08%                | 100.00%                  |                  |                    | 2.82%               |                      | 0.09%              |
| ar            | Arabic                        | ar-001         | 0.10%                |                          | 90.52%           |                    | 70.42%              |                      | 13.49%             |
| ar            | Arabic                        | ar-AE          | 0.25%                |                          |                  |                    |                     | 5.05%                | 0.30%              |
| ar            | Arabic                        | ar-BH          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-DZ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-EG          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| ar            | Arabic                        | ar-IQ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-JO          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-KW          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-LB          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-LY          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-MA          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-OM          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-QA          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-SA          | 0.06%                |                          | 9.24%            |                    | 25.35%              | 6.42%                | 1.65%              |
| ar            | Arabic                        | ar-SY          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-TN          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ar            | Arabic                        | ar-YE          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| as            | Assamese                      | as-IN          | 38.10%               |                          |                  | 13.95%             |                     |                      | 31.67%             |
| az            | Azerbaijani                   | az-AZ          |                      |                          |                  |                    |                     | 5.05%                | 0.09%              |
| bg            | Bulgarian                     | bg             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| bg            | Bulgarian                     | bg-BG          | 52.66%               | 100.00%                  | 90.52%           | 20.93%             | 70.42%              | 6.42%                | 57.24%             |
| bn            | Bengali                       | bn             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| bn            | Bengali                       | bn-BD          | 53.77%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.82%             |
| bn            | Bengali                       | bn-IN          | 53.74%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.79%             |
| br            | Breton                        | brx-IN         | 38.10%               |                          |                  | 13.95%             |                     |                      | 31.67%             |
| bs            | Bosnian                       | bs-BA          | 0.08%                |                          |                  |                    |                     | 5.05%                | 0.16%              |
| bs            | Bosnian                       | bs             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| bs            | Bosnian                       | bs-BA-#Cyrl    | 51.26%               |                          |                  | 20.93%             |                     |                      | 42.62%             |
| bs            | Bosnian                       | bs-BA-#Latn    | 51.26%               |                          |                  | 20.93%             |                     |                      | 42.62%             |
| ca            | Catalan, Valencian            | ca             | 0.01%                | 100.00%                  |                  |                    |                     |                      | 0.02%              |
| ca            | Catalan, Valencian            | ca-ES          | 49.48%               |                          | 90.52%           | 16.28%             | 70.42%              | 6.42%                | 54.59%             |
| cm            | Unknown                       | cmn            |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| cs            | Czech                         | cs             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| cs            | Czech                         | cs-CZ          | 53.74%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.62%             |
| cy            | Welsh                         | cy             | 0.01%                | 100.00%                  |                  |                    |                     |                      | 0.02%              |
| cy            | Welsh                         | cy-GB          | 49.47%               |                          |                  | 16.28%             |                     | 6.42%                | 41.24%             |
| da            | Danish                        | da             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| da            | Danish                        | da-DK          | 53.77%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.65%             |
| de            | German                        | de-AT          | 0.06%                |                          |                  |                    |                     | 7.34%                | 0.19%              |
| de            | German                        | de-CH          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| de            | German                        | de             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| **de**        | **German**                    | **de-DE**      | **94.07%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **85.78%**           | **94.70%**         |
| do            | Unknown                       | doi-IN         | 23.23%               |                          |                  | 9.30%              |                     |                      | 19.32%             |
| el            | Greek, Modern (1453–)         | el             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| el            | Greek, Modern (1453–)         | el-GR          | 53.74%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.62%             |
| en            | English                       | en-CA          | 0.06%                |                          |                  |                    |                     | 9.17%                | 0.22%              |
| en            | English                       | en-HK          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| en            | English                       | en-IE          | 0.06%                |                          | 99.76%           |                    | 98.59%              | 6.42%                | 15.07%             |
| en            | English                       | en-KE          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| en            | English                       | en-NZ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| en            | English                       | en-PH          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| en            | English                       | en-SG          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| en            | English                       | en-TZ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| en            | English                       | en-ZA          | 0.06%                |                          | 99.76%           |                    | 95.77%              | 6.42%                | 15.05%             |
| en            | English                       | en-AU          | 53.76%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 9.63%                | 59.70%             |
| **en**        | **English**                   | **en-GB**      | **94.34%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **86.70%**           | **94.94%**         |
| en            | English                       | en-IN          | 54.19%               | 100.00%                  | 98.69%           | 20.93%             | 95.77%              | 8.72%                | 59.87%             |
| en            | English                       | en-NG          | 53.56%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.64%             |
| en            | English                       | en-scotland    |                      |                          |                  |                    | 12.68%              |                      | 0.08%              |
| **en**        | **English**                   | **en-US**      | **98.10%**           | **100.00%**              | **100.00%**      | **95.35%**         | **98.59%**          | **98.17%**           | **98.26%**         |
| es            | Spanish, Castilian            | es-419         | 0.06%                |                          |                  |                    | 2.82%               |                      | 0.07%              |
| es            | Spanish, Castilian            | es-AR          | 0.06%                |                          |                  |                    | 12.68%              | 6.42%                | 0.25%              |
| es            | Spanish, Castilian            | es-BO          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-CL          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-CO          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| es            | Spanish, Castilian            | es-CR          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-CU          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-DO          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-EC          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-GQ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-GT          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-HN          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-NI          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-PA          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-PE          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-PR          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-PY          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-SV          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-UY          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es-VE          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| es            | Spanish, Castilian            | es             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| **es**        | **Spanish, Castilian**        | **es-ES**      | **94.03%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **85.78%**           | **94.67%**         |
| es            | Spanish, Castilian            | es-MX          | 15.55%               |                          | 99.76%           | 32.56%             | 95.77%              | 8.72%                | 28.04%             |
| es            | Spanish, Castilian            | es-US          | 55.31%               | 100.00%                  | 0.24%            | 46.51%             | 15.49%              | 82.57%               | 47.73%             |
| et            | Estonian                      | et             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| et            | Estonian                      | et-EE          | 53.62%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.71%             |
| fa            | Persian                       | fa-IR          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| fa            | Persian                       | fa             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| fi            | Finnish                       | fi             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| fi            | Finnish                       | fi-FI          | 53.70%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.59%             |
| fi            | Finnish                       | fil-PH         | 53.62%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.69%             |
| fr            | French                        | fr-BE          | 0.15%                |                          |                  |                    |                     | 6.42%                | 0.25%              |
| fr            | French                        | fr-CH          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| fr            | French                        | fr-CA          | 53.62%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 8.72%                | 59.56%             |
| **fr**        | **French**                    | **fr-FR**      | **94.01%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **85.78%**           | **94.65%**         |
| ga            | Irish                         | ga-IE          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| gl            | Galician                      | gl-ES          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| gu            | Gujarati                      | gu             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| gu            | Gujarati                      | gu-IN          | 53.42%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.54%             |
| he            | Hebrew                        | he-IL          |                      |                          | 99.76%           |                    | 98.59%              | 6.42%                | 15.02%             |
| hi            | Hindi                         | hi-IN          | 55.43%               | 100.00%                  | 100.00%          | 46.51%             | 98.59%              | 83.94%               | 62.57%             |
| hi            | Hindi                         | hi-IN-#Latn    | 5.95%                |                          |                  | 4.65%              |                     |                      | 4.96%              |
| hr            | Croatian                      | hr             | 0.01%                | 100.00%                  |                  |                    |                     |                      | 0.02%              |
| hr            | Croatian                      | hr-HR          | 49.68%               |                          | 90.52%           | 16.28%             | 70.42%              | 6.42%                | 54.75%             |
| hu            | Hungarian                     | hu             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| hu            | Hungarian                     | hu-HU          | 53.67%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.56%             |
| id            | Indonesian                    | id-ID          | 0.06%                |                          | 100.00%          | 23.26%             | 97.18%              | 83.94%               | 16.61%             |
| id            | Indonesian                    | id             |                      | 100.00%                  |                  |                    | 2.82%               |                      | 0.03%              |
| in            | Unknown                       | in-ID          | 53.85%               | 100.00%                  |                  | 20.93%             |                     |                      | 44.78%             |
| is            | Icelandic                     | is-IS          | 49.81%               |                          |                  | 16.28%             |                     | 5.50%                | 41.51%             |
| it            | Italian                       | it             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| **it**        | **Italian**                   | **it-IT**      | **93.99%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **95.41%**           | **94.80%**         |
| iw            | Unknown                       | iw-IL          | 50.35%               |                          |                  | 16.28%             |                     |                      | 41.85%             |
| ja            | Japanese                      | ja-JP          | 53.82%               | 100.00%                  | 100.00%          | 46.51%             | 98.59%              | 85.78%               | 61.27%             |
| jv            | Javanese                      | jv-ID          | 50.91%               | 100.00%                  |                  | 18.60%             |                     | 5.50%                | 42.43%             |
| jv            | Javanese                      | jv-ID-#Latn    | 3.24%                |                          |                  | 2.33%              |                     |                      | 2.70%              |
| ka            | Georgian                      | ka-GE          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| kk            | Kazakh                        | kk-KZ          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| km            | Central Khmer                 | km-KH          | 53.63%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.70%             |
| kn            | Kannada                       | kn             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| kn            | Kannada                       | kn-IN          | 53.42%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.53%             |
| ko            | Korean                        | ko             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| ko            | Korean                        | ko-KR          | 53.87%               | 100.00%                  | 100.00%          | 44.19%             | 98.59%              | 85.78%               | 61.30%             |
| ko            | Korean                        | kok-IN         | 38.04%               |                          |                  | 13.95%             |                     |                      | 31.62%             |
| ks            | Kashmiri                      | ks-IN          | 15.12%               |                          |                  | 4.65%              |                     |                      | 12.56%             |
| ks            | Kashmiri                      | ks-IN-#Arab    | 22.99%               |                          |                  | 9.30%              |                     |                      | 19.12%             |
| ks            | Kashmiri                      | ks-IN-#Deva    | 4.06%                |                          |                  | 2.33%              |                     |                      | 3.38%              |
| ku            | Kurdish                       | ku             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| la            | Latin                         | la             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| lo            | Lao                           | lo-LA          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| lt            | Lithuanian                    | lt             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| lt            | Lithuanian                    | lt-LT          | 49.81%               |                          |                  | 16.28%             |                     | 6.42%                | 41.52%             |
| lv            | Latvian                       | lv             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| lv            | Latvian                       | lv-LV          | 52.55%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 43.82%             |
| ma            | Unknown                       | mai-IN         | 27.85%               |                          |                  | 11.63%             |                     |                      | 23.16%             |
| ma            | Unknown                       | mai-IN-#Deva   | 6.50%                |                          |                  | 4.65%              |                     |                      | 5.41%              |
| mk            | Macedonian                    | mk-MK          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| ml            | Malayalam                     | ml             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| ml            | Malayalam                     | ml-IN          | 53.41%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.52%             |
| mn            | Mongolian                     | mn-MN          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| mn            | Mongolian                     | mni-IN-#Beng   | 22.99%               |                          |                  | 9.30%              |                     |                      | 19.12%             |
| mr            | Marathi                       | mr             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| mr            | Marathi                       | mr-IN          | 53.41%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.54%             |
| ms            | Malay                         | ms             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| ms            | Malay                         | ms-MY          | 52.67%               | 100.00%                  | 90.52%           | 20.93%             | 70.42%              | 6.42%                | 57.25%             |
| mt            | Maltese                       | mt-MT          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| my            | Burmese                       | my-MM          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| nb            | Norwegian Bokmål              | nb             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| nb            | Norwegian Bokmål              | nb-NO          | 53.66%               | 100.00%                  | 90.52%           | 20.93%             | 85.92%              | 6.42%                | 58.17%             |
| ne            | Nepali                        | ne-NP          | 53.62%               | 100.00%                  |                  | 20.93%             |                     | 5.05%                | 44.68%             |
| nl            | Dutch, Flemish                | nl-BE          | 52.54%               | 100.00%                  | 99.64%           | 20.93%             | 98.59%              | 6.42%                | 58.61%             |
| nl            | Dutch, Flemish                | nl-NL          | 53.71%               | 100.00%                  | 100.00%          | 44.19%             | 98.59%              | 85.78%               | 61.17%             |
| no            | Norwegian                     | no-NO          |                      |                          | 9.24%            |                    | 12.68%              |                      | 1.40%              |
| or            | Oriya                         | or-IN          | 38.04%               |                          |                  | 13.95%             |                     |                      | 31.62%             |
| pa            | Punjabi, Panjabi              | pa-IN          | 0.08%                | 100.00%                  |                  |                    |                     |                      | 0.08%              |
| pa            | Punjabi, Panjabi              | pa-IN-#Guru    | 52.45%               |                          |                  | 20.93%             |                     |                      | 43.61%             |
| pl            | Polish                        | pl             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| pl            | Polish                        | pl-PL          | 55.40%               | 100.00%                  | 100.00%          | 46.51%             | 98.59%              | 85.78%               | 62.58%             |
| ps            | Pashto, Pushto                | ps-AF          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| pt            | Portuguese                    | pt-BR          | 68.95%               | 100.00%                  | 100.00%          | 76.74%             | 98.59%              | 85.78%               | 73.91%             |
| pt            | Portuguese                    | pt-PT          | 53.63%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.53%             |
| ro            | Romanian, Moldavian, Moldovan | ro             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| ro            | Romanian, Moldavian, Moldovan | ro-RO          | 53.58%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.49%             |
| ru            | Russian                       | ru             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| **ru**        | **Russian**                   | **ru-RU**      | **94.17%**           | **100.00%**              | **100.00%**      | **93.02%**         | **98.59%**          | **86.24%**           | **94.80%**         |
| sa            | Sanskrit                      | sa-IN          | 23.23%               |                          |                  | 9.30%              |                     |                      | 19.32%             |
| sa            | Sanskrit                      | sat-IN-#Olck   | 22.99%               |                          |                  | 9.30%              |                     |                      | 19.12%             |
| sd            | Sindhi                        | sd-IN-#Deva    | 22.99%               |                          |                  | 9.30%              |                     |                      | 19.12%             |
| si            | Sinhala, Sinhalese            | si-LK          | 53.60%               | 100.00%                  |                  | 20.93%             |                     | 5.50%                | 44.67%             |
| sk            | Slovak                        | sk             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| sk            | Slovak                        | sk-SK          | 53.57%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.48%             |
| sl            | Slovenian                     | sl-SI          | 0.06%                |                          |                  |                    |                     | 6.42%                | 0.17%              |
| sl            | Slovenian                     | sl             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| so            | Somali                        | so-SO          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
| sq            | Albanian                      | sq             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| sq            | Albanian                      | sq-AL          | 51.22%               |                          |                  | 20.93%             |                     | 5.05%                | 42.68%             |
| sr            | Serbian                       | sr             | 0.08%                | 100.00%                  |                  |                    |                     |                      | 0.08%              |
| sr            | Serbian                       | sr-RS          |                      |                          |                  |                    |                     | 5.50%                | 0.10%              |
| su            | Sundanese                     | su-ID          | 0.09%                | 100.00%                  |                  |                    |                     | 5.50%                | 0.19%              |
| su            | Sundanese                     | su-ID-#Latn    | 29.85%               |                          |                  | 9.30%              |                     |                      | 24.81%             |
| sv            | Swedish                       | sv             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| sv            | Swedish                       | sv-SE          | 53.63%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 6.42%                | 59.53%             |
| sw            | Swahili                       | sw-TZ          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| sw            | Swahili                       | sw             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| sw            | Swahili                       | sw-KE          | 51.22%               |                          |                  | 20.93%             |                     | 6.42%                | 42.70%             |
| ta            | Tamil                         | ta-LK          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ta            | Tamil                         | ta-MY          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ta            | Tamil                         | ta-SG          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ta            | Tamil                         | ta             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| ta            | Tamil                         | ta-IN          | 53.39%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.52%             |
| te            | Telugu                        | te             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| te            | Telugu                        | te-IN          | 53.39%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.52%             |
| th            | Thai                          | th-TH          | 54.90%               | 100.00%                  | 99.76%           | 23.26%             | 98.59%              | 6.42%                | 60.58%             |
| tr            | Turkish                       | tr             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| tr            | Turkish                       | tr-TR          | 53.65%               | 100.00%                  | 99.76%           | 20.93%             | 98.59%              | 8.72%                | 59.59%             |
| uk            | Ukrainian                     | uk-UA          | 53.60%               | 100.00%                  | 90.52%           | 20.93%             | 70.42%              | 6.42%                | 58.02%             |
| ur            | Urdu                          | ur-IN          | 0.06%                |                          |                  |                    |                     | 5.05%                | 0.15%              |
| ur            | Urdu                          | ur-PK          | 53.39%               | 100.00%                  |                  | 20.93%             |                     | 6.42%                | 44.52%             |
| uz            | Uzbek                         | uz-UZ          |                      |                          |                  |                    |                     | 5.50%                | 0.10%              |
| vi            | Vietnamese                    | vi             |                      | 100.00%                  |                  |                    |                     |                      | 0.01%              |
| vi            | Vietnamese                    | vi-VN          | 55.62%               | 100.00%                  | 90.52%           | 23.26%             | 70.42%              | 6.42%                | 59.70%             |
| yu            | Unknown                       | yue-HK         | 1.31%                | 100.00%                  |                  | 2.33%              |                     |                      | 1.10%              |
| yu            | Unknown                       | yue-HK-#Hant   | 51.79%               |                          |                  | 18.60%             |                     |                      | 43.06%             |
| zh            | Chinese                       | zh-CN          | 0.16%                | 100.00%                  | 100.00%          | 23.26%             | 97.18%              | 85.78%               | 16.74%             |
| zh            | Chinese                       | zh-HK          | 0.06%                |                          | 100.00%          | 23.26%             | 97.18%              | 85.78%               | 16.65%             |
| zh            | Chinese                       | zh-TW          | 0.14%                | 100.00%                  | 100.00%          | 23.26%             | 97.18%              | 85.78%               | 16.72%             |
| zh            | Chinese                       | zh-CN-#Hans    | 54.02%               |                          |                  | 37.21%             |                     |                      | 44.97%             |
| zh            | Chinese                       | zh-CN-liaoning |                      |                          |                  |                    |                     | 5.05%                | 0.09%              |
| zh            | Chinese                       | zh-CN-shaanxi  |                      |                          |                  |                    |                     | 5.05%                | 0.09%              |
| zh            | Chinese                       | zh-Hans        |                      |                          |                  |                    | 2.82%               |                      | 0.02%              |
| zh            | Chinese                       | zh-Hant        |                      |                          |                  |                    | 2.82%               |                      | 0.02%              |
| zh            | Chinese                       | zh-HK-#Hans    | 53.38%               |                          |                  | 37.21%             |                     |                      | 44.44%             |
| zh            | Chinese                       | zh-HK-#Hant    | 53.38%               |                          |                  | 37.21%             |                     |                      | 44.44%             |
| zh            | Chinese                       | zh-MO-#Hans    | 49.60%               |                          |                  | 16.28%             |                     |                      | 41.22%             |
| zh            | Chinese                       | zh-MO-#Hant    | 49.60%               |                          |                  | 16.28%             |                     |                      | 41.22%             |
| zh            | Chinese                       | zh-SG-#Hans    | 49.60%               |                          |                  | 16.28%             |                     |                      | 41.22%             |
| zh            | Chinese                       | zh-TW-#Hant    | 54.12%               |                          |                  | 37.21%             |                     |                      | 45.06%             |
| zu            | Zulu                          | zu-ZA          | 0.06%                |                          |                  |                    |                     | 5.50%                | 0.15%              |
