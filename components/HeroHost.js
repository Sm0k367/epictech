// /components/HeroHost.js

export default function HeroHost({ unlocked }) {
return (
<header style={{
width: '100%',
minHeight: '420px',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
background: 'radial-gradient(ellipse at top, #180030 75%, #0a0522 100%)',
position: 'relative',
overflow: 'hidden'
}}>
{/* Placeholder Hero Image — Swap with your AI character for ultimate impact */}
<img
src="/hero-host-placeholder.png"
alt="Epic Tech AI Host"
style={{
width: 210,
height: 210,
objectFit: 'cover',
borderRadius: '50%',
boxShadow: '0 8px 64px #0ff2, 0 0px 0px #000',
margin: '28px 0 20px 0',
filter: 'drop-shadow(0 0 10px #0cf7)'
}}
/>
<h1 style={{
fontSize: 38,
fontWeight: 800,
background: 'linear-gradient(90deg,#41ffe5 0%,#bb56ff 100%)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
letterSpacing: '1px',
margin: 0
}}>
Epic Tech AI
</h1>
<h3 style={{
fontWeight: 500,
color: '#fff',
marginBottom: 12,
letterSpacing: 2,
marginTop: 8,
fontSize: 20,
opacity: 0.92
}}>
{unlocked
? "AI Host: Welcome, Creator — Let's Build Something Epic!"
: "The Modular AI Platform For Creators • Unlock Premium Media Generation"}
</h3>
<span style={{
position: 'absolute',
left: 0, right: 0, bottom: 0,
height: 18, background: 'linear-gradient(0deg,#03fac522 80%,transparent)'
}}/>
</header>
);
}
