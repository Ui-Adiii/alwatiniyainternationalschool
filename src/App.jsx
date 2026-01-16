import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import AppRoute from "./routes/app.route";

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId;

    const raf = (time) => {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <AppRoute />
    </>
  );
};

export default App;
