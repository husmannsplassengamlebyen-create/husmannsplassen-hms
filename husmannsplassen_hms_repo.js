/*
Oppdatert web/index.js med klikkbare nedlastningslenker til Word/PDF-dokumentene.
*/
import Link from 'next/link';
export default function Home() {
  const kapitler = Array.from({length:12},(_,i)=>`Kapittel ${i+1}`);
  const skjemaer = [
    "Avviksskjema",
    "Daglig renholdslogg",
    "Temperaturlogg",
    "Brannøvelseslogg",
    "Opplæring HMS"
  ];
  const downloads = [
    {name: "HMS Perm BW", url: "/docs/Husmannsplassen_HMS_Perm_FERDIG_BW.docx"},
    {name: "HMS Perm Color", url: "/docs/Husmannsplassen_HMS_Perm_FERDIG_COLOR.docx"}
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">HMS-Perm Husmannsplassen</h1>
      <h2 className="text-2xl font-semibold mt-6">Kapitler</h2>
      <ul className="list-disc ml-6">
        {kapitler.map((k,i)=><li key={i}><Link className="text-blue-600 underline" href={`/kapittel/${i+1}`}>{k}</Link></li>)}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Skjemaer</h2>
      <ul className="list-disc ml-6">
        {skjemaer.map((s,i)=><li key={i}><Link className="text-blue-600 underline" href={`/skjema/${i+1}`}>{s}</Link></li>)}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Last ned dokumentene</h2>
      <ul className="list-disc ml-6">
        {downloads.map((d,i)=><li key={i}><a className="text-blue-600 underline" href={d.url} download>{d.name}</a></li>)}
      </ul>
    </div>
  );
}