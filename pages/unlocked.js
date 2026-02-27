// /pages/unlocked.js

import { useEffect } from "react";
import { setUnlocked } from "../lib/unlock";
import { useRouter } from "next/router";

export default function Unlocked() {
const router = useRouter();

useEffect(() => {
setUnlocked();
// Brief UX message, then send home to main experience
const t = setTimeout(() => {
router.push("/");
}, 2200);
return () => clearTimeout(t);
}, []);

return (
<div style={{
minHeight: '100vh',
background: 'radial-gradient(circle, #2a0850 60%, #010316 100%)',
color: '#fff',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
}}>
<h1 style={{
fontSize: 42,
background: 'linear-gradient(90deg,#41ffe5 0%,#bb56ff 90%)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent'
}}>✨ Access Unlocked!</h1>
<p style={{
fontSize: 21,
fontWeight: 500,
color: "#cdf",
margin: "25px auto"
}}>Welcome to the full experience.<br />You’ll be redirected in a moment…</p>
</div>
);
}
