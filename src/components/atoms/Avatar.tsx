import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IAvatarAtom {
  url: string;
  alt: string;
}

export function AvatarAtom({ url }: IAvatarAtom) {
  return (
    <Avatar>
      <AvatarImage src={url} alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
}
