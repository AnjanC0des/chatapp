import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Add avatar images later.
// import { AvatarImage } from "@/com ponents/ui/avatar";
export default ({ recipients }) => {
  return (
    <>
      {recipients.map((obj) => {
        return (
          <>
            <div className="flex p-2 gap-1">
              <Avatar>
                <AvatarFallback>{obj.avatar}</AvatarFallback>
              </Avatar>
              <Card className="w-fit">{obj.name}</Card>
            </div>
          </>
        );
      })}
    </>
  );
};
