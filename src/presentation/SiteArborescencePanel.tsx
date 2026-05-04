import { SiteArborescenceBoard } from "@/presentation/SiteArborescenceBoard"
import { SiteArborescenceDetails } from "@/presentation/SiteArborescenceDetails"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export function SiteArborescencePanel() {
  return (
    <Tabs defaultValue="general" id="arborescence-view" className="w-full">
      <div className="mb-6 flex justify-start">
        <TabsList
          variant="default"
          className={cn(
            "inline-flex h-9 w-auto shrink-0 gap-1 p-1",
            "rounded-lg bg-muted/60"
          )}
        >
          <TabsTrigger
            value="general"
            className="h-7 flex-none rounded-md px-4 text-xs sm:px-5"
          >
            Vue générale
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="h-7 flex-none rounded-md px-4 text-xs sm:px-5"
          >
            Détails
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="general" className="mt-0 outline-none">
        <SiteArborescenceBoard />
      </TabsContent>

      <TabsContent value="details" className="mt-0 outline-none">
        <SiteArborescenceDetails />
      </TabsContent>
    </Tabs>
  )
}
