export default function ErrorFallback({ error }) {
  console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.toString()}</pre>
    </div>
  );
}