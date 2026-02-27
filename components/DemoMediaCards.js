// /components/DemoMediaCards.js

import { useState } from 'react';

export default function DemoMediaCards({ locked }) {
return (
<div style={{
display: 'grid',
gridTemplateColumns: '1fr 1fr 1fr',
gap: 30,
margin: '30px 0'
}}>
<TextGenCard locked={locked} />
<ImageGenCard locked={locked} />
<AudioGenCard locked={locked} />
</div>
);
}

// TEXT GENERATOR
function TextGenCard({ locked }) {
const [input, setInput] = useState('');
const [output, setOutput] = useState('');
const [loading, setLoading] = useState(false);

async function handleGenerate() {
setLoading(true);
setOutput('');
try {
// HuggingFace free inference endpoint: bigscience/bloomz-560m (text generation)
const data = await fetch('https://api-inference.huggingface.co/models/bigscience/bloomz-560m', {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ inputs: input })
}).then(r => r.json());
setOutput(data[0]?.generated_text || 'Sorry, something went wrong.');
} catch (err) {
setOutput('Error generating!');
}
setLoading(false);
}

return (
<Card
title="Generate Text"
description="Blog posts, ideas, code, poetry—instantly"
icon="📝"
locked={locked}
>
<textarea
style={{ width: '94%', height: 58, resize: 'none', borderRadius: 5, border: '1px solid #444', padding: 7, margin: '7px 0 4px 0', background: '#0f1020', color: "#fff", fontSize: 16 }}
placeholder="Prompt: Write a headline about AI art..."
disabled={locked}
value={input}
onChange={e => setInput(e.target.value)}
/>
<button
disabled={locked || loading || !input}
onClick={handleGenerate}
style={{
width: '100%',
marginTop: 4,
padding: '10px 0',
fontSize: 15,
borderRadius: 6,
background: locked ? "#444" : "#41ffe5", color: "#222",
border: 'none', cursor: locked ? undefined : "pointer",
opacity: loading ? 0.6 : 1
}}
>{loading ? "Thinking..." : "Generate"}</button>
<div style={{ minHeight: 40, color: "#bafcfb", marginTop: 11, whiteSpace: "pre-wrap", fontSize: 15, fontFamily: "inherit", opacity: locked ? 0.5 : 1 }}>
{output && <>{output}</>}
</div>
{locked && <CardLockOverlay />}
</Card>
);
}

// IMAGE GENERATOR
function ImageGenCard({ locked }) {
const [input, setInput] = useState('');
const [output, setOutput] = useState('');
const [imgUrl, setImgUrl] = useState('');
const [loading, setLoading] = useState(false);

async function handleGenerate() {
setLoading(true);
setOutput('');
setImgUrl('');
try {
// HuggingFace free endpoint: stabilityai/stable-diffusion-2
const response = await fetch(
'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ inputs: input })
}
);
const buffer = await response.arrayBuffer();
const base64 = Buffer.from(buffer).toString('base64');
setImgUrl(`data:image/png;base64,${base64}`);
} catch (err) {
setOutput('Error generating image.');
}
setLoading(false);
}

return (
<Card
title="Generate Image"
description="AI art from your own prompt. Free!"
icon="🖼️"
locked={locked}
>
<input
style={{ width: '94%', padding: 7, borderRadius: 5, border: '1px solid #444', margin: '7px 0 4px 0', background: '#0f1020', color: "#fff", fontSize: 16 }}
placeholder="Prompt: A futuristic AI host in the rain..."
disabled={locked}
value={input}
onChange={e => setInput(e.target.value)}
/>
<button
disabled={locked || loading || !input}
onClick={handleGenerate}
style={{
width: '100%',
marginTop: 4,
padding: '10px 0',
fontSize: 15,
borderRadius: 6,
background: locked ? "#444" : "#bb56ff", color: "#fff",
border: 'none', cursor: locked ? undefined : "pointer",
opacity: loading ? 0.6 : 1
}}
>{loading ? "Painting..." : "Generate"}</button>
<div style={{ minHeight: 50, marginTop: 10, textAlign: "center", opacity: locked ? 0.5 : 1 }}>
{imgUrl && <img src={imgUrl} alt="AI result" style={{ width: "100%", maxHeight: 180, objectFit: "contain", borderRadius: 8, background: "#090c18" }} />}
{output && <div style={{ color: "#eeb", fontSize: 16 }}>{output}</div>}
</div>
{locked && <CardLockOverlay />}
</Card>
);
}

// AUDIO GENERATOR (browser TTS)
function AudioGenCard({ locked }) {
const [input, setInput] = useState('');
const [playing, setPlaying] = useState(false);

function handlePlay() {
if (!input || locked) return;
const utter = new window.SpeechSynthesisUtterance(input);
utter.onend = () => setPlaying(false);
setPlaying(true);
window.speechSynthesis.speak(utter);
}

return (
<Card
title="Text to Audio"
description="Browser TTS, all local, no fees."
icon="🔊"
locked={locked}
>
<input
style={{ width: '94%', padding: 7, borderRadius: 5, border: '1px solid #444', margin: '7px 0 4px 0', background: '#0f1020', color: "#fff", fontSize: 16 }}
placeholder="Speak: Welcome to Epic Tech AI!"
disabled={locked}
value={input}
onChange={e => setInput(e.target.value)}
/>
<button
disabled={locked || !input || playing}
onClick={handlePlay}
style={{
width: '100%',
marginTop: 4,
padding: '10px 0',
fontSize: 15,
borderRadius: 6,
background: locked ? "#444" : "#03fac5", color: "#222",
border: 'none', cursor: locked ? undefined : "pointer"
}}
>{playing ? "Playing..." : "Speak"}</button>
{locked && <CardLockOverlay />}
</Card>
);
}

// CARD BASE COMPONENT
function Card({ title, description, icon, locked, children }) {
return (
<div style={{
background: "#16162a",
borderRadius: 15,
boxShadow: "0 2px 18px #0003",
padding: "26px 18px 16px 18px",
minHeight: 296,
maxWidth: 350,
position: 'relative',
filter: locked ? "blur(1.5px) grayscale(45%)" : undefined,
opacity: locked ? 0.75 : 1,
transition: 'all 0.12s'
}}>
<div style={{ fontSize: 30, marginBottom: 8 }}>{icon}</div>
<div style={{ fontWeight: 700, fontSize: 19, marginBottom: 5 }}>{title}</div>
<div style={{ color: "#ccc", fontSize: 14, marginBottom: 12 }}>{description}</div>
{children}
</div>
);
}

function CardLockOverlay() {
return (
<div style={{
position: 'absolute',
zIndex: 99,
top: 0, left: 0, width: '100%', height: '100%',
display: 'flex', alignItems: 'center', justifyContent: 'center',
color: '#fff', fontWeight: 700, fontSize: 28,
background: 'linear-gradient(180deg,#110a1c66 89%,#41ffe5aa 200%)',
borderRadius: 15,
pointerEvents: 'none'
}}>
🔒
</div>
);
}
