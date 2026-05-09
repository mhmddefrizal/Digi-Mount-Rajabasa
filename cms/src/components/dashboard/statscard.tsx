import { Card, CardContent } from "../ui/card";


interface Props {
  title: string;
  value: string;
  description: string;
  color: string;
}

// TODO: tambah icon untuk stats card
export default function StatsCard({
  title,
  value,
  description,
  color,
}: Props) {
  return (
    <Card className="border-border shadow-none rounded-xl">
      <CardContent className="p-6">
        {/* bagian element card */}
        <p className="text-[11px] tracking-[2px] text-text-muted font-medium">
            {title}
        </p>
        <h2 className="text-5xl font-bold mt-5">
            {value}
        </h2>
        <p className={`mt-6 text-sm font-medium ${color}`}>
            {description}
        </p>
      </CardContent>
    </Card>
  )
}