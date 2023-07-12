import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function CallingCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="w-32" variant="link">
          @torchTheMall
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://i.seadn.io/gcs/files/6b492b3e153b767779817a6281026cd9.png?auto=format&dpr=1&w=1000" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">torchTheMall</h4>
            <p className="text-sm">
              Basic chatbot uses pinecone and openai. Hit me up on
              twitter/@lommaj
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                July 11, 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
