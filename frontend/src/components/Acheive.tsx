export function Acheive(p: { Score: string | number; d: string }) {
    return <div className=" col-auto justify-end-safe">
        <div className="text-green-500 text-4xl">{p.Score}</div>
        <div>{p.d}</div>

    </div>
}