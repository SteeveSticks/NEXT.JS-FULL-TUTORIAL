import Hello from "../components/hello";

export default function Home() {
  console.log("What am I doing here? -- SERVER/CLIENT?");

  return (
    <>
      <h1>Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
