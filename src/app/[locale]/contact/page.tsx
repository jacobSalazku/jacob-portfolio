export default async function ContactPage() {
  return (
    <div className="w-full">
      {/* <iframe
        src="/resume.pdf"
        className="max-w-screen-lg"
        height={1080}
        width={1080}
      ></iframe> */}
      <object
        data="/resume.pdf"
        type="application/pdf"
        width={1090}
        height={1090}
        className="w-full"
      >
        <p>
          Your browser does not support PDFs.{' '}
          <a href="/resume.pdf">Download the PDF</a>.
        </p>
      </object>
    </div>
  );
}
