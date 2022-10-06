const Sauelaster = () => (
    <div className="flex flex-col items-center">
        <p>
            Henter bilde fra Unsplash, knasker det gjennom Sqip og spytter ut
            svg. Vennligst vent...
        </p>
        <img
            className="mt-10 h-64 rounded-lg bg-white shadow-lg"
            src="/sauelaster.gif"
            alt=""
        />
    </div>
);

export default Sauelaster;
