export default function PaddedNumsTimeline({
  num,
  h3,
  p,
  class1,
  class2,
}: {
  num: number;
  h3: string;
  p: string;
  class1?: string;
  class2?: string;
}) {
  return (
    <>
      <div className={class1 || undefined}>{String(num).padStart(2, '0')}</div>
      <div className={class2 || undefined}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </>
  );
}
