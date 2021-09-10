export default function Map() {
  return (
    <div className="col-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.2070090817792!2d17.963568215946797!3d59.3725479262398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e763fefd873%3A0x60f0caf5c09f5801!2sGr%C3%B6na%20Stugan!5e0!3m2!1ssv!2sse!4v1630997017131!5m2!1ssv!2sse"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
