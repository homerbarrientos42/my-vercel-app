export const revalidate = 10;

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>ISR Demo 🚀</h1>
      <p>Revalidates every 10 seconds.</p>
      <p>Built at: {new Date().toISOString()}</p>
    </main>
  );
}