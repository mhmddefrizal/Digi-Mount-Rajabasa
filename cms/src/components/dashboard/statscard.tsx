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
        
      </CardContent>
    </Card>
  )
}