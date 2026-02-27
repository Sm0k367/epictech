// /pages/index.js

import { useEffect, useState } from 'react';
import HeroHost from '../components/HeroHost';
import DemoMediaCards from '../components/DemoMediaCards';
import { isUnlocked } from '../lib/unlock';

export default function Home() {
const [unlocked, setUnlocked] = useState(false);

useEffect(() => {
setUnlocked(isUnlocked());
}, []);

function handleUnlock() {
window.location.href = "https://buy.stripe.com/3cI8wQgj74LI592cDM0Fi05";
}

return (
<div style={{
minHeight: '100vh',
background: 'linear-gradient(135deg, #0c0522 70%, #03fac5 100%)',
color: '#fff',
fontFamily: 'Inter, sans-serif'
}}>
<HeroHost unlocked={unlocked} />
<div style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}>
{unlocked ? (
<>
<h2 style={{ marginBottom: 20 }}>🎉 Welcome to Epic Tech AI — Creative Media Platform</h2>
<p style={{ marginBottom: 32 }}>Fully unlocked! Generate text, images, and audio. Powered entirely in-browser with free endpoints.</p>
<DemoMediaCards />
</>
) : (
<>
<h2 style={{ marginBottom: 20 }}>Unlock Epic Tech AI</h2>
<p>Get full access to our creative AI platform. One-time unlock for your browser/device.<br/>No recurring costs, no upgrade traps.</p>
<button
onClick={handleUnlock}
style={{
margin: '40px 0 10px 0',
fontSize: 22,
padding: '16px 48px',
borderRadius: 9,
border: 'none',
background: 'linear-gradient(90deg,#3f0ad7 10%,#03fac5 90%)',
color: '#fff',
fontWeight: 700,
letterSpacing: 1,
cursor: 'pointer',
boxShadow: '0 2px 10px #0004'
}}
>Unlock via Stripe</button>
<p style={{ fontSize: 13, color: '#ccc', marginTop: 14 }}>Already paid? <a href="/unlocked" style={{ color: '#0fe' }}>Click here</a> to unlock with your magic link.</p>
<div style={{marginTop:60}}>
<DemoMediaCards locked />
</div>
</>
)}
</div>
</div>
);
}
